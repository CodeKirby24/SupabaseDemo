import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://wlvxdqwnimmasfuepwsw.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsdnhkcXduaW1tYXNmdWVwd3N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwNzYxOTksImV4cCI6MjA0MTY1MjE5OX0.QbHlF1WdTjbz9XzGeBhONhI9y4QApFDK4GUBvzupjs0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})