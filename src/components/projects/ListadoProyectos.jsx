import React, {useEffect, useContext} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import AlertaContext from '../../context/alertas/alertaContext';

const ListadoProyectos = () => {
  const proyectoContext = useContext(ProyectoContext);
  const {proyectos, mensaje, obtenerProyectos} = proyectoContext;

  const alertaContext = useContext(AlertaContext);
  const {alerta, mostrarAlerta} = alertaContext;

  useEffect(() => {
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    obtenerProyectos();
  // eslint-disable-next-line
  },[mensaje]);

  if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className='listado-proyectos'>
      {alerta ? <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> : null}
      <TransitionGroup>
        {proyectos.map(proyecto =>
          <CSSTransition
            key={proyecto._id}
            timeout={200}
            classNames='proyecto'
          >
            <Proyecto proyecto={proyecto}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;