# ⚡ SHOP

Este proyecto es una prueba técnica desarrollada como parte del proceso de selección en SL Innovation and Solution. 

El reto propuesto consiste en la creación de una simulación de tienda en línea. Para lograr esto, se ha utilizado una API pública proporcionada por Fake Store API.

## Desarrollo del Proyecto

Lo primero que hice fue leer los requisitos y definir que haria primero y que podia dejar para el final, pense en las funcionalidades y todo lo que necesitaria para desarrollarlas, enseguida fui a leer la documentacion de fakeapi y leyendo los requisitos me di cuenta que de se pedia usar la api para manejar el carrito de compras, decidi no utilizar la api para este fin porque considere mas optimo manejar esto con un estado global de la aplicacion y asi ahorrarme llamadas a la API.

Luego defini la estructura de carpetas, siendo una aplicación pequeña me decante por la arquitectura mas basíca que podemos encontrar en proyectos de NextJS:

- components
- config
- context
  - CartContext
  - StoreContext
- hooks
- pages
  - products
    - category
- public
- services
- styles

Despues de esto, instale dependencias y empece a trabajar.

## Pre-requisitos

Antes de poder ejecutar este proyecto localmente, necesitarás tener instalado:

- [Node.js](https://nodejs.org/) versión 16.14.2 o superior.
- [Yarn](https://yarnpkg.com/getting-started/install) (opcional pero recomendado).

## Instalación

Primero clona el repositorio a tu máquina local usando `git`:

```
git clone https://github.com/usuario/nombre-del-proyecto.git
```

Ve al directorio del proyecto:

```
cd prueba
```

Instala las dependencias con npm (o Yarn si prefieres):

```
npm install
# o      
yarn install
```

## Ejecución en modo Desarrollo

Para iniciar la aplicación en modo desarrollo, usa el siguiente comando:

```
npm run dev
# o      
yarn dev
```
Ahora deberías ver la aplicación corriendo en http://localhost:3000

## Build
Para producción
```
npm run build     
# o      
yarn build
```
Después de esto podrás iniciar el servidor con:
```
npm start         
# or                
yarn start
```

🎉Esto es todo lo que necesitamos ⚡"# sl-practical-test" 
