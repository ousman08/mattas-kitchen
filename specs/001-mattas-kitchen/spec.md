# Spec — Matta's Kitchen (001)

Web one-page para Matta's Kitchen (catering): premium, artesanal, celebrativa.
Fuentes de verdad: productos y precios → `src/data/products.js` · imágenes → `public/img-MK/` ·
logo → `public/img-MK/logo-mattas-kitchen.png` · Instagram → https://www.instagram.com/mattas_kitchen/
Contacto → `src/data/contact.js` (actualmente DATOS DE PRUEBA).

Estado de imágenes: 11 productos con foto real; Cheesecake Shots temporalmente sin foto real.
El archivo `Captura desde 2026-08-18 12-12-21.png` es copia idéntica del logo y queda excluido de la web.
Sin pasarela de pago. Sin nuevas dependencias.

## 1. Header
RF-01: EL SISTEMA muestra el logo aprobado en el header y el footer, enlazando al inicio.
RF-02: EN escritorio, EL SISTEMA muestra la navegación por anclas (Menu, Occasions, About, Gallery).
RF-03: EL SISTEMA muestra "Order now" que lleva al catálogo.
RF-04: EL SISTEMA muestra el contador de artículos del carrito en el header.
RF-05: EL SISTEMA mantiene el header fijo al hacer scroll.

## 2. Hero
RF-06: EL SISTEMA muestra una imagen gastronómica real de `public/img-MK/` como visual del hero.
RF-07: EL SISTEMA muestra el titular, el texto de apoyo y el CTA "Order now" hacia el catálogo.
RF-08: EL SISTEMA mantiene la nota handwritten "Made with care for your table."

## 3. Catálogo real
RF-09: EL SISTEMA renderiza el catálogo exclusivamente desde `src/data/products.js`.
RF-10: POR CADA PRODUCTO, EL SISTEMA muestra nombre, descripción, precio (`priceLabel`) y botón "Add to bag".
RF-11: SI un producto tiene `product.image`, ENTONCES EL SISTEMA muestra esa imagen real (`/img-MK/...`).
RF-12: SI un producto NO tiene imagen real asignada (caso actual: Cheesecake Shots), ENTONCES EL SISTEMA usa una fotografía temporal de internet, claramente marcada como temporal y fácil de sustituir, sin usar el logo ni presentarla como la foto real definitiva.
RF-13: SI un producto tiene `size`, ENTONCES EL SISTEMA lo muestra junto al nombre (p. ej. "Bissap · 500ml").
RF-14: SI un producto tiene `minimumOrder`, ENTONCES EL SISTEMA lo muestra en la tarjeta.
RF-15: EL SISTEMA usa `product.id` como clave única de lista.
RF-16: EL SISTEMA no muestra placeholders donde exista imagen real.

## 4. Categorías
RF-17: EL SISTEMA muestra la barra de filtros All / Boxes / Desserts / Juices, tomada del export `categories` de `products.js`.
RF-18: EL SISTEMA usa "All" por defecto y muestra todos los productos.
RF-19: CUANDO el usuario selecciona una categoría, EL SISTEMA filtra el catálogo y marca la activa.
RF-20: CUANDO el usuario pulsa una category card, EL SISTEMA lleva al catálogo con esa categoría filtrada.

## 5. Product cards
RF-21: EL SISTEMA muestra cada producto en tarjeta: imagen, nombre, descripción, precio y "Add to bag".
RF-22: CUANDO el usuario pulsa "Add to bag", EL SISTEMA añade una unidad al carrito y actualiza el contador.
RF-23: EL SISTEMA da feedback visual inmediato de la adición.

## 6. Carrito
RF-24: CUANDO el usuario pulsa "Bag", EL SISTEMA abre un panel lateral (drawer) con las líneas del carrito.
RF-25: POR CADA LÍNEA, EL SISTEMA muestra miniatura, nombre, precio unitario, cantidad y subtotal.
RF-26: EL SISTEMA permite subir, bajar y eliminar cantidades; SI la cantidad llega a 0, ENTONCES EL SISTEMA elimina la línea.
RF-27: EL SISTEMA muestra el total en GBP (£) como Σ precio × cantidad.
RF-28: SI el carrito está vacío, ENTONCES EL SISTEMA muestra mensaje vacío y deshabilita continuar.
RF-29: EL SISTEMA persiste el carrito en localStorage.

## 7. Flujo de pedido
RF-30: EL SISTEMA ofrece "Continue" desde el carrito hacia un formulario mínimo (nombre y contacto obligatorios; fecha del evento y notas opcionales) con el resumen del pedido.
RF-31: EL SISTEMA valida los campos obligatorios antes de confirmar.
RF-32: CUANDO el usuario confirma, EL SISTEMA muestra el resumen y dos acciones de contacto (email y WhatsApp con el resumen del pedido) y vacía el carrito. Sin pasarela de pago.

## 8. Navegación móvil
RF-33: EN pantallas ≤900px, EL SISTEMA oculta la navegación desktop y muestra el botón ☰.
RF-34: CUANDO el usuario pulsa ☰, EL SISTEMA abre el menú con los enlaces y "Order now", con `aria-expanded`.
RF-35: CUANDO el usuario pulsa un enlace del menú, el overlay o Escape, EL SISTEMA cierra el menú.

## 9. Occasions
RF-36: EL SISTEMA muestra la sección con el contenido existente (Birthdays, Weddings, Events & gatherings) sin inventar nuevas ocasiones.

## 10. About
RF-37: EL SISTEMA muestra el logo aprobado como imagen de marca, el texto existente y la nota handwritten "Made with love, always."

## 11. Gallery
RF-38: EL SISTEMA muestra la rejilla con imágenes reales de `public/img-MK/`.

## 12. Instagram
RF-39: TODO enlace a Instagram usa https://www.instagram.com/mattas_kitchen/, abre en pestaña nueva con `rel="noopener"`.

## 13. CTA final
RF-40: EL SISTEMA muestra "Start your order" hacia el catálogo.

## 14. Footer
RF-41: EL SISTEMA muestra el logo aprobado, los enlaces de navegación, el enlace a Instagram y "© 2026 Matta's Kitchen".

## 15. Responsive
RF-42: EL SISTEMA es mobile-first: sin overflow horizontal desde 360px.
RF-43: EL SISTEMA mantiene áreas táctiles ≥44px en controles principales.
RF-44: EL SISTEMA adapta las rejillas: productos y categorías 3→2→1 columnas; galería 4→2.

## 16. Accesibilidad
RF-45: EL SISTEMA usa `<img>` con `alt` descriptivo en todas las imágenes.
RF-46: EL SISTEMA etiqueta con `aria-label` los botones de solo icono (☰, ✕, +/−).
RF-47: EL SISTEMA anuncia los cambios del contador del carrito con `aria-live`.
RF-48: EL SISTEMA permite navegación, filtrado, carrito y pedido solo con teclado, con foco visible.

## Fuera de alcance
Pasarela de pago, backend, autenticación, i18n, CMS, nuevas dependencias, fotos definitivas nuevas, animaciones complejas.
