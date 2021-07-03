import React from 'react';
import Sidebar from '../layouts/Sidebar';
import Barra from '../layouts/Barra';

const Proyectos = () => {
  return (
    <div className='contenedor-app'>
      <aside>
        <Sidebar/>
      </aside>
      <div className="seccion-principal">
        <Barra/>
        <main>
          <div className="contenedor-tareas">

          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;