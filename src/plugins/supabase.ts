import { createClient } from '@supabase/supabase-js'
import type { AuthUser, User } from '@supabase/supabase-js'
import type { Database } from '@/shared/model'
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY)
export type { AuthUser, User }
