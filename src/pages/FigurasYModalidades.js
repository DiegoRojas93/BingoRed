import React from 'react';

import '../assets/styles/pages/FigurasYModalidades.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Figura from '../components/Figura'

class FigurasYModalidades extends React.Component{
	constructor(props){
		super(props);
		this.handleBackClick = this.handleBackClick.bind(this);
	}

	handleBackClick(){
		this.props.history.go(-1)
	}

	render(){
		return(
			<section className='FigurasYModalidades'>
			<article className='FigurasYModalidades__back'>
					<button onClick={this.handleBackClick}>
						<FontAwesomeIcon icon={faArrowLeft}/>
					</button>
				</article>
				<article className='FigurasYModalidades__Box'>
					<div className='FigurasYModalidades__Box-encabezado'>
						<p>Lista con figuras</p>
					</div>
					<div className="FigurasYModalidades__Box-cuerpo">
						<section className='figuras'>
							<Figura />
							<Figura />
							<Figura />
							<Figura />
							<Figura />
							<Figura />
						</section>
					</div>
				</article>
			</section>
		)
	}
}

export default FigurasYModalidades;
