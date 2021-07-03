import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Context } from '..'
import { routes } from '../routes'
import { HOME } from '../utils/consts'

export default function AppRouter() {
  const { data } = useContext(Context)

  return (
    <Switch>
      {routes.map(({path, Component}) => 
        <Route key={path} path={path} component={Component} exact />
      )}
      <Redirect to={HOME} />
    </Switch>
  )
}
