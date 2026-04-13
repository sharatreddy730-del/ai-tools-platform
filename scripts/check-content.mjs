import { createClient } from "@supabase/supabase-js";
import 'dotenv/config';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function check() {
  const { count: totalDesc } = await supabase.from('seo_pages').select('id', { head: true, count: 'exact' });
  const { count: nullContent } = await supabase.from('seo_pages').select('id', { head: true, count: 'exact' }).is('content', null);
  const { count: hasContent } = await supabase.from('seo_pages').select('id', { head: true, count: 'exact' }).not('content', 'is', null);

  console.log(`Total: ${totalDesc}`);
  console.log(`Null Content: ${nullContent}`);
  console.log(`Has Content: ${hasContent}`);
}

check();
