import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss'

export default () =>
	<section className='hero'>
		<div className='hero-inner'>
			<h1 className='funcity-font'>DEEM-AI</h1>
            <hr className='hr-light' />
			<h4 className='main-font'>Una herramienta innovadora para identificar y conocer a tus clientes</h4>
			<Link to='/register' className='btn btn-secondary scnd-fnt'> 
				Registrate
				<i className='ml-3 fas fa-arrow-right'></i>
			</Link>
			
		</div>
	</section>;
	
