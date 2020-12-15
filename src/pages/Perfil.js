import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserFriends, faCode, faChair, faCalendarAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/pages/Perfil.scss';
import user from '../../public/assets/images/user.png';

class Perfil extends React.Component{

	constructor(props){
		super(props);
		this.handleBackClick = this.handleBackClick.bind(this);
	}

	handleBackClick(){
		this.props.history.go(-1)
	}

	render(){
		return(
			<section className='perfil'>
				<article className='perfil__back'>
					<button onClick={this.handleBackClick}>
						<FontAwesomeIcon icon={faArrowLeft}/>
					</button>
				</article>
				<article className='perfil__box'>
					<div className='perfil__box-data'>
						<ul className='list'>
							<li className='list__item'>
								<div className='list__item-boxIcon'>
									<FontAwesomeIcon icon={faUser} className='user__icons'/>
								</div>
								<div className='list__item-data'>
									<span>Nombre</span>
									<h3>superAdmin</h3>
								</div>
							</li>
							<li className='list__item'>
								<div className='list__item-boxIcon'>
									<FontAwesomeIcon icon={faUserFriends} className='user__icons'/>
								</div>
								<div className='list__item-data'>
									<span>apellidos</span>
									<h3>Michael</h3>
								</div>
							</li>
							<li className='list__item'>
								<div className='list__item-boxIcon'>
									<FontAwesomeIcon icon={faCode} className='user__icons'/>
								</div>
								<div className='list__item-data'>
									<span>nombre del ususario</span>
									<h3>superAdmin</h3>
								</div>
							</li>
							<li className='list__item'>
								<div className='list__item-boxIcon'>
									<FontAwesomeIcon icon={faChair} className='user__icons'/>
								</div>
								<div className='list__item-data'>
									<span>Rol</span>
									<h3>superAdmin</h3>
								</div>
							</li>
							<li className='list__item'>
								<div className='list__item-boxIcon'>
									<FontAwesomeIcon icon={faCalendarAlt} className='user__icons'/>
								</div>
								<div className='list__item-data'>
									<span>fecha de creacion</span>
									<h3>9 jul. 2019</h3>
								</div>
							</li>
						</ul>
					</div>
					<div className='perfil__box-image'>
						<img src={user} alt="user"/>
					</div>
				</article>
			</section>
		)
	}
}


export default Perfil;
