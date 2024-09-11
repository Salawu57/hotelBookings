import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pxurszwlvhpibgnrxyam.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4dXJzendsdmhwaWJnbnJ4eWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzNTg2MTUsImV4cCI6MjA0MDkzNDYxNX0.K4timNFiwGRuHhlV-Tait12FwRG5aAavdtLFTu5dHAA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
