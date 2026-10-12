# Tareas — 001 Matta's Kitchen

Trabajo por bloques funcionales. Cada bloque termina con `pnpm build` y resumen.

## [x] Bloque 1 — Documentación y correcciones base
- **Objetivo:** dejar la gobernanza, la especificación y la base de datos correctas.
- **Archivos:** `docs/constitution.md`, `AGENTS.md`, `MEMORY.md`, `specs/001-mattas-kitchen/{spec,plan,tasks}.md`, `src/data/contact.js`, `src/data/products.js` (foto TEMP de Cheesecake Shots).
- **Requisitos:** RF-09, RF-12, RF-13, RF-14, RF-15.
- **Hecho cuando:** la documentación existe, `src/data/contact.js` centraliza los datos de prueba y `products.js` ya no usa la copia del logo para Cheesecake Shots.

## [x] Bloque 2 — Catálogo real, imágenes y categorías
- **Objetivo:** mostrar los productos reales con fotos y filtro por categoría.
- **Archivos:** `src/App.jsx`, `src/components/{Hero,Intro,Catalogue,ProductCard,CategoryCards,Occasions,About,Gallery,FinalCta,Footer}.jsx`, `src/App.css`.
- **Requisitos:** RF-01, RF-06–RF-08, RF-09–RF-11, RF-13–RF-16, RF-17–RF-21, RF-23, RF-34, RF-36–RF-41.
- **Hecho cuando:** `pnpm build` pasa; el catálogo muestra los 12 productos con fotos (11 reales + 1 TEMP); los filtros All/Boxes/Desserts/Juices funcionan; las category cards filtran al pulsar; header y footer muestran el logo; Instagram enlaza a la URL oficial.

## [x] Bloque 3 — Carrito y flujo de pedido
- **Objetivo:** carrito funcional con persistencia y pedido por contacto.
- **Archivos:** `src/components/{CartDrawer,OrderForm}.jsx`, `src/hooks/useCart.js`, `src/App.jsx`, `src/App.css`.
- **Requisitos:** RF-04, RF-22, RF-24–RF-32.
- **Hecho cuando:** `pnpm build` pasa; añadir/quitar/actualizar cantidades funciona; el total es correcto; el carrito persiste al recargar; el formulario valida nombre y contacto; confirmar genera mailto y wa.me con el resumen y vacía el carrito.

## [x] Bloque 4 — Navegación móvil, responsive, accesibilidad y QA final
- **Objetivo:** cerrar móvil y accesibilidad.
- **Archivos:** `src/components/{Header,MobileNav}.jsx`, `src/App.jsx`, `src/App.css`.
- **Requisitos:** RF-02, RF-03, RF-05, RF-33, RF-35, RF-42–RF-48.
- **Hecho cuando:** `pnpm build` pasa; el menú ☰ abre/cierra (overlay, Escape, `aria-expanded`); sin overflow horizontal a 360px; todas las imágenes tienen `alt`; los botones de icono tienen `aria-label`; el contador del carrito usa `aria-live`; el pedido se completa solo con teclado.
