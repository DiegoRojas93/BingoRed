import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserAlt } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/routes/Home.scss'

import Aside from '../components/Aside'

class Home extends Component {

	constructor(props){
		super(props),

		this.state={ toogle : false }
		this.handleClick = this.handleClick.bind(this);
		console.log('toogle: ', this.state.toogle);
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
					<FontAwesomeIcon icon={faUserAlt} className='icon bars'/>
				</header>
			</section>
		);
	}

	handleClick(){
		this.setState({toogle: !this.state.toogle})
		console.log('toogle: ', this.state.toogle);
	}
}


export default Home;