import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UrlShorten from '../UrlShorten/UrlShorten'
import About from '../About/About'

const Router = () => (
    <Switch>
        <Route exact path='/' component={UrlShorten}></Route>
        <Route exact path='/About' component={About}></Route>
    </Switch>
)

export default Router
