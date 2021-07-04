import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Proyecto = ({proyecto}) => {
  const proyectosContext = useContext(proyectoContext);
  const {proyectoActual} = proyectosContext;

  const {nombre} = proyecto;
  return (
    <li>
      <button
        type='button'
        className='btn btn-blank'
        onClick={() => proyectoActual(proyecto)}
      >
        {nombre}
      </button>
    </li>
  );
};

export default Proyecto;