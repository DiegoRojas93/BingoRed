import React from 'react';

import '../assets/styles/components/Figura.scss'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

const listCel = numbers.map((number) => <div className='figura__body-celda' key={number.toString()}></div>);

const Figura = () => (
	<section className='figura'>
		<article className='figura__header'>
			<h4>title 1</h4>
			<button><h3>x</h3></button>
		</article>
		<article className='figura__body'>
			{listCel}
		</article>
	</section>
);

export default Figura;
