import dotenv from 'dotenv'
dotenv.config();
export default {
  database: {
    supabase: {
      apiKey: process.env.SUPABASE_KEY,
      apiUrl: process.env.SUPABASE_URL,
    }
  },
}