import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import './Nav.scss'

export default ({
	isAuthenticated,
	handleLogout,	
	...props
}) =>
	<nav 
		className='navbar navbar-expand-md navbar-dark bg-primary fixed-top'
		{...props}
	>
		<Link className='navbar-brand funcity-font' to='/'>
			<img className='mr-3' src='logo-no.png' width='30' alt='logo' />
			DEEM-AI
		</Link>
		<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
			<span className='navbar-toggler-icon'></span>
		</button>
		<div className='collapse navbar-collapse' id='navbarSupportedContent'>
			<ul className='navbar-nav abs-center-x'>
				<NavItem to='/' text='Nuestro Equipo' />
				<NavItem to='/' text='Productos' />
				<NavItem to='/' text='Características' />
				<NavItem to='/' text='Qué Hacemos' />
				<NavItem to='/' text='Contactenos' />
			</ul>
			<ul className='navbar-nav ml-auto'>
				{isAuthenticated
					?	<NavItem to='#' text='Salir' onClick={handleLogout} />
					:	<Fragment>
							<NavItem to='#' text='Registrarse' />
							<NavItem to='/login' text='Iniciar Sesión' />
						</Fragment>
				}
			</ul>
		</div>
	</nav>
