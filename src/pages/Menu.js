import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCardAlt, faCrown, faDollarSign, faCreditCard, faTh, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/pages/Menu.scss'

class Menu extends React.Component{
	render(){
		return(
			<section className='menu'>
				<article className='menu__box'>
					<div className='menu__box-content'>

						<NavLink to='/perfil' className='items'>
							<article className='items__container'>
								<div className='items__container-icons'>
									<FontAwesomeIcon icon={faIdCardAlt} className='icons'/>
								</div>
								<h3>Perfil</h3>
							</article>
						</NavLink>

						<NavLink to='/perfil' className='items'>
							<article className='items__container'>
								<div className='items__container-icons'>
									<FontAwesomeIcon icon={faCrown} className='icons'/>
								</div>
								<h3>Reyes</h3>
							</article>
						</NavLink>

						<NavLink to='/perfil' className='items'>
							<article className='items__container'>
								<div className='items__container-icons'>
									<FontAwesomeIcon icon={faDollarSign} className='icons'/>
								</div>
								<h3>acumulados</h3>
							</article>
						</NavLink>

						<NavLink to='/perfil' className='items'>
							<article className='items__container'>
								<div className='items__container-icons'>
									<FontAwesomeIcon icon={faCreditCard} className='icons'/>
								</div>
								<h3>Cartones y modulos</h3>
							</article>
						</NavLink>

						<NavLink to='/perfil' className='items'>
							<article className='items__container'>
								<div className='items__container-icons'>
									<FontAwesomeIcon icon={faTh} className='icons'/>
								</div>
								<h3>Figuras y Modalidades</h3>
							</article>
						</NavLink>

						<NavLink to='/perfil' className='items'>
							<article className='items__container'>
								<div className='items__container-icons'>
									<FontAwesomeIcon icon={faShoppingCart} className='icons'/>
								</div>
								<h3>Valores unitarios</h3>
							</article>
						</NavLink>

					</div>
					<hr/>
					<div className='menu__box-copyright'>
						<p>Bingo RED. Hecho por <strong>Diego Rojas</strong></p>
					</div>
				</article>
			</section>
		)
	}
}

export default Menu;
