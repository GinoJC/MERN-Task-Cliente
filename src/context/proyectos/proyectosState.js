import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import clienteAxios from '../../config/axios';
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO
} from '../../types';

const ProyectoState = ({children}) => {

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

  const obtenerProyectos = async () => {
    try {
      const resultado = await clienteAxios.get('/api/proyectos');
      dispatch({
        type: OBTENER_PROYECTOS,
        payload: resultado.data.proyectos
      })
    } catch (error) {
      console.log('Error obtenerProyectos', error);
    }
  }

  const agregarProyecto = async proyecto => {
    try {
      const resultado = await clienteAxios.post('/api/proyectos', proyecto);
      dispatch({
        type: AGREGAR_PROYECTO,
        payload: resultado.data
      })
    } catch (error) {
      console.log('Error agregarProyecto', error);
    }
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