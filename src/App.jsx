// src/App.jsx
import React from 'react';
import productos from './componentes/Productos';

function App() {
  console.log(productos); // Verificar que se importó correctamente

  return (
    <div>
      <h1>Productos</h1>
    </div>
  );
}

export default App;



/*
  1. Crear proyecto (npm create vite@latest nombre-proyecto)
  2. Correr proyecto
  3. Copiar "productos" dentro de un archivo
  4. Importar "productos" en App.jsx (hacer console.log para verificar que se importó correctamente)
  5. Crear comoponetes definidos en la estructura de carpetas
  6. Pasar "productos" por props a TablasProductos
  7.
*/