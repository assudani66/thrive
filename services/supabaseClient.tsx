import { createClient } from "@supabase/supabase-js";

const url:string = process.env.SUPABASE_PROJECT_URL!
const apiKey:string = process.env.SUPABASE_API_KEY!

export const supabase = createClient(url,apiKey)
