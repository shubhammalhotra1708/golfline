import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseClient } from "@/lib/supabase";

const RECIPIENT_EMAIL =
  process.env.CONTACT_EMAIL || "shubhammalhotra012@gmail.com";

interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  quantity: string;
  category: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { firstName, lastName, company, email, message } = body;
    if (!firstName || !lastName || !company || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Basic email format check
    if (!email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    let dbSaved = false;
    let emailSent = false;

    // ─── Store in Supabase ───
    const supabase = getSupabaseClient();
    if (supabase) {
      const { error: dbError } = await supabase.from("inquiries").insert({
        first_name: firstName,
        last_name: lastName,
        company,
        email,
        quantity: body.quantity || null,
        category: body.category || null,
        message,
        status: "new",
        ip_address: request.headers.get("x-forwarded-for") || null,
        user_agent: request.headers.get("user-agent") || null,
      });

      if (dbError) {
        console.error("Supabase insert error:", dbError);
      } else {
        dbSaved = true;
      }
    }

    // ─── Send emails via Resend ───
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);

      // 1. Notification email to you
      const { error: notifyError } = await resend.emails.send({
        from: "Golfline Website <onboarding@resend.dev>",
        to: [RECIPIENT_EMAIL],
        replyTo: email,
        subject: `New Enquiry from ${firstName} ${lastName} — ${company}`,
        text: `
NEW ENQUIRY — GOLFLINE WEBSITE
${"=".repeat(40)}

Name:             ${firstName} ${lastName}
Company:          ${company}
Email:            ${email}
Order Quantity:   ${body.quantity || "Not specified"}
Product Category: ${body.category || "Not specified"}

${"—".repeat(40)}
MESSAGE:
${"—".repeat(40)}

${message}

${"=".repeat(40)}
This enquiry was submitted via the Golfline website contact form.
        `.trim(),
      });

      if (notifyError) {
        console.error("Resend notification error:", notifyError);
      } else {
        emailSent = true;
      }

      // 2. Acknowledgment email to the visitor
      const { error: ackError } = await resend.emails.send({
        from: "Golfline <onboarding@resend.dev>",
        to: [email],
        subject: `We've received your enquiry — Golfline`,
        text: `
Dear ${firstName},

Thank you for reaching out to Golfline. We have received your enquiry and our team is reviewing it.

Here's a summary of what you submitted:

  Company:          ${company}
  Order Quantity:   ${body.quantity || "Not specified"}
  Product Category: ${body.category || "Not specified"}

What happens next:
  - Our development team will review your brief
  - You will receive a formal feasibility study and costing
  - Typical response time: within 48 hours

If you have any additional details to share in the meantime, simply reply to this email.

Warm regards,
The Golfline Team
Ludhiana, Punjab, India
enquiries@golfline.com
        `.trim(),
      });

      if (ackError) {
        console.error("Resend acknowledgment error:", ackError);
        // Ack email failing is not critical — the inquiry is still received
      }
    }

    // ─── Determine response based on what actually worked ───
    if (dbSaved || emailSent) {
      return NextResponse.json({ success: true });
    }

    if (supabase || apiKey) {
      // Services were configured but both failed
      return NextResponse.json(
        { error: "We couldn't process your enquiry right now. Please email us directly at enquiries@golfline.com." },
        { status: 500 }
      );
    }

    // Nothing is configured at all
    return NextResponse.json(
      { error: "Our contact system is temporarily unavailable. Please email us directly at enquiries@golfline.com." },
      { status: 503 }
    );
  } catch {
    console.error("Contact form error");
    return NextResponse.json(
      { error: "Something went wrong. Please email us directly at enquiries@golfline.com." },
      { status: 500 }
    );
  }
}
