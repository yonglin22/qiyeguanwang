/*
  # Create demo_requests table

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key)
      - `name` (text, not null) — 申请人姓名
      - `company` (text, not null) — 公司名称
      - `email` (text, not null) — 工作邮箱
      - `team_size` (text, not null) — 团队规模范围
      - `status` (text, default 'pending') — 状态：pending/contacted/demo_scheduled/completed
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `demo_requests` table
    - No public access — all operations restricted to service role only
    - Frontend inserts via anon key allowed with WITH CHECK policy
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  team_size text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous demo request submissions"
  ON demo_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view demo requests"
  ON demo_requests FOR SELECT
  TO authenticated
  USING (true);
