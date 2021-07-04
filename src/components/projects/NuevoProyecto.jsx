import React, {useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
  const proyectosContext = useContext(proyectoContext);
  const {formulario, mostrarFormulario} = proyectosContext;

  const [proyecto, setProyecto] = useState({
    nombre: ''
  });
  const [error, setError] = useState(false);

  const {nombre} = proyecto;

  const onChangeProyecto = e => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitProyecto = e => {
    e.preventDefault();

    if (nombre.trim() === 0) {
      setError(true);
    }
    setError(false);
  }

  return (
    <>
      <button
        type='button'
        className='btn btn-block btn-primario'
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>
      {formulario &&
        <form
          className='formulario-nuevo-proyecto'
        >
          <input
            type='text'
            className='input-text'
            placeholder='Nombre Proyecto'
            name='nombre'
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type='submit'
            className='btn btn-primario btn-block'
            value='Agregar Proyecto'
          />
        </form>
      }
    </>
  );
};

export default NuevoProyecto;