import React, {useEffect, useContext} from 'react';
import Sidebar from '../layouts/Sidebar';
import Barra from '../layouts/Barra';
import FormTarea from '../tasks/FormTarea';
import ListadoTareas from '../tasks/ListadoTareas';
import AuthContext from '../../context/autenticacion/authContext';

const Proyectos = () => {
  const authContext = useContext(AuthContext);
  const {usuarioAutenticado} = authContext;

  useEffect(() => {
    usuarioAutenticado();
  // eslint-disable-next-line
  }, []);
  
  return (
    <div className='contenedor-app'>
      <aside>
        <Sidebar/>
      </aside>
      <div className="seccion-principal">
        <Barra/>
        <main>
          <FormTarea/>
          <div className="contenedor-tareas">
            <ListadoTareas/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;