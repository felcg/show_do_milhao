import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import Jogo from './pages/Jogo/Jogo'

export default () => (
  <Switch>
    <Route exact path="/jogo" component={withRouter(Jogo)} />
    <Route exact path="/" component={withRouter(Home)} />
  </Switch>

)
