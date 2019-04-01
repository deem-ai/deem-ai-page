import React from 'react';
import './Footer.scss'

export default () =>
	<footer className='footer'>
		<div className='container-fluid'>
			<div className='row bg-dark'>
				<div className='col-md-4'>
					<div className="text-center pb-2">
						<h3 className="main-font">Contacto</h3>
					</div>
					<ul className="footer-ul">
						<li className="scnd-font">
							<i className="fas fa-phone"></i>
							+57-3502612927
						</li>
						<li className="scnd-font">
							<i className="fas fa-phone"></i>
							+57-3058152933
						</li>
						<li className="scnd-font">
							<i className="fas fa-envelope"></i>
							deemai.contact@gmail.com
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>;