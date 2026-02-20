import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yxmtrbyafomntdohxtii.supabase.co";
const supabaseKey = "sb_publishable_-QCFd4d3dIIw7416qd_6gA_tHQix3ga";

export const supabase = createClient(supabaseUrl, supabaseKey);