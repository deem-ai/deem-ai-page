import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'

export default () =>
	<footer className='container-fluid footer'>
		<div className='row bg-dark'>
			<div className='col-md-4'>
				<div class="text-center pb-2">
					<h3 class="main-font">Contacto</h3>
				</div>
				<ul class="footer-ul">
					<li class="scnd-font">
						<i class="fas fa-phone"></i>
						+57-3502612927
					</li>
					<li class="scnd-font">
						<i class="fas fa-phone"></i>
						+57-3058152933
					</li>
					<li class="scnd-font">
						<i class="fas fa-envelope"></i>
						deemai.contact@gmail.com
					</li>
				</ul>
			</div>
		</div>
	</footer>;
	