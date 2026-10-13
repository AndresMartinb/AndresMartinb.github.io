(function () {
  "use strict";
  var C = window.TARJETA || {};

  /* ---------- Enlaces desde config.js ---------- */
  function poner(clave, href, descarga) {
    document.querySelectorAll('[data-link="' + clave + '"]').forEach(function (a) {
      if (!href) { a.hidden = true; return; }
      a.href = href;
      if (descarga) a.setAttribute("download", descarga);
    });
  }

  var tel = (C.whatsapp || "").replace(/\D/g, "");
  poner("whatsapp", tel ? "https://wa.me/" + tel + (C.mensajeWhatsapp ? "?text=" + encodeURIComponent(C.mensajeWhatsapp) : "") : "");
  poner("correo", C.correo ? "mailto:" + C.correo + (C.asuntoCorreo ? "?subject=" + encodeURIComponent(C.asuntoCorreo) : "") : "");
  poner("linkedin", C.linkedin);
  poner("vcard", C.vcard);
  poner("cv-ver", C.hojaDeVida);
  poner("cv-descargar", C.hojaDeVida, C.nombreDescarga || "curriculum.pdf");

  /* ---------- Descargar currículum sin abrirlo ----------
     Se entrega como binario genérico (octet-stream): así iPhone, Android y los
     navegadores internos de otras apps lo guardan en vez de mostrarlo. */
  var botonDescarga = document.querySelector('[data-link="cv-descargar"]');
  if (botonDescarga && C.hojaDeVida && window.fetch && window.Blob && window.URL) {
    var etiqueta = botonDescarga.querySelector("span");
    var textoOriginal = etiqueta ? etiqueta.textContent : "";
    var ocupado = false;
    botonDescarga.addEventListener("click", function (e) {
      e.preventDefault();
      if (ocupado) return;
      ocupado = true;
      if (etiqueta) etiqueta.textContent = "Descargando…";
      fetch(C.hojaDeVida, { cache: "no-cache" })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); })
        .then(function (datos) {
          var blob = new Blob([datos], { type: "application/octet-stream" });
          var enlace = URL.createObjectURL(blob);
          var a = document.createElement("a");
          a.href = enlace;
          a.download = C.nombreDescarga || "curriculum.pdf";
          a.style.display = "none";
          document.body.appendChild(a);
          a.click();
          setTimeout(function () { URL.revokeObjectURL(enlace); a.remove(); }, 4000);
          if (etiqueta) etiqueta.textContent = "Currículum descargado";
        })
        .catch(function () {
          // Respaldo: descarga directa del archivo con la orden de guardar
          var a = document.createElement("a");
          a.href = C.hojaDeVida;
          a.download = C.nombreDescarga || "curriculum.pdf";
          document.body.appendChild(a); a.click(); a.remove();
          if (etiqueta) etiqueta.textContent = textoOriginal;
        })
        .finally(function () {
          setTimeout(function () { if (etiqueta) etiqueta.textContent = textoOriginal; ocupado = false; }, 2500);
        });
    });
  }

  var dir = document.getElementById("direccion");
  if (dir && C.url) dir.textContent = C.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  /* ---------- Secuencia de entrada ---------- */
  var orden = [
    [".retrato", 0], [".panel", 0.22], [".nombre", 0.36], [".tarjeta > .regla", 0.46],
    [".titulo", 0.52], [".acciones", 0.62], [".qr-bloque", 0.78]
  ];
  orden.forEach(function (o) {
    var el = document.querySelector(o[0]);
    if (el) { el.classList.add("entra"); el.style.setProperty("--d", o[1] + "s"); }
  });
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { document.documentElement.classList.add("listo"); });
  });
})();
