import React, {useState, useContext, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const {proyecto} = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const {errortarea, tareaseleccionada, obtenerTareas, agregarTarea, validarTarea, actualizarTarea } = tareasContext;

  useEffect(() => {
    if(tareaseleccionada){
      setTarea(tareaseleccionada);
    }else{
      setTarea({nombre: ''});
    }
  }, [tareaseleccionada]);

  const [tarea, setTarea] = useState({nombre: ''});

  const {nombre} = tarea;

  if(!proyecto) return null;
  
  const handleChange = e => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    if(nombre.trim() === ''){
      validarTarea();
      return;
    }
    if(!tareaseleccionada){
      tarea.proyectoId = proyecto.id;
      tarea.estado = false;
      agregarTarea(tarea);
    }else{
      actualizarTarea(tarea);
    }
    obtenerTareas(proyecto.id);
    setTarea({nombre: ''})
  }

  return (
    <div className='formulario'>
      <form
        onSubmit={onSubmit}
      >
        <div className='contenedor-input'>
          <input
            type='text'
            className='input-text'
            placeholder='Nombre Tarea...'
            name='nombre'
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className='contenedor-input'>
          <input
            type='submit'
            className='btn btn-primary btn-submit btn-block'
            value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
          />
        </div>
      </form>
      {errortarea ? <p className='mensaje error'>El nombre de la tarea es obligatorio</p> : null}
    </div>
  );
};

export default FormTarea;