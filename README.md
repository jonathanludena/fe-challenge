# Challenge Frontend

## Vistas

Las vistas deben ser navegables de manera independiente y cuentan con su propia url (path)

- Caja de Busqueda, path: `/`
- Resultado de la búsqueda, path: `/items?search=`
- Detalle, path: `/items`

## Funcionalidad

- En la vista de Caja de búsqueda insertar parámetro de busqueda. Al dar click en enviar (Buscar), debe ir a la vista de Resultados.
- En Resultados de búsqueda, se deben visualizar solo 4 items. Al dar clicl en uno de ellos, navegar a la vista de Detalle.
- Dado un id de item, debería poder ingresar directamente al item

## Scripts

- Para ejecutar en entorno de desarrollo `yarn dev`
- Para generer dist de producción `yarn build`

## Variable de entorno

Revisar `.env.example` para generar variable de entorno en producción

## Dependencias

- MaterialUI
  - @mui/icons-material versión 5.10.3
  - @mui/material versión 5.10.5
  - @mui/x-data-grid versión 5.17.2
- Axios versión 0.27.2
- React versión 18.2.0
- React-router-dom versión 6.4.0
- Styled Components versión 5.3.5
- ViteJS versión 3.1.0
- Typescript versión 4.6.4
- React Helmet versión 6.1.0

## Requerimientos

- Usabilidad
- SEO
- Modularidad
- Reutilización
