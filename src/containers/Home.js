import React, { Component } from 'react';
import Hero from '../components/Hero'
import './Home.scss';

export default class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<Hero />
				<div className='container lander'>
					<h1>deem-ai</h1>
					<p>Una herramienta innovadora para identificar y conocer a tus clientes</p>
					
				</div>
			</div>
		);
	}
}
