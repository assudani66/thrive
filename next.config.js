/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    SUPABASE_PROJECT_URL : "https://xfxryigwumsqmiecgjuk.supabase.co",
    SUPABASE_API_KEY : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmeHJ5aWd3dW1zcW1pZWNnanVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc1MDA4ODAsImV4cCI6MjAwMzA3Njg4MH0.oAKfy5UijUn95c3y9L5bA6M-iGDwJO2JvbIuj9-hI7Y"

  }
}

module.exports = nextConfig
