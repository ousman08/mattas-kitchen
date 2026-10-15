# Constitution — Matta's Kitchen

**Objetivo:** terminar rápidamente una web profesional, moderna y responsive para Matta's Kitchen (catering), usando los productos e imágenes reales disponibles.

Prioridad: 1) Resultado funcional · 2) Diseño premium · 3) Buena experiencia móvil · 4) Código mantenible.

## Principios (verificables)

1. Mantener React + Vite salvo que exista una razón fuerte y aprobada para cambiar.
2. Priorizar simplicidad sobre abstracciones innecesarias. Un componente nuevo solo existe si aporta reutilización o claridad real.
3. Separar datos, lógica y presentación cuando aporte claridad (datos en `src/data/`).
4. Utilizar los productos reales de Matta's Kitchen desde `src/data/products.js`.
5. Utilizar las imágenes reales disponibles en `public/img-MK/`, con rutas `/img-MK/...`. Si falta la foto de un producto, usar una fotografía temporal de internet, claramente marcada como temporal y fácil de sustituir (nunca el logo).
6. Mobile-first y responsive: sin overflow horizontal, botones grandes, CTA visible, texto legible desde 360px.
7. Accesibilidad básica: `alt` en imágenes, `aria-label` en botones con iconos, estados de menú anunciados.
8. No inventar productos, precios ni información comercial.
9. No introducir dependencias sin aprobación.
10. No romper funcionalidades existentes: extender, no reescribir.
11. Verificar visualmente la interfaz después de cambios importantes (dev server + vista móvil).
12. Mantener el proyecto ejecutable con pnpm en todo momento.

## Identidad visual

Crema/blanco, marrón/cobre, rosa muy suave; serif elegante (Cormorant Garamond), detalles handwritten (Allura), mucho espacio en blanco, bordes finos, fotografía gastronómica como protagonista. Aspecto premium pero cercano.

La web NO es una plantilla genérica de restaurante: transmite **premium + artesanal + celebración + comida para compartir**.

## Reglas de proyecto

- No reconstruir la aplicación desde cero ni sustituir el diseño actual sin aprobación.
- Spec-Driven Development como sistema de control, NO como burocracia.
- No usar `Captura desde 2026-08-18 12-12-21.png` como foto de producto (es copia idéntica del logo).
- No usar el logo como foto de producto.
- Si existe una solución sencilla, usar la solución sencilla. No optimizar prematuramente.
- No ocultar errores: si algo falla, explicar exactamente qué falla.
