-- Run once in Supabase → SQL Editor (creators table must exist).
alter table creators add column if not exists youtube_handle text;
alter table creators add column if not exists twitter_handle text;
alter table creators add column if not exists instagram_handle text;
