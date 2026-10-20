# MEMORY — Matta's Kitchen

## Estado actual (2026-10-12)
- v1.1 completada: imágenes nuevas, tipografía restaurada, carrito verificado y mejorado.
- Rama `feature/mattas-home`. Todo sin commit. `pnpm build` ✓.

## Decisiones importantes
- Stack fijado: React 18 + Vite + pnpm. Sin Redux, sin React Router, sin nuevas dependencias.
- Productos/precios: única fuente `src/data/products.js` (12 reales). No inventar.
- Imágenes en una sola carpeta: `public/img/` (fotos reales del usuario, fotos de galería, logo y fotos TEMP de internet). Rutas `/img/...`.
- Logo verificado: `public/img/logo-mattas-kitchen.png`. Aprobado para header/About/footer/favicon. NO reemplazar ni modificar.
- `Captura desde 2026-08-18 12-12-21.png` es COPIA del logo: NO usar como foto de producto.
- Instagram oficial: https://www.instagram.com/mattas_kitchen/
- Contacto (DATOS DE PRUEBA) en `src/data/contact.js`: oman7910@gmail.com.
- Flujo de pedido: sin pasarela; cierra con resumen + email/WhatsApp.
- Carrito: useState en App + hook `useCart` + localStorage. Verificado en Chrome real.
- Web en inglés (datos del negocio en £). Usuario no lee inglés: traducción de UI pendiente de decisión.

## Imágenes TEMP de internet (Unsplash, sustituir por fotos reales)
- Hero: `public/img/hero-catering.jpeg` (grazing table, photo-1526865906320-0200a6e2c7f0)
- Regular Box: `public/img/TEMP-regular-box.jpeg` (empanadas, photo-1609525313344-a56b96f20718)
- Large Box: `public/img/TEMP-large-box.jpeg` (mini tacos, photo-1596685212227-d3a0b82d9a6d)
- Premium Box: `public/img/TEMP-premium-box.jpeg` (mini burgers, photo-1615996006141-6356067b9145)
- Categorías: `public/img/TEMP-category-{boxes,desserts,juices}.jpeg`
- Todas marcadas con comentario TEMPORAL en el código.

## Arquitectura
- `App.jsx` compone componentes en `src/components/`; estado de UI (filtro, menú, carrito) en App.
- `useCart` (src/hooks/): {id: qty}, add/change/remove/clear, count, total, localStorage.
- `App.css`: sistema visual completo; wordmark restaurado de git HEAD (.brand/.brand-script/.brand-kitchen).
- Gallery: aprobada por el usuario — NO tocar.

## Carrito (verificado en Chrome real, 2026-10-12)
- Añadir, líneas separadas por id, cantidades, subtotales, total exacto (£190.00 probado), eliminar, estado vacío, persistencia tras recarga: TODO OK.
- Mejoras aplicadas: feedback "Added ✓" 1.2s en el botón; botones +/− de 44px.
- Causa probable de la impresión de error: hero roto (/img/ sin archivo) + falta de feedback en el botón.

## NO repetir
- No inventar productos, precios, fotos ni info comercial.
- No usar hotlinks: descargar fotos a public/img/ con nombre claro.
- No hacer push ni deploy sin aprobación.
- No reconstruir desde cero: extender el diseño actual.
