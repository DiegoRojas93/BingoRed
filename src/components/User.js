import React from 'react';
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCardAlt, faPaintBrush, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/components/User.scss'

const User = () => (
	<section className='user__container'>
		<article className='user__container-item'>
			<h1>SuperAdmin</h1>
		</article>
		<article className='user__container-item'>
			{/* <Link to='/perfil' className='links'>
				<FontAwesomeIcon icon={faIdCardAlt} className='user__icons'/>
				<h3>Perfil</h3>
			</Link> */}
		</article>
		<article className='user__container-item'>
			{/* <Link className='links'>
				<FontAwesomeIcon icon={faPaintBrush} className='user__icons'/>
				<h3>Temas</h3>
			</Link> */}
		</article>
		<article className='user__container-item'>
			{/* <Link to='/' className='links'>
				<FontAwesomeIcon icon={faSignOutAlt} className='user__icons'/>
				<h3>Cerrar sesión</h3>
			</Link> */}
		</article>
	</section>
)

export default User;
