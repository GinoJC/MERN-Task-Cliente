import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/projects/Proyectos';

import ProyectoState from './context/proyectos/proyectosState';
import TareaState from './context/tareas/tareaState';

const App = () => {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/nueva-cuenta' component={NuevaCuenta}/>
            <Route exact path='/proyectos' component={Proyectos}/>
          </Switch>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
