// GOOD - create client lazily inside function
import { createClient } from '@supabase/supabase-js'
export function getClient() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}
export async function fetchStuff() {
  const supabase = getClient()
  return await supabase.from('x').select('*')
}
