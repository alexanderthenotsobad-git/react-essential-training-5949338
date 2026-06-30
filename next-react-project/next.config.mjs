/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "*.app.github.dev",
        "sturdy-space-fiesta-v6gr4pjwp7p2wjgv-3000.app.github.dev"
      ]
    }
  }
};

export default nextConfig;
