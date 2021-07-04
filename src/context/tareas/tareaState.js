import React, {useReducer} from 'react';
import {v4 as uuidv4} from 'uuid';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA
} from '../../types';

const TareaState = ({children}) => {
  const initialState = {
    tareas: [
      {id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
      {id: 2,nombre: 'Elegir Colores', estado: false, proyectoId: 1},
      {id: 3,nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 2},
      {id: 4,nombre: 'Elegir Hosting', estado: true, proyectoId: 2},
      {id: 5,nombre: 'Elegir Plataforma', estado: true, proyectoId: 3},
      {id: 6,nombre: 'Elegir Colores', estado: false, proyectoId: 3},
      {id: 7,nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 4},
      {id: 8,nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
      {id: 9,nombre: 'Elegir Plataformas de pago', estado: true, proyectoId: 1},
      {id: 10,nombre: 'Elegir Colores', estado: false, proyectoId: 2},
      {id: 11,nombre: 'Elegir Colores', estado: false, proyectoId: 3},
      {id: 12,nombre: 'Elegir Plataforma', estado: true, proyectoId: 4}
    ],
    tareasproyecto: null,
    errortarea: false,
    tareaseleccionada: null
  }

  const [state, dispatch] = useReducer(tareaReducer, initialState);

  const obtenerTareas = proyectoId => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId
    })
  }

  const agregarTarea = tarea => {
    tarea.id = uuidv4();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea
    })
  }

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA
    })
  }
  
  const eliminarTarea = tareaId => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: tareaId
    })
  }

  const cambiarEstadoTarea = tarea => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea
    })
  }

  const guardarTareaActual = tarea => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea
    })
  }

  const actualizarTarea = tarea => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea
    })
  }

  return (
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea
      }}
    >
      {children}
    </tareaContext.Provider>
  )
}

export default TareaState;