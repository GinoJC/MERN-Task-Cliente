import React, {useReducer} from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION
} from '../../types';

const AuthState = ({children}) => {
  const initialState = {
    token: localStorage.getItem('token'),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: true
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  const registrarUsuario = async datos => {
    try {
      const respuesta = await clienteAxios.post('/api/usuarios', datos);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data
      });

      usuarioAutenticado();
    } catch (error) {
      console.log('Error registrarUsuario', error.response);
      const alerta = {
        msg: error.response.data.msg,
        categoria: 'alerta-error'
      }
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta
      });
    }
  }

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      tokenAuth(token);
    }
    try {
      const respuesta = await clienteAxios.get('/api/auth');
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario
      })
    } catch (error) {
      console.log('Error usuarioAutenticado', error.response);
      dispatch({
        type: LOGIN_ERROR
      })
    }
  }

  const iniciarSesion = async datos => {
    try {
      const respuesta = await clienteAxios.post('/api/auth', datos);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data
      });

      usuarioAutenticado();
    } catch (error) {
      console.log('Error iniciarSesion', error.response);
      const alerta = {
        msg: error.response.data.msg,
        categoria: 'alerta-error'
      }
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta
      });
    }
  }

  const cerrarSesion = async () => {
    dispatch({
      type: CERRAR_SESION
    })
  }

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        cargando: state. cargando,
        registrarUsuario,
        usuarioAutenticado,
        iniciarSesion,
        cerrarSesion
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export default AuthState;