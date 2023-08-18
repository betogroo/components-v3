import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/shared/model'

export const supabase = createClient<Database>(
  'https://sxqxihgahgbcgwpcftbx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4cXhpaGdhaGdiY2d3cGNmdGJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NzQ1MTcsImV4cCI6MjAwNzM1MDUxN30.H5uKzQjQ2zPx_K9qd7BkM90ECQzS2_jX1a5DdSi3_QA',
)
