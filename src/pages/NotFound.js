import React from 'react';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/pages/NotFound.scss';

class NotFound extends React.Component{
	constructor(props){
		super(props);
		this.handleBackClick = this.handleBackClick.bind(this);
	}

	handleBackClick(){
		this.props.history.go(-1)
	}

	render(){
		return(
			<section className='notFound'>
				<article className='notFound__back'>
					<button onClick={this.handleBackClick}>
						<FontAwesomeIcon icon={faArrowLeft}/>
					</button>
				</article>
				<article className='notFound__box'>
					<h1>NotFound 404</h1>
					<hr/>
					<Link to='/home' className='subtitle'>
						<h3>Go Home</h3>
					</Link>
				</article>
			</section>
		);
	}
}


export default NotFound;
