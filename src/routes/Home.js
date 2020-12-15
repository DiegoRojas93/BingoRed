import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserAlt } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/router/Home.scss';

import Aside from '../components/Aside';
import User from '../components/User';

import Menu from '../pages/Menu';
import Perfil from '../pages/Perfil';
import FigurasYModalidades from '../pages/FigurasYModalidades';
import NotFound from '../pages/NotFound'

class Home extends Component {

	constructor(props){
		super(props),

		this.state={ toogle : true, toogleUser : false }
		this.handleClick = this.handleClick.bind(this);
		this.handleClickUser = this.handleClickUser.bind(this);
	}

	render(){
		return(
			<section>
				{this.state.toogle && <article className='aside'><Aside /></article>}

				<main>
					<header>
						<section>
							<button onClick={this.handleClick}>
								<FontAwesomeIcon icon={faBars} className='icon bars'/>
							</button>
								<h1>SALA Verano 22</h1>
						</section>
						<button onClick={this.handleClickUser}>
							<FontAwesomeIcon icon={faUserAlt} className='icon bars'/>
						</button>
					</header>

					<article className='page'>
						<BrowserRouter >
							<Switch>
								<Route exact path='/' component={Menu}/>
								<Route exact path='/perfil' component={Perfil}/>
								<Route exact path='/FigurasYModalidades' component={FigurasYModalidades}/>
								<Route component={NotFound}/>
							</Switch>
						</BrowserRouter>
					</article>
				</main>

				{/* {this.state.toogleUser &&	<article className='user'><User /></article>} */}

			</section>
		);
	}

	handleClick(){
		this.setState({toogle: !this.state.toogle})
	}

	handleClickUser(){
		this.setState({toogleUser: !this.state.toogleUser})
	}
}


export default Home;