<h1 align="center">Virtual school landing page</h1> 

![View project](https://github.com/codigoenlaweb/virtual-school-lading-page/blob/master/public/assets/readmeimg.jpeg)

<h4 align="center">Una landing page realizada con React</h4>
<div align="center">
    <a align="center" href="https://virtual-school-lading-page.netlify.app/">View Demo</a>
</div>
## Español
## Tabla de contenido:
- Sobre el proyecto
- Aspectos analizados
- Instalación
- Autor

## Sobre el proyecto.
#### Descripción.
virtual-school-lading-page es una web SPA basada en la página https://ud.school/, este proyecto se realizó teniendo como objetivo realizar las mejores animaciones, siendo lo que más destaca en una landing page. Además, tener en cuenta las mejores técnicas de accesibilidad web, ya que, al ser una página para brindar educación, debe un cumplir con un mínimo nivel de accesibilidad A, regido por las pautas de accesibilidad para el contenido web (WCAG).
#### Propósito del proyecto.
El proyecto fue elaborado con el objetivo de Analizar y proponer, basado en las mejores prácticas de user experience (UX) y user interfaces (UI) un rediseño del home de la página: https://ud.school/.
#### Realizado con.
- [React](https://es.reactjs.org/"React")
- [TailwindCSS](https://tailwindcss.com/ "TailwindCSS").
- [Framer Motion](https://www.framer.com/motion/ "Framer Motion")

#### React
Escogí **React** en este proyecto por varias razones, siendo la principal que la fecha de entrega de esta práctica era de dos días y hacer toda una estructura profesional con el uso de webpack y otras herramientas podría quitarme mucho del poco tiempo de entrega que tengo para dicha práctica. Además de esto **React** aporta otras ventajas como:
- Facilita el proceso general de escritura de componentes. 
- Asegura un renderizado más rápido. 
- Es compatible con SEO 
- Se puede integrar un sistema de enrutado al proyecto de manera simple a diferencia de hacerlo uno mismo. 
#### TailwindCSS
Para la maquetación del **layout** decidir usar **TailwindCSS** siendo mi **framework** de **CSS** favorito, aunque también se hubiera podido realizar dicho proyecto con **Bootstrap**, elegí **TailwindCSS** ya que me permite una mejor personalización y facilidad de la misma a diferencia de **Bootstrap**. He de tener en cuenta que ambos **frameworks** son excelentes y son una gran opción.
####Framer Motion
Una biblioteca de animación lista para producción para **React**. **Framer Motion** me permite animar entre dos componentes separados con una sintaxis declarativa simple, es decir que es fácil de leer y mantener. me permite hacer animaciones avanzadas que con css podría ser complicada y difícil de mantener, por estas razones elegí usar **Framer Motion**  para el proyecto.

## Aspectos analizados.
#### Página oficial
Antes de comentar cualquier cosa, he de decir que mi critica es de lo mas contructiva y solo son pautas que pueden dar a mejorar la pagina.

- Lo primero que quiero comentar es que dicha pagina cuenta con muchas imagenes sobre todo al inicio que son muy pesadas, esto hace que solo al entrar y ver una pantalla en azul de un comienzo erroneo, esto puede mejorar al aplicar lazy loading poniendo una imagen con menor calidad al inicio y al momento que ya cargue la imagen con calidad mayor sumplantar a la otra, esto podria hacer con el evento load o en el caso de react onLoad.
- Aunque la pagina cuenta con algunas animaciones creo que esta se queda un poco corta, En mi punto de vista una landing page es para llamar la atencion de usuario.
- Falta de contraste entre colores, algunos colores como verdes muy claros combinados con blanco de fondo, no cumplen con las normas **(WCAG)** con un contraste mayor a 4.5
- Scroll infinito, una landing page se trata de dar una informacion rapida y atraer el usuario, dicha pagina la considere muy larga y habia mas que contenido importante para un usuario nuevo eran para el usuario concurrente.

#### Mi app
- Reutilización de código con **Tailwindcss**, algunos estilos se pueden reutilizar más como container de cada sección, links, etc.… por lo general la página oficial no tenía un botón que se repitiera o links que se usaran más de 5 veces, pero por lo general es mejor agrupar todos los estilos aplicados para los elementos, sobre todo a la hora hacer crecer a la aplicación. 
- Me hubiera gustado crear más customHooks para la aplicación, encapsular más las funciones de animación y los componentes. 

## Instalación.
1. Clonar repositorio
   ```sh
   https://github.com/codigoenlaweb/hero-app.git
   ```
2. Instalar paquetes de NPM
   ```sh
   npm install
   ```
## Autor.
Jesus Olmos - [Linkedin](https://www.linkedin.com/in/jesus-armando-olmos-olmos-607748228/ "Linkedin") - olmosjesusarmando@gmail.com


## English
## Table of Contents:
- About The Project
- Aspects analyzed
- Installation
- Author
- Acknowledgments

## About The Project.
#### Description
virtual-school-lading-page is a SPA website based on the page https://ud.school/, this project was carried out with the aim of making the best animations, being what stands out the most in a landing page. In addition, take into account the best web accessibility techniques, since, being a page to provide education, it must meet a minimum level of accessibility A, governed by the accessibility guidelines for web content (WCAG).
#### Purpose of this project.
The project was developed with the objective of analyzing and proposing, based on the best practices of user experience (UX) and user interfaces (UI), a redesign of the home page: https://ud.school/.
#### built with.
- [React](https://es.reactjs.org/"React")
- [TailwindCSS](https://tailwindcss.com/ "TailwindCSS").
- [Framer Motion](https://www.framer.com/motion/ "Framer Motion")

#### React
I chose **React** in this project for several reasons, the main one being that the deadline for this practice was two days and making a whole professional structure using webpack and other tools could take a lot out of the short delivery time. What do I have for this practice? In addition to this **React** provides other advantages such as:
- Facilitates the general process of writing components.
- Ensures faster rendering.
- It is SEO friendly
- A routing system can be integrated into the project in a simple way, unlike doing it yourself.
#### TailwindCSS
For the layout of the **layout** I decided to use **TailwindCSS** being my favorite **CSS** framework**, although this project could also have been carried out with **Bootstrap**, I chose **TailwindCSS ** since it allows me a better customization and ease of it unlike **Bootstrap**. I have to keep in mind that both **frameworks** are excellent and are a great option.
####Framer Motion
A production-ready animation library for **React**. **Framer Motion** allows me to animate between two separate components with a simple declarative syntax, meaning it is easy to read and maintain. It allows me to do advanced animations that with css could be complicated and difficult to maintain, for these reasons I chose to use **Framer Motion** for the project.

## Analyzed aspects.
#### Official website
Before commenting on anything, I have to say that my criticism is very constructive and they are only guidelines that can be given to improve the page.

- The first thing I want to comment on is that this page has many images, especially at the beginning that are very heavy, this means that only when entering and seeing a blue screen of an erroneous beginning, this can be improved by applying lazy loading by putting an image with lower quality at the beginning and when the image is already loaded with higher quality replace the other, this could be done with the load event or in the case of react onLoad.
- Although the page has some animations, I think it falls a bit short. In my point of view, a landing page is to attract the user's attention.
- Lack of contrast between colors, some colors such as very light greens combined with background white, do not meet the **(WCAG)** standards with a contrast greater than 4.5
- Infinite scroll, a landing page is about giving quick information and attracting the user, said page was considered very long and there was more than important content for a new user were for the concurrent user.

#### My app
- Reuse of code with **Tailwindcss**, some styles can be reused more as a container for each section, links, etc… in general, the official page did not have a button that was repeated or links that were used more than 5 times , but it's usually better to bundle all applied styles for elements, especially when growing the app.
- I would have liked to create more customHooks for the app, encapsulate more animation functions and components.

## Installation.
1. Clone the repo
   ```sh
   https://github.com/codigoenlaweb/hero-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   
## Author.
Jesus Olmos - [Linkedin](https://www.linkedin.com/in/jesus-armando-olmos-olmos-607748228/ "Linkedin") - olmosjesusarmando@gmail.com