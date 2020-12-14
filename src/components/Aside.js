import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faUserFriends, faCrown, faDollarSign, faCreditCard, faTh, faShoppingCart, faTabletAlt } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/components/Aside.scss'
import Logo from '../../public/assets/images/logo.png'

const Aside = () =>(
	<section className='aside__container'>
		<img src={Logo} alt="logo de BingoRed"/>

		<ul>
			<li>
				<span>Super Admin</span>
			</li>
			<li>
				<FontAwesomeIcon icon={faClipboard} className='icons-list'/>
				<h3>Dashboard</h3>
			</li>
			<li>
				<FontAwesomeIcon icon={faUserFriends} className='icons-list'/>
				<h3>Usuarios</h3>
			</li>
			<li>
				<FontAwesomeIcon icon={faCrown} className='icons-list'/>
				<h3>Reyes</h3>
			</li>
			<li>
				<FontAwesomeIcon icon={faDollarSign} className='icons-list'/>
				<h3>Acumulados</h3>
			</li>
			<li>
				<FontAwesomeIcon icon={faCreditCard} className='icons-list'/>
				<h3>Cartones y modulos</h3>
			</li>
			<li>
				<FontAwesomeIcon icon={faTh} className='icons-list'/>
				<h3>Figuras y Modalidades</h3>
			</li>
			<li>
				<FontAwesomeIcon icon={faShoppingCart} className='icons-list'/>
				<h3>Valores unitarios</h3>
			</li>
			<li>
				<FontAwesomeIcon icon={faTabletAlt} className='icons-list'/>
				<h3>Tablets</h3>
			</li>

		</ul>
		{/* <button>Dashboard</button>
		<button>Usuarios</button>
		<button>Reyes</button>
		<button>Acumilados</button>
		<button>Cartones y modulos</button>
		<button>Figuras y Modalidades</button>
		<button>Valores unitarios</button>
		<button>Tables</button> */}
	</section>
)

export default Aside;
