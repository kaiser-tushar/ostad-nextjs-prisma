/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["roar.media"],
  },
  env: {
    BASE_URL: "https://basic-blog.teamrabbil.com/api",
  },
};

module.exports = nextConfig;
