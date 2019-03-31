import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './Routes';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header>
					<nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
						<div className='container'>
							<a className='navbar-brand funcity-font' href='#'>
								<img src='./logo-no.png' width='50' class='pr-1' alt='' />
								DEEM-AI
							</a>
							<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
							    <span class='navbar-toggler-icon'></span>
							</button>
							<div class='collapse navbar-collapse' id='navbarSupportedContent'>
								<ul class='navbar-nav mr-auto'>
									<li class='nav-item'>
										<Link to='/' className='nav-link'>Nuestro Equipo</Link>
									</li>
									<li class='nav-item'>
										<Link to='/' className='nav-link'>Productos</Link>
									</li>
									<li class='nav-item'>
										<Link to='/' className='nav-link'>Características</Link>
									</li>
									<li class='nav-item'>
										<Link to='/' className='nav-link'>Qué Hacemos</Link>
									</li>
									<li class='nav-item'>
										<Link to='/' className='nav-link'>Contactenos</Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					<Hero />
				</header>
				<main className='container'>
					<Routes />
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
