import React from 'react';
import {Link} from 'react-router-dom';

import '../Assets/styles/pages/Login.scss';
import Logo from '../../public/assets/images/logo.png';
import Bingo from '../../public/assets/images/Bingo.jpg';

const Login = () => (
	<section className='login' style={{ backgroundImage:`url(${Bingo})`}}>
		<article className='login__box'>
			<img src={Logo} alt='logo de BingoRed'/>

			<form action="">

				<label htmlFor="correo">
					<input type="text" id='correo' name='correo' placeholder='correo' required autoComplete='email'/>
				</label>
				<label htmlFor="contraseña">
					<input type="password" id='contraseña' name='contraseña' placeholder='contraseña' required/>
				</label>

				<Link exact="true" to='/Home' >
					<button>
						INICIAR SESIÓN
					</button>
				</Link>

			</form>

			<div className='version'>
				<span>Version: 23 de Febrero 2020</span>
			</div>
		</article>
	</section>
)

export default Login;
