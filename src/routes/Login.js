import React from 'react';

import '../Assets/styles/router/Login.scss';
import Logo from '../../public/assets/images/logo.png';
import Bingo from '../../public/assets/images/Bingo.jpg';

class Login extends React.Component {
	constructor(props){
		super(props),

		this.handleSubmit = this.handleSubmit.bind(this)

	}

	handleSubmit(e){
		e.preventDafault()
	}

	render(){
		return (
			<section className='login' style={{ backgroundImage:`url(${Bingo})`}}>
				<article className='login__box'>
					<img src={Logo} alt='logo de BingoRed'/>

					<form action="" onSubmit={this.handleSubmit}>

						<label htmlFor="correo">
							<input type="text"
								id='correo'
								name='correo'
								placeholder='correo'
								required
								autoComplete='email'
							/>
						</label>
						<label htmlFor="contraseña">
							<input
								type="password"
								id='contraseña'
								name='contraseña'
								placeholder='contraseña'
								required/>
						</label>

						<button onClick={this.props.onClick}>
							INICIAR SESIÓN
						</button>

					</form>

					<div className='version'>
						<span>Version: 23 de Febrero 2020</span>
					</div>
				</article>
			</section>
		)
	}
}

export default Login;
