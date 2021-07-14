import React, {useContext} from 'react';
import TareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {
  const tareaContext = useContext(TareaContext);
  const {obtenerTareas, eliminarTarea, actualizarTarea, guardarTareaActual} = tareaContext;

  const {_id, nombre, estado, proyecto} = tarea;

  const tareaEliminar = () => {
    eliminarTarea(_id, proyecto);
    obtenerTareas(proyecto);
  }

  const cambiarEstado = tarea => {
    tarea.estado = !tarea.estado;
    actualizarTarea(tarea);
  }

  return (
    <li className='tarea sombra'>
      <p>{nombre}</p>
      <div className='estado'>
        {estado
          ? <button
              type='button'
              className='completo'
              onClick={() => cambiarEstado(tarea)}
            >
              Completo
            </button>
          : <button
              type='button'
              className='incompleto'
              onClick={() => cambiarEstado(tarea)}
            >
              Incompleto
            </button>
        }
      </div>
      <div className='acciones'>
        <button
          type='button'
          className='btn btn-primario'
          onClick={() => guardarTareaActual(tarea)}
        >
          Editar
        </button>
        <button
          type='button'
          className='btn btn-secundario'
          onClick={tareaEliminar}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;