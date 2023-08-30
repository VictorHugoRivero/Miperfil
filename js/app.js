// Cargamos los archivos CSS
import 'CV/css/style.css';

// Obtenemos los elementos del CV
const datosPersonales = document.querySelector('#datos-personales');
const experienciaLaboral = document.querySelector('#experiencia-laboral');
const educacion = document.querySelector('#educacion');
const certificaciones = document.querySelector('#certificaciones');

// Cargamos los certificados PDF
const certificatesFolder = "/CV/path/to/certificates";

const certificates = document.querySelectorAll(".certificate-card");

certificate.querySelector("img").src = certificatesFolder + "/cert1.jpg";
certificate.querySelector("img").src = certificatesFolder + "/certificate-2.jpg";

for (const certificate of certificates) {
  certificate.querySelector("img").src = certificatesFolder + certificate.querySelector("img").alt;
}

// Agregamos eventos de clic a las tarjetas de certificado
certificates.forEach((certificate) => {
  certificate.addEventListener("click", () => {
    window.open(certificate.querySelector("a").href);
  });
});
