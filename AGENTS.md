# AGENTS.md — Matta's Kitchen

Guía para agentes de IA que trabajan en este proyecto.

## Stack
- Next.js 16 (App Router, carpeta `/app`) + React 19
- pnpm 11 · Node 24 · Sin TypeScript, sin librerías de estado, sin CSS frameworks

## Estructura
- `app/layout.jsx` — layout raíz (metadata, `<SpeedInsights />`, importa `globals.css`)
- `app/globals.css` — sistema visual completo (variables `:root`, componentes, responsive, fuentes)
- `app/page.jsx` — ruta `/` → renderiza `<Home />`
- `app/politica-privacidad/page.jsx` — ruta `/politica-privacidad` → renderiza `<PrivacyPolicy />`
- `src/components/` — un componente por sección/función: Header, MobileNav, Hero, Intro, Catalogue, ProductCard, CategoryCards, Occasions, About, Gallery, FinalCta, Footer, CartDrawer, OrderForm; `Home.jsx` es un Client Component (`'use client'`) y contiene el estado de UI (filtro, menú, carrito)
- `src/views/` — componentes tipo página (PrivacyPolicy)
- `src/hooks/useCart.js` — estado del carrito + persistencia localStorage (SSR-safe: solo en `useEffect`)
- `src/data/products.js` — **fuente de verdad** de productos y categorías
- `src/data/contact.js` — datos de contacto (actualmente DATOS DE PRUEBA marcados)
- `src/fonts/` — fuentes auto-hospedadas referenciadas desde `app/globals.css`
- `public/img/` — TODAS las imágenes: fotos reales del usuario (postres, zumos), fotos de galería, logo aprobado y fotos TEMP de internet (marcadas `TEMP-`); rutas `/img/...`
- `docs/` y `specs/001-mattas-kitchen/` — documentación y control (histórico: referencian la estructura Vite anterior)

## Comandos importantes
- `pnpm install` — instalar dependencias
- `pnpm dev` — servidor de desarrollo (puerto 3000)
- `pnpm build` — build de producción (validación principal)
- `pnpm start` — servir el build de producción

## Convenciones de código
- Componentes funcionales y JSX. Un componente nuevo solo si aporta reutilización o claridad real.
- El catálogo vive en `src/data/products.js`; no duplicar productos en componentes.
- Las `key` de listas de productos usan `product.id` (nunca `name`: hay nombres repetidos como Bissap y Ginger).
- Imágenes: solo las existentes en `public/img/`. Si falta la foto de un producto, descargar una fotografía temporal de internet con nombre `TEMP-` y comentario (no hotlinks), fácil de sustituir.
- Contacto: centralizado en `src/data/contact.js` (datos de prueba marcados).
- CSS: mantener las variables y clases existentes; extender, no reescribir.
- Mobile-first, sin overflow horizontal.

## Convenciones de Git
- Mensajes en inglés: `feat:` `fix:` `refactor:` `style:` `chore:`
- Rama actual: `feature/mattas-home`
- **Nunca hacer push sin aprobación explícita.**

## El agente puede, sin preguntar
- Modificar y reorganizar componentes; crear componentes cuando aporten claridad; modificar CSS.
- Integrar catálogo, categorías, filtros, carrito y navegación móvil.
- Corregir errores; mejorar responsive y accesibilidad.
- Descargar fotos temporales de internet cuando falten imágenes reales.
- Ejecutar `pnpm dev`, `pnpm build`, `pnpm preview` y otras validaciones.
- Agrupar cambios relacionados en bloques funcionales y avanzar sin detenerse por detalles menores.
- Preparar y proponer commits (sin ejecutarlos).

## Requiere aprobación previa
- Cambiar de framework o instalar/eliminar dependencias importantes.
- Cambiar productos, precios o el objetivo del proyecto.
- Eliminar una funcionalidad importante.
- Modificar o reemplazar `public/img/logo-mattas-kitchen.png` (logo aprobado y verificado).
- Desplegar/publicar o hacer `git push`.

## Prohibido
- Inventar productos, precios o información comercial.
- Reconstruir la app desde cero o sustituir el diseño sin aprobación.
- Usar `Captura desde 2026-08-18 12-12-21.png` como foto de producto (es copia idéntica del logo).
- Usar el logo como foto de producto.
- Cambiar pnpm por npm.
- Ocultar errores.

## Cómo validar cambios
1. `pnpm build` sin errores.
2. `pnpm dev` y revisar la consola del navegador (sin warnings de keys, sin 404 de imágenes).
3. Probar en móvil (360–430px) y desktop: sin overflow horizontal, CTA visible.
4. Resumir por bloque: qué cambió, archivos afectados, requisitos cubiertos y cómo comprobarlo.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
