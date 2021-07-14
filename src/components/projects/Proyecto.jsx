import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {
  const proyectosContext = useContext(proyectoContext);
  const {proyectoActual} = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const {obtenerTareas} = tareasContext;

  const seleccionarProyecto = () => {
    proyectoActual(proyecto);
    obtenerTareas(proyecto._id);
  }

  const {nombre} = proyecto;
  return (
    <li>
      <button
        type='button'
        className='btn btn-blank'
        onClick={() => seleccionarProyecto()}
      >
        {nombre}
      </button>
    </li>
  );
};

export default Proyecto;