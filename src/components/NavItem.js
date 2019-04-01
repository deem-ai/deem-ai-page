import React from "react";
import { Link } from 'react-router-dom';

export default ({
	to,
	text,
	...props
}) =>
	<li
		className='nav-item'
		{...props}
	>
		<Link className='nav-link' to={to}>
			{text}
		</Link>
	</li>;
