import React from 'react'
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import NotFound from '../../paginas/error404/Error404'
import Principal from '../../paginas/principal/principal'

export default class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Principal}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}
