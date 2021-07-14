import React, {useReducer} from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import clienteAxios from '../../config/axios';
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA
} from '../../types';

const TareaState = ({children}) => {
  const initialState = {
    tareasproyecto: [],
    errortarea: false,
    tareaseleccionada: null
  }

  const [state, dispatch] = useReducer(tareaReducer, initialState);

  const obtenerTareas = async proyecto => {
    try {
      const resultado = await clienteAxios.get('/api/tareas', {params: {proyecto}});
      dispatch({
        type: TAREAS_PROYECTO,
        payload: resultado.data.tareas
      })
    } catch (error) {
      console.log('Error agregarTarea', error.response);
    }
  }

  const agregarTarea = async tarea => {
    try {
      const resultado = await clienteAxios.post('/api/tareas', tarea);
      dispatch({
        type: AGREGAR_TAREA,
        payload: resultado.data
      })
    } catch (error) {
      console.log('Error agregarTarea', error.response);
    }
  }

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA
    })
  }
  
  const eliminarTarea = async (id, proyecto) => {
    try {
      await clienteAxios.delete(`/api/tareas/${id}`, {params: {proyecto}});
      dispatch({
        type: ELIMINAR_TAREA,
        payload: id
      })
    } catch (error) {
      console.log('Error eliminarTarea', error);
    }
  }

  const actualizarTarea = async tarea => {
    try {
      const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);
      dispatch({
        type: ACTUALIZAR_TAREA,
        payload: resultado.data.tarea
      })
    } catch (error) {
      console.log('Error actualizarTarea', error.response);
    }
  }

  const guardarTareaActual = tarea => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea
    })
  }

  

  return (
    <tareaContext.Provider
      value={{
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        guardarTareaActual,
        actualizarTarea
      }}
    >
      {children}
    </tareaContext.Provider>
  )
}

export default TareaState;