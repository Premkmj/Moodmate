import { cookies } from 'next/headers'

import { createServerClient } from '@supabase/ssr'
import { type Database } from '@/database.types';

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient<Database>(
   process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://nzdpfgtafmmeyxuhbrhw.supabase.co'!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56ZHBmZ3RhZm1tZXl4dWhicmh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyNjAxMDksImV4cCI6MjA3MzgzNjEwOX0.lkk1VtVqaWdJArOyEmgKbpa8CJq9rN5cvVZVawC9pfU!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}
