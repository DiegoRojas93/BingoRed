import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import '../assets/styles/container/App.scss'

import Login from '../routes/Login'
import Home from '../routes/Home'

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			isLogin: false,
			form: {correo: '', password: ''}
		}

		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleClick(){
		this.setState({isLogin: !this.state.isLogin})

		setTimeout(()=>{
			console.log(this.state.isLogin);
		},100)
	}

	handleChange(){
		this.setState({form:{
			...this.state.form,
			[e.target.name] : e.target.value
		}})
	}

	render(){

		let isLoginIn = this.state.isLogin
		return (

			<>
				{ isLoginIn ?
					<Home />
					:
					<Login
						onClick={this.handleClick}
						onChange={this.state.from}
						formValues={this.state.from}
					/>
				}
			</>

		)
	}
}

export default App;
