import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserAlt } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/routes/Home.scss'

import Aside from '../components/Aside'

import User from '../components/User'

class Home extends Component {

	constructor(props){
		super(props),

		this.state={ toogle : false, toogleUser : false }
		this.handleClick = this.handleClick.bind(this);
		this.handleClickUser = this.handleClickUser.bind(this);
	}

	render(){
		return(
			<section>
				{this.state.toogle && <article className='aside'><Aside /></article>}
				<header>
					<section>
						<button onClick={this.handleClick}>
							<FontAwesomeIcon icon={faBars} className='icon bars'/>
						</button>
						<Link to='/Home' className='title'>
							<h1>SALVA Verano 22</h1>
						</Link>
					</section>
					<button onClick={this.handleClickUser}>
						<FontAwesomeIcon icon={faUserAlt} className='icon bars'/>
					</button>
				</header>

				{this.state.toogleUser &&	<article className='user'><User /></article>}

				
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