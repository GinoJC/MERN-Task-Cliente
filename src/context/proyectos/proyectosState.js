import React, { useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO
} from '../../types';

const ProyectoState = ({children}) => {
  const proyectos = [
    {id: 1, nombre: 'Tienda virtual'},
    {id: 2, nombre: 'Intranet'},
    {id: 3, nombre: 'Diseño de Sitio Web'}
  ];

  const initialState = {
    formulario: false,
    proyectos: [],
    errorformulario: false,
    proyecto: null
  }
  
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }

  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos
    })
  }

  const agregarProyecto = proyecto => {
    proyecto.id = uuidv4();
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto
    })
  }

  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO
    })
  }

  const proyectoActual = proyecto => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyecto
    })
  }

  const eliminarProyecto = proyectoId => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId
    })
  }

  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto
      }}
    >
      {children}
    </proyectoContext.Provider>
  )
}

export default ProyectoState;