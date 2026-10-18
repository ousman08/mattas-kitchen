/** @type {import('next').NextConfig} */
const nextConfig = {
    // Permite abrir el servidor de desarrollo desde otros dispositivos de la
    // red local (ej. el móvil en http://192.168.1.137:3000). Solo el hostname:
    // sin http:// y sin puerto (formato oficial de allowedDevOrigins).
    allowedDevOrigins: ['192.168.1.137'],
}

export default nextConfig
