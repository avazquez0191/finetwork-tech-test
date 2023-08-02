# React Checkout

## Proceso de instalación
``npm install``

``npm start``

La aplicación estará ejecutando por [http://localhost:3000/](http://localhost:3000/)

Preguntas adicionales:
- ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?
  - El tiempo fue un factor clave para decidir que la estructura del proyecto debía ser simple y medianamente escalable.
  - Se implementó Redux para el manejo de estados y algunas funciones adicionales para simular peticiones reales.
  - Se orientó el desarrollo a componentes tanto como era viable, balanceando entre necesidad real de reutilización y tiempo.
  - Debido a problemas con la librería de componentes visuales se optó por una variante simple y funcional (Radix).
  - Se implementó la solución sobre Type Script.
- ¿Hay alguna mejora que pueda hacer en su envío?
  - Agregar un carrito de compra o lista de compra para soportar multiples productos.
  - Implementar un "Wizard" para el proceso de compra.
  - Validaciones de formularios y tratamiento de excepciones.
- ¿Qué haría de manera diferente si se le asignara más tiempo?
  - Implementar las pruebas unitarias y E2E.
  - Dedicar mas tiempo al diseño y maquetado, sobre todo a la parte del diseño responsive.
