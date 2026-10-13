# Tarjeta digital de Edwin Andrés Martín Barreto

Dirección pública: **https://andresmartinb.github.io**

## Qué hay en esta carpeta

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La tarjeta (nombre, título, panel y botones) |
| `config.js` | **Todos los enlaces**: WhatsApp, mensaje, correo, LinkedIn, hoja de vida |
| `styles.css`, `script.js` | Diseño y funcionamiento. No es necesario tocarlos |
| `contacto.vcf` | Lo que se guarda al tocar "Guardar contacto" (incluye tu foto) |
| `manifest.webmanifest` | Permite agregar la tarjeta a la pantalla de inicio del celular |
| `assets/hoja-de-vida.pdf` | Tu hoja de vida |
| `assets/foto.jpg` | Tu foto, ya sin fondo blanco |
| `assets/fondo-corporativo.svg` | Fondo de torres al atardecer |
| `assets/qr-tarjeta.svg` | QR que aparece dentro de la tarjeta |
| `assets/qr-tarjeta-imprimible.png` | QR listo para imprimir o mostrar en la feria |
| `assets/vista-previa.jpg` | Imagen que aparece al compartir el enlace por WhatsApp o LinkedIn |

## Publicar gratis en GitHub Pages (10 minutos)

1. Entra a github.com con tu usuario **AndresMartinb**.
2. Arriba a la derecha toca **+** y luego **New repository**.
3. En *Repository name* escribe exactamente: `AndresMartinb.github.io`
   Debe ser idéntico a tu usuario seguido de `.github.io`; si no, la dirección cambia y el QR no funcionará.
4. Deja la opción **Public** y toca **Create repository**.
5. En la página del repositorio vacío toca el enlace **uploading an existing file**.
6. Descomprime el ZIP en tu computador, abre la carpeta `sitio-tarjeta`, selecciona **todo su contenido** (no la carpeta, sino lo que hay dentro, incluida la carpeta `assets`) y arrástralo a la ventana del navegador.
7. Espera a que termine de cargar y toca **Commit changes**.
8. Ve a **Settings**, luego a **Pages** en el menú izquierdo. En *Build and deployment* verifica que diga *Deploy from a branch*, rama **main** y carpeta **/ (root)**. Si no está así, selecciónalo y toca **Save**.
9. Espera de 1 a 3 minutos y abre **https://andresmartinb.github.io**.

## Cambios frecuentes

**Cambiar la foto.** Nómbrala `foto.jpg` (ideal 900 × 1000 px, fondo oscuro y menos de 300 KB). En GitHub abre la carpeta `assets`, toca **Add file**, luego **Upload files**, súbela y toca **Commit changes**.

**Actualizar la hoja de vida.** Nombra el nuevo PDF `hoja-de-vida.pdf` y súbelo a la carpeta `assets` de la misma forma: reemplaza el anterior.

**Cambiar un enlace o el mensaje de WhatsApp.** En GitHub abre `config.js`, toca el lápiz (*Edit*), cambia el texto entre comillas y toca **Commit changes**.

**Cambiar un texto de la tarjeta.** Edita `index.html` de la misma forma.

Los cambios se ven en 1 o 2 minutos. Si el celular muestra la versión anterior, recarga la página.

## Antes de la feria

- Abre la tarjeta en tu celular y prueba cada botón: WhatsApp, Guardar contacto, correo, LinkedIn, ver hoja de vida y descargar currículum.
- Escanea el QR con otro celular.
- Agrégala a la pantalla de inicio para mostrarla rápido:
  - iPhone (Safari): botón Compartir, luego **Agregar a inicio**.
  - Android (Chrome): menú ⋮, luego **Agregar a la pantalla principal**.
- Lleva el QR impreso (`qr-tarjeta-imprimible.png`): se ve bien en 10 × 13 cm o más grande.

**Guardar contacto:** en iPhone abre la ficha y se toca *Crear contacto nuevo*. En Android se descarga el archivo y al abrirlo se agrega a Contactos.
