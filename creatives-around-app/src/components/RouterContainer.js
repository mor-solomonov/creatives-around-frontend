import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import SignUpContainer from './SignUpContainer';
import LoginContainer from './LoginContainer';

export default function RouterContainer() {
    return (

        <Router>
            <header>
                <NavLink to='/' exact activeStyle={{ color: "gray" }} style={style}> Login </NavLink>
                <NavLink to='/signup' exact activeStyle={{ color: "gray" }} style={style}> Sign Up </NavLink>
            </header>
            <main>
                <Switch>
                    <Route path='/' exact component={LoginContainer} />
                    <Route path='/signup' exact component={SignUpContainer} />
                </Switch>
            </main>
        </Router>

    )
}
