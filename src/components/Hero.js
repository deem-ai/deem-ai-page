import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss'

export default () =>
	<section className='hero'>
		<div className='hero-inner container'>
			<div className='offset-md-3 col-md-6'>
				<h1 className='funcity-font'>DEEM-AI</h1>
                <hr class='hr-light' />
				<h2 className='main-font'>Una herramienta innovadora para identificar y conocer a tus clientes</h2>
				<Link to='/register' className='btn btn-secondary scnd-fnt'> 
					Registrate...
					<i class='fas fa-arrow-right'></i>
				</Link>
			</div>
		</div>
	</section>;
	
