import React, {useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const {proyecto, eliminarProyecto} = proyectosContext;

  const tareasProyecto = [
    {key: 1, nombre: 'Elegir Plataforma', estado: true},
    {key: 2, nombre: 'Elegir Colores', estado: false},
    {key: 3, nombre: 'Elegir Plataformas de pago', estado: false},
    {key: 4, nombre: 'Elegir Hosting', estado: true}
  ];

  if(!proyecto) return <h2>Selecciona un proyecto</h2>;


  return (
    <>
      <h2>Proyecto: {proyecto.nombre}</h2>
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
        onClick={() => eliminarProyecto(proyecto.id)}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;