import React from 'react';

import {link} from 'react-router-dom'

import '../assets/styles/pages/FigurasYModalidades.scss'

import Figura from '../components/Figura'

const FigurasYModalidades = () => (
	<section className='FigurasYModalidades'>

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

export default FigurasYModalidades;
