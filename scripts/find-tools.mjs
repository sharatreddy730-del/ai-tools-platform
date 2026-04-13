import { createClient } from "@supabase/supabase-js";
import 'dotenv/config';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function findTools() {
  // We want to fetch the exact 4 they asked for, plus 16 other good e-commerce/SEO ones
  const targetSlugs = [
    'amazon-title-generator',
    'shopify-product-description',
    'ebay-listing-generator',
    'ai-roadmap-generator'
  ];
  
  const { data: specific, error: err1 } = await supabase
    .from('seo_pages')
    .select('slug')
    .in('slug', targetSlugs);
    
  // Find others that contain keywords like generator, seo, ecommerce, etc.
  const { data: generic, error: err2 } = await supabase
    .from('seo_pages')
    .select('slug, name, platform, category')
    .limit(200);
    
  if (err2 || err1) { console.error("Error", err1 || err2); return; }

  const specificSlugsStr = specific.map(d => d.slug);
  const otherGoodSlugs = generic
    .map(d => d.slug)
    .filter(s => !specificSlugsStr.includes(s) && (s.includes('generator') || s.includes('seo') || s.includes('title') || s.includes('description')))
    .slice(0, 16);
    
  console.log("Specific:");
  console.log(specificSlugsStr.join("\n"));
  console.log("Others:");
  console.log(otherGoodSlugs.join("\n"));
}
findTools();
