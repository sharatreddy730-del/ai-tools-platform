import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import 'dotenv/config';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function listUrls() {
    const { data } = await supabase.from('seo_pages').select('slug, content').neq('content', null);
    if (!data) return;
    const valid = data.filter(d => d.content && d.content.length > 500);
    const urls = valid.map(v => `https://yourdomain.com/tools/${v.slug}`).join('\n');
    fs.writeFileSync('ready-urls.txt', urls);
    console.log("Saved to ready-urls.txt");
}
listUrls();
