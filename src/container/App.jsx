import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import '../assets/styles/container/App.scss'

import Login from '../routes/Login'
import Home from '../routes/Home'

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {isLogin: false}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.setState({isLogin: !this.state.isLogin})
	}

	render(){

		let isLoginIn = this.state.isLogin
		return (

			<>
				{ isLoginIn ? <Home /> : <Login onChange={this.handleClick}/> }
			</>

		)
	}
}

export default App;
