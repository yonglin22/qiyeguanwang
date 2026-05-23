/*
  # Fix RLS policy on demo_requests

  1. Security Changes
    - Drop the overly permissive INSERT policy `Allow anonymous demo request submissions`
      which used `WITH CHECK (true)` — this bypassed RLS entirely
    - Create a restrictive INSERT policy that validates required fields are non-empty
    - This prevents empty/malicious inserts while allowing legitimate form submissions

  2. Policy Details
    - New policy `Allow demo request submissions with valid data` for INSERT
    - Checks: name, company, email, team_size must all be non-empty
    - Applies to both anon and authenticated roles
*/

DROP POLICY IF EXISTS "Allow anonymous demo request submissions" ON demo_requests;

CREATE POLICY "Allow demo request submissions with valid data"
  ON demo_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    coalesce(name, '') <> ''
    AND coalesce(company, '') <> ''
    AND coalesce(email, '') <> ''
    AND coalesce(team_size, '') <> ''
  );
