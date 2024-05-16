import { createClient } from "@supabase/supabase-js";
import config from "../config";

const supabaseUrl = config.database.supabase.apiUrl;
const supabaseKey = config.database.supabase.apiKey;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;