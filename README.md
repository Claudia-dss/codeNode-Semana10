# Acortador de URLs "ShURLs"

**ShURLs** es una aplicación web moderna diseñada para simplificar y gestionar enlaces web mediante un servicio de acortador de URLs. 

---

## 🚀 ¿Qué es?

Es un proyecto desarrollado con **Next.js** y **Tailwind CSS** que ofrece una interfaz limpia, accesible y optimizada para transformar enlaces extensos en direcciones web cortas, fáciles de recordar y compartir. El diseño implementa una tipografía profesional (*Space Grotesk*) y un esquema de colores adaptado para ofrecer la mejor experiencia visual.

---

## 🛠️ ¿Qué hace?

* **Acortador de enlaces:** Permite al usuario introducir una URL larga a través de un formulario y generar de manera rápida un enlace corto equivalente.
* **Control de estado de carga:** El sistema gestiona visualmente el proceso de peticiones a la API reflejando un estado de "Generando..." mientras se procesa la solicitud.
* **Modo Oscuro / Claro Nativo (Dark/Light Mode):** Incluye un botón de alternancia accesible desde la esquina superior derecha que conmuta entre dos entornos visuales:
  * **Modo Claro:** Fondo blanco puro con textos en azul cobalto profesional.
  * **Modo Oscuro:** Fondo azul oscuro profundo (`oklch`) con textos adaptados en azul brillante para garantizar un contraste óptimo.
* **Persistencia de interfaz:** El modo visual seleccionado por el usuario se comunica a una API interna (`/api/theme`) mediante peticiones GET y POST para sincronizar el estado del tema.

---

## 🌐 Cómo se accede

El proyecto está preparado para su despliegue y puedes acceder a la versión en producción a través del servicio de páginas estáticas en el siguiente enlace:

👉 **[https://codeNode-Semana10.github.io]** 
