import { 
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
  PROYECTO_ERROR
} from "../../types";

const proyectoReducer = (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true
      }
    case OBTENER_PROYECTOS:
      console.log('OBTENER_PROYECTOS', action.payload);
      return {
        ...state,
        proyectos: action.payload
      }
    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
        errorformulario: false
      }
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorformulario: true
      }
    case PROYECTO_ACTUAL:
      return {
        ...state,
        proyecto: action.payload
      }
    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload),
        proyecto: null
      }
    case PROYECTO_ERROR:
      return {
        ...state,
        mensaje: action.payload
      }
    default:
      return state;
  }
}

export default proyectoReducer;