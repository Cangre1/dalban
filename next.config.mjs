/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  // Genera archivos .html para cada ruta
  extensionPageWildcard: '.html',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
