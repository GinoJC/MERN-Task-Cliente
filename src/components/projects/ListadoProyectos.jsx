import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

  const proyectos = [
    {key: 1, nombre: 'Tienda virtual'},
    {key: 2, nombre: 'Intranet'},
    {key: 3, nombre: 'Diseño de Sitio Web'}
  ]

  return (
    <ul className='listado-proyectos'>
      {proyectos.map(proyecto =>
        <Proyecto
          key={proyecto.key}
          proyecto={proyecto}
        />
      )}
    </ul>
  );
};

export default ListadoProyectos;