import React, { useReducer } from 'react';
import alertaReducer from './alertaReducer';
import alertaConext from './alertaContext';
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';

const AlertaState = ({children}) => {
  const initialState = {
    alerta: null
  }

  const [state, dispatch] = useReducer(alertaReducer, initialState);

  const mostrarAlerta = (msg, categoria) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        msg,
        categoria
      }
    });

    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA
      })
    }, 5000);
  }

  return (
    <alertaConext.Provider
      value={{
        alerta: state.alerta,
        mostrarAlerta
      }}
    >
      {children}
    </alertaConext.Provider>
  )
}

export default AlertaState;