import React, { Component } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import App from './App.js'
import App2 from'./t/App2.js'

class Ha extends React.Component{
    render(){
        return(
        <div>
      <BrowserRouter>
      <Route exact path='/' component={App}>
        
      </Route>
      <Switch>
      <Route path='/earth' component={App}></Route>
      </Switch>
      </BrowserRouter>
    </div>
        )
    }
}
export default Ha;