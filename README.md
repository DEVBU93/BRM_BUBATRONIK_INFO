# BUBATRONIK BRM INFO

BRM · BUBATRONIK RADIO · INFO & PROGRAMAS.

## Criterio de mantenimiento

Este repositorio está evolucionando hacia **menos páginas, más completas y mejor organizadas**, sin perder contenido útil.

### Arquitectura funcional

- **Emisión / Radio** — estado, escucha y acceso a la emisión.
- **Programación** — programas, horarios y contenido relacionado.
- **Información** — identidad, proyecto, enlaces y contexto.
- **Comunidad** — recursos y participación cuando corresponda.

Antes de crear una página nueva, comprobar si el contenido pertenece naturalmente a uno de estos centros. Si pertenece, debe integrarse como sección o módulo en lugar de dispersarlo.

## Edición puntual

Para futuras mejoras, separar mentalmente:

1. **Contenido** — textos, enlaces, programas y datos.
2. **Presentación** — estructura HTML y componentes visuales.
3. **Identidad** — colores, tipografías, espaciados y radios.

`styles/tokens.css` es la referencia de tokens para nuevas piezas y módulos. El `index.html` actual conserva la interfaz existente para evitar una sustitución destructiva; cualquier migración progresiva debe hacerse por bloques verificables.

## Reglas de seguridad y estabilidad

- No eliminar contenido existente sin comprobar referencias.
- No sustituir el `index.html` monolítico completo por una versión nueva sin copia/rollback.
- Mantener enlaces externos explícitos y protegidos con `rel="noopener noreferrer"` cuando abran una pestaña nueva.
- No incrustar claves/API secrets en frontend.
- Preferir fuentes oficiales para información operativa.
- En cambios visuales, comprobar primero móvil y después escritorio.
- Agrupar antes de crear nuevas páginas.

## Objetivo

Que BRM INFO pueda seguir creciendo sin convertirse en un conjunto disperso de páginas: **menos dispersión, más profundidad, contenido conservado y cambios puntuales fáciles de mantener**.
