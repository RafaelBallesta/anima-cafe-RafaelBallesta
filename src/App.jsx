//src/App.jsx
import React from 'react';
import productos from './componentes/Productos';
import TablaProductos from './componentes/TablaProductos';

function App() {
  return (
    <>
    <h1>Ánima Café</h1>
    <TablaProductos productos={productos} />
    </>
  );
}

export default App;