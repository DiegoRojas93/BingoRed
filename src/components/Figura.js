import React from 'react';

import '../assets/styles/components/Figura.scss';

class Figura extends React.Component{

	constructor(props){
		super(props),
		this.state  = {active: false}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({active: !this.state.active});
		console.log(this.state.active);
	}

	render(){
		const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

		let className = 'figura__body-celda';

		if (this.state.active){
			className += 'figura__body-celda active';
		}

		const listCel = numbers.map((number) => (
			<div
				className={className}
				key={number.toString()}
				onClick={this.handleClick}
			></div>
		))

		return(
			<section className='figura' >
				<article className='figura__header' >
					<h4>title 1</h4>
					<button><h3>x</h3></button>
				</article>
				<article className='figura__body'>

					{listCel}

				</article>
			</section>
		);
	}
}

export default Figura;
