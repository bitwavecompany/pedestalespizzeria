# Pedestales Pizzeria

## Descripción general del proyecto
Ecommerce de una pizzeria, este proyecto incialmente sera una pagina web simple la cual muestra los productos que ofrece la pizzeria, ubicacion, contactos, informacion basica en general. Pero se espera implementar lo siguiente: 
### Features:
**1.Modulo de gestion de productos:** En este modulo se espera que el administrador pueda agregar, eliminar, editar, productos y sus caracteristicas como precio, imagen, descripcion, etc. 
**2.Modulo de gestion de empresa:** En este modulo se espera que el administrador pueda agregar, eliminar, editar, caracteristicas de la empresa como logo, nombre de la empresa, etc. 
**3.Modulo de gestion de promociones:** En este modulo se espera que el administrador pueda agregar, eliminar, editar, promociones. 
**4.Redireccionamiento de la pagina hacia whatsapp automaticamente:** Se espera que en la pagina exista una seccion la cual al hacer clic redireccione al numero telefonico del vendedor.
**5.Implementacion de ubicacion con goole maps:** Se espera implementar la ubicacion del local comercial mediante google maps
**6.Implemetacion de login para el modulo de gestion de productos:** Se espera implementar un login mediante google o una base de datos propia con todos los respectivos niveles de seguridad (tokens, sesiones activas, etc)
**7.Todas las validaciones las realiza principalmente el backend:** Se espera que todo sea gestionado por el backend, el frontend solo realiza validaciones de campos(inputs). 

## Tecnologías Utilizadas

### Para el Proyecto
- IONIC
- Vue
- TypeScript

### Para Control de Versiones
- GitHub
- GitFlow
- fork

## Ramas

- **Main**: Rama principal o de producción, es la rama la cual es visible para el público en general. Es la rama comercial la cual se presenta como el producto final.
- **Develop**: Es la rama secundaria del proyecto pero principal para el desarrollo o pruebas. Esta es la rama previa donde se realizan pruebas y solucionan problemas antes de hacer una fusión con la rama Main.

## Ramas de GitFlow

- **Develop**: Rama de desarrollo
- **Main**: Rama de producción
- **feature**: Esta se desprende de la rama de desarrollo (develop) y permite hacer modificaciones sin preocuparse de dañar la rama develop para los demás.
- **hotfix**: Esta se desprende de la rama de producción (main) y solo debe ser usada cuando hay problemas urgentes que se deben resolver al instante.
- **release**: Esta rama es únicamente para documentar observaciones en el readme y editar la versión (1.1.0).

![Ramas de GitFlow](image-1.png)

## Comandos

- Para crear un proyecto con IONIC se hace mediante el comando `ionic start`, se ingresa el nombre del nuevo proyecto y se escoge vue. Si hubiese el caso de que solicita la elección de más opciones, entre las más comunes se debe seleccionar "css", "typescript", "vite", "EsLint - yes".

- Después en la ruta del proyecto se inserta el comando `npm install` o `npm i`, esto lo que hace es instalar todos los paquetes necesarios que estén asignados en package.json. Es muy importante ejecutar este comando cuando se clona o crea un proyecto por primera vez.

![NPM Install](image.png)

- Los comandos más comunes de git son:
  * `git fetch`: Baja todos los cambios del repositorio remoto pero aún no los combina con el repositorio local, es decir lo tiene en espera de confirmación.
  * `git pull origin nombre_rama`: Carga y actualiza el repositorio local con los cambios bajados de git fetch.
  * `git add .`: Carga todos los archivos y los prepara para guardar.
  * `git commit -m "comentario"`: Genera el commit con un comentario (en este paso ya se guardó de manera local los cambios preparados en git add).
  * `git push -u origin nombre_rama`: Para cargar y fusionar los cambios de la rama local con la rama remota.

## Estructura de carpetas 
**Feature-Based + Shared Layers**
El proyecto tiene una estructuracion basada en features o funcionalidades y estructuras compartidas, es decir se maneja componentes o funcionalidades generales compartidas por algunos o todos los componentes

## Librerias y procesos de instalacion

-**TSX**
`npm install --save-dev tsx`: Instalado en desarrollo, permite ejecutar archivos TypeScript y TypeScript+JSX directamente, sin necesidad de un paso de compilación previo. Es una alternativa moderna a `ts-node`

-**Tailwind**
1. * `npm install -D tailwindcss@3 postcss autoprefixer`: Esta version es mas estable que la 4 y se la debe descargar en modo de desarrollo "-D"*
2. * `npx tailwindcss init -p`: Despues es necesario ejecutar el siguiente comando para crear los archivos de configuracion *tailwind.config.js* y *postcss.config.js* *


