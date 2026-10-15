# Plan técnico — 001 Matta's Kitchen

## Objetivo
Terminar la web one-page de Matta's Kitchen sobre el diseño existente: catálogo real con filtros, carrito funcional, flujo de pedido por contacto, navegación móvil y accesibilidad básica.

## Archivos a modificar
- `src/App.jsx` — pasa de página monolítica a composición de componentes; añade estado de filtro, menú y carrito.
- `src/App.css` — extiende el sistema actual: imágenes reales, barra de filtros, drawer de carrito, formulario de pedido, menú móvil, foco visible. Se eliminan los estilos de placeholder (en desuso).
- `src/data/products.js` — solo cambia la imagen de Cheesecake Shots por la temporal (con comentario TEMP).

## Archivos a crear
- `src/components/Header.jsx` — logo aprobado, navegación desktop, enlace "Order now", botón Bag con contador, botón menú móvil.
- `src/components/MobileNav.jsx` — menú móvil en panel lateral con overlay.
- `src/components/Hero.jsx` — titular, texto, CTA y fotografía real.
- `src/components/Intro.jsx` — sección de bienvenida (contenido actual).
- `src/components/Catalogue.jsx` — barra de filtros (All/Boxes/Desserts/Juices) + rejilla de productos.
- `src/components/ProductCard.jsx` — tarjeta reutilizable: imagen, nombre (+size), descripción, minimumOrder, precio, "Add to bag".
- `src/components/CategoryCards.jsx` — 3 tarjetas visuales con fotos reales; al pulsar, filtran el catálogo.
- `src/components/Occasions.jsx` / `About.jsx` / `Gallery.jsx` / `FinalCta.jsx` / `Footer.jsx` — secciones existentes con imágenes reales e Instagram oficial.
- `src/components/CartDrawer.jsx` — drawer del carrito: líneas, cantidades, total, estado vacío y pasos de pedido (formulario → confirmación).
- `src/components/OrderForm.jsx` — formulario mínimo del pedido (nombre y contacto obligatorios).
- `src/hooks/useCart.js` — estado del carrito (añadir, cambiar cantidad, eliminar, vaciar, count, total) con persistencia localStorage.
- `src/data/contact.js` — email, WhatsApp e Instagram (datos de prueba marcados).

## Arquitectura y flujo de datos
- `App.jsx` mantiene el estado de UI (filtro activo, menú móvil, drawer abierto) y el carrito vía `useCart`.
- Datos: `products.js` → App → Catalogue/ProductCard; `contact.js` → Footer/CartDrawer.
- Flujo del pedido: Add to bag → Bag (drawer) → Continue (formulario) → Confirm (resumen + mailto/wa.me) → carrito vacío.

## Lógica del carrito
- Estado: `{ [productId]: quantity }`.
- `addToCart`, `changeQuantity(id, delta)` (elimina la línea en 0), `removeLine`, `clearCart`.
- `count` = Σ cantidades; `total` = Σ precio × cantidad, mostrado en GBP (£).
- Persistencia en `localStorage` con clave `mattas-kitchen-cart`; degrada correctamente si no existe.

## Estrategia responsive
- Mobile-first; breakpoints existentes (900px y 600px).
- Imágenes con `object-fit: cover` (`contain` para el logo en About).
- Drawer y menú móvil: `width: min(430px, 94vw)`; sin overflow horizontal a 360px.

## Estrategia de imágenes
- Reales de `public/img-MK/` para los 11 productos con foto.
- Hero: `Captura desde 2026-08-25 17-46-22.png` (única imagen libre).
- About: logo aprobado como imagen de marca.
- Gallery y category cards: reuso de fotos reales de productos.
- Cheesecake Shots: foto temporal `TEMP-` descargada de internet, marcada para sustituir.
- La asignación concreta queda pendiente de verificación visual del usuario.

## Validaciones
- `pnpm build` sin errores tras cada bloque.
- Consola del navegador sin warnings (keys, imágenes).
- Móvil 360px: sin overflow horizontal; áreas táctiles ≥44px.
- Teclado: navegación, filtros, carrito y formulario operativos; foco visible.
- Pedido: mailto y wa.me generan el resumen correcto con los datos de prueba.

## Riesgos y pendientes
- Asignación de fotos a hero/about/gallery: verificar visualmente (el agente no ve imágenes).
- Sustituir el contacto de prueba y la foto TEMP por los datos reales.
- Optimización de peso de imágenes (~5.9 MB): aplazar.
