import React, {useContext} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Tarea from './Tarea';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {
  const proyectoContext = useContext(ProyectoContext);
  const {proyecto, eliminarProyecto} = proyectoContext;

  const tareaContext = useContext(TareaContext);
  const {tareasproyecto} = tareaContext;

  if(!proyecto) return <h2>Selecciona un proyecto</h2>;

  return (
    <>
      <h2>Proyecto: {proyecto.nombre}</h2>
      <ul className='listado-tareas'>
        {tareasproyecto.length === 0
          ? <li className='tarea'><p>No hay tareas</p></li>
          : 
          <TransitionGroup>
            {tareasproyecto.map(tarea => 
              <CSSTransition
                key={tarea._id}
                timeout={200}
                classNames='tarea'
              >
                <Tarea tarea={tarea}/>
              </CSSTransition>
            )}
          </TransitionGroup>
        }
      </ul>
      <button
        type='button'
        className='btn btn-eliminar'
        onClick={() => eliminarProyecto(proyecto._id)}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;