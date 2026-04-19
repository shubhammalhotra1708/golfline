-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard → SQL Editor)
-- This creates the inquiries table and a view for quick stats.

-- ─── INQUIRIES TABLE ───
create table if not exists inquiries (
  id            uuid default gen_random_uuid() primary key,
  created_at    timestamptz default now() not null,

  -- Contact info
  first_name    text not null,
  last_name     text not null,
  company       text not null,
  email         text not null,

  -- Inquiry details
  quantity      text,
  category      text,
  message       text not null,

  -- Follow-up tracking
  status        text default 'new' not null,
  notes         text,
  followed_up_at timestamptz,

  -- Metadata
  source        text default 'website',
  ip_address    text,
  user_agent    text
);

-- Index for quick lookups
create index if not exists idx_inquiries_status on inquiries(status);
create index if not exists idx_inquiries_created_at on inquiries(created_at desc);
create index if not exists idx_inquiries_email on inquiries(email);

-- ─── STATUS OPTIONS ───
-- 'new'        → just submitted, not yet reviewed
-- 'contacted'  → you've responded
-- 'quoted'     → you've sent a quote/costing
-- 'negotiating'→ in discussion
-- 'won'        → converted to order
-- 'lost'       → didn't convert
-- 'spam'       → junk submission

-- ─── ROW LEVEL SECURITY ───
alter table inquiries enable row level security;

-- Only service role (your API route) can insert
create policy "Service role can insert" on inquiries
  for insert to service_role
  with check (true);

-- Only service role can read (for future dashboard API)
create policy "Service role can read" on inquiries
  for select to service_role
  using (true);

-- Only service role can update (for status changes)
create policy "Service role can update" on inquiries
  for update to service_role
  using (true);

-- ─── SUMMARY VIEW ───
-- Quick stats you can query: select * from inquiry_summary;
create or replace view inquiry_summary as
select
  count(*) as total,
  count(*) filter (where status = 'new') as new_count,
  count(*) filter (where status = 'contacted') as contacted_count,
  count(*) filter (where status = 'quoted') as quoted_count,
  count(*) filter (where status = 'won') as won_count,
  count(*) filter (where status = 'lost') as lost_count,
  count(*) filter (where created_at > now() - interval '7 days') as last_7_days,
  count(*) filter (where created_at > now() - interval '30 days') as last_30_days
from inquiries
where status != 'spam';
