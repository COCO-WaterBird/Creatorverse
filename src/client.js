import { createClient } from '@supabase/supabase-js'

const URL = import.meta.env.VITE_SUPABASE_URL
const API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!URL || !API_KEY) {
  throw new Error(
    'Missing Supabase env: set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local (see .env.example).',
  )
}

export const supabase = createClient(URL, API_KEY)
