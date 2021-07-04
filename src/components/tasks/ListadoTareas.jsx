import React from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

  const tareasProyecto = [
    {key: 1, nombre: 'Elegir Plataforma', estado: true},
    {key: 2, nombre: 'Elegir Colores', estado: false},
    {key: 3, nombre: 'Elegir Plataformas de pago', estado: false},
    {key: 4, nombre: 'Elegir Hosting', estado: true}
  ];

  return (
    <>
      <h2>Proyecto: Tienda Virtual</h2>
      <ul className='listado-tareas'>
        {tareasProyecto.length === 0
          ? <li className='tarea'><p>No hay tareas</p></li>
          : tareasProyecto.map(tarea => 
              <Tarea
                key={tarea.key}
                tarea={tarea}
              />
            )
        }
      </ul>
      <button
        type='button'
        className='btn btn-eliminar'
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;