import React from 'react';
import Sidebar from '../layouts/Sidebar';
import Barra from '../layouts/Barra';
import FormTarea from '../tasks/FormTarea';
import ListadoTareas from '../tasks/ListadoTareas';

const Proyectos = () => {
  return (
    <div className='contenedor-app'>
      <aside>
        <Sidebar/>
      </aside>
      <div className="seccion-principal">
        <Barra/>
        <main>
          <FormTarea/>
          <div className="contenedor-tareas">
            <ListadoTareas/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;