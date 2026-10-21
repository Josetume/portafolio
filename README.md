# Portafolio de José Tume

Portafolio profesional orientado a oportunidades de desarrollo Full Stack Junior con PHP, JavaScript, React y SQL. Incluye experiencia, formación y casos de estudio de AlertaYa, Bunker Canino y EducApp.

## Desarrollo local

Requiere Node.js 20.9 o posterior y npm.

```sh
npm install
npm run dev
```

Abrir http://localhost:3000.

## Validación y producción

```sh
npm run check
npm run build
npm run test:smoke
npm start
```

## Estructura

- `src/app`: páginas y metadata por ruta.
- `src/data/projects.ts`: contenido compartido para tarjetas y casos de estudio.
- `src/components`: navegación y secciones.
- `public`: fotografías, capturas, certificados y CV descargable.

Las páginas y secciones se renderizan en servidor; el menú móvil y el visor de capturas usan estado del cliente. Se emplean imágenes optimizadas, controles de teclado, enlace para saltar al contenido y respeto a movimiento reducido. No se requieren secretos ni servicios de backend.

Las rutas en español se encuentran en `src/app/(spanish)`; las rutas en inglés, en `src/app/(english)/en`. Cada grupo tiene su propio layout con el atributo `lang` correcto. El selector de idioma conserva el proyecto que se está consultando. El CV y las capturas mantienen su idioma original.

`src/data/project-details.ts` añade el aporte, alcance, decisiones y traducción de los casos a la información compartida de proyectos. El visor usa un diálogo nativo: cierre con Escape, navegación con flechas, foco contenido dentro del visor, retorno al elemento de origen y bloqueo del scroll del fondo.

## Presentación y exploración

- `ProjectCover` compone las portadas con capturas reales de escritorio y móvil; Bunker Canino incluye una captura móvil del sitio publicado. Los acentos de cada proyecto se limitan a la portada y a detalles de orientación.
- Los títulos usan Space Grotesk variable, alojada en `src/assets/fonts`. Su licencia SIL Open Font License se conserva junto al archivo; no se realizan peticiones a Google Fonts desde el sitio.
- La navegación principal resalta la sección actual. Los casos tienen un índice fijo debajo del encabezado, también con sección activa.
- Las galerías muestran una selección inicial y permiten desplegar el resto sin descartar las imágenes. EducApp separa acceso y resultados de juegos educativos.
- El visor admite ampliación entre 100% y 400%, ajuste a pantalla, desplazamiento táctil o por scroll y arrastre con ratón. Las teclas `+` y `-` controlan el zoom; con la imagen enfocada y ampliada, las flechas desplazan la vista. Los botones anterior/siguiente mantienen la navegación entre capturas y reinician la ampliación.
- Las transiciones de las portadas se limitan a dispositivos con ratón; la preferencia de movimiento reducido desactiva las transiciones.

## Publicación

Importar este directorio como proyecto Next.js en Vercel, ejecutar `npm run build` y usar la salida estándar de Next.js. La publicación y el dominio se gestionan desde la cuenta del propietario.

Si cambia el dominio de producción, definir `NEXT_PUBLIC_SITE_URL` con la URL completa antes de compilar. Se utiliza para la imagen social, robots y sitemap.

## Contenido pendiente de confirmar

- Bunker Canino incluye una captura real del sitio. Su sitio y el de ALAR están enlazados con las URLs facilitadas por el propietario.
- AlertaYa: stack contrastado con sus fuentes actuales: Kotlin/Jetpack Compose, React/TypeScript, API Java/Spring Boot y PostgreSQL. Las capturas del panel se obtienen del código actual con respuestas de prueba aisladas.
- Nivel de inglés y disponibilidad: no se declaran sin confirmación.
- No se incluyen métricas de uso ni resultados comerciales sin documentación.
- Pruebas automatizadas, CI y contenedores de los proyectos mostrados requieren sus repositorios; no se presentan como capacidades implementadas.

## Verificaciones

La prueba de humo inicia un servidor de producción, comprueba las diez rutas en español e inglés, encabezados, idioma del documento, navegación, archivos internos, CV e imagen social. El workflow de GitHub Actions ejecuta compilación, TypeScript y esta prueba al subir cambios o abrir un pull request.

La copia descargable del CV excluye el proyecto retirado; el PDF original del propietario no se modifica.

## Capturas de EducApp

`src/data/educapp-screens.ts` contiene las descripciones en español e inglés. Las siete imágenes móviles del ZIP facilitado por el propietario se conservan sin modificaciones en `public/educapp/mobile`: acceso, menú, cuatro juegos e historial de puntajes. La captura del acceso docente se obtuvo del enlace proporcionado el 20 de octubre de 2026; no se inició sesión ni se verificaron las pantallas internas. El panel requiere una cuenta. EducApp utiliza el mismo visor accesible que AlertaYa, con etiquetas e identificadores propios.

## Capturas de AlertaYa

Las imágenes vigentes y sus descripciones están centralizadas en `src/data/alertaya-screens.ts`. Las cuatro capturas del panel se obtuvieron de su código actual el 20 de octubre de 2026 con datos de demostración. Las cuatro capturas Android se tomaron de la aplicación nativa instalada en el Samsung conectado: inicio, nuevo reporte, mis reportes y detalle. No se enviaron reportes ni se modificaron expedientes para generar las capturas. La imagen principal comparte la misma captura que la galería. Las capturas antiguas ya no se muestran.
