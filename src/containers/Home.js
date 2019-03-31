import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export default class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<div className='lander'>
					<h1>deem-ai</h1>
					<p>Una herramienta innovadora para identificar y conocer a tus clientes</p>
					
				</div>
			</div>
		);
	}
}
