//src/App.jsx
import React from 'react';
import productos from './componentes/Productos';
import TablaProductos from './componentes/TablaProductos';
import { Link } from 'react-router-dom';
import { Sidebar } from './pages/sidebar';

function App() {
  const pokeLocal = JSON.parse(localStorage.getItem('pokemon'));
  console.log(pokeLocal);

  return (
    <>
    <div>
      <div style={{display: "flex"}}>
        <Sidebar />
        <div className='anima-cafe'>
          <h1>Ánima Café</h1>
          <TablaProductos productos={productos} />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;