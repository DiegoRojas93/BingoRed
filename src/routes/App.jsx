import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import '../assets/styles/routes/App.scss'

import Login from '../pages/Login'
import Home from '../pages/Home'

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login}/>
			<Route exact path='/Home' component={Home}/>
		</Switch>
	</BrowserRouter>
)
export default App;
