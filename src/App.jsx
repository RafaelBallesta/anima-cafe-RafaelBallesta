//src/App.jsx
import React from 'react';
import productos from './componentes/Productos';
import TablaProductos from './componentes/TablaProductos';
import { Link } from 'react-router-dom';
import { Sidebar } from './pages/sidebar';

function App() {
  const pokeLocal = JSON.parse(localStorage.getItem('pokemon'));
  console.log(pokeLocal);

  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

  return (
    <>
    <div style={{display: "flex"}}>
    <button onClick={w3_open}>Abrir</button>
    <button onClick={w3_close}>Cerrar</button>
      <div className='anima-cafe'>
        <h1>Ánima Café</h1>
        <TablaProductos productos={productos} />
      </div>
    </div>
    </>
  );
}

export default App;