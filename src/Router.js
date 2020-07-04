import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import Jogo from './pages/Jogo/Jogo'
import Vitoria from './pages/Vitoria/Vitoria'
import Parar from './pages/Parar/Parar'

export default () => (
  <Switch>
    <Route exact path="/parar" component={withRouter(Parar)} />
    <Route exact path="/vitoria" component={withRouter(Vitoria)} />
    <Route exact path="/jogo" component={withRouter(Jogo)} />
    <Route exact path="/" component={withRouter(Home)} />
  </Switch>

)
