import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./LoaderButton.css";

export default ({
	isLoading,
	text,
	loadingText,
	className = "",
	disabled = false,
	...props
}) =>
	<button
		className={`LoaderButton ${className}`}
		disabled={disabled || isLoading}
		{...props}
	>
		{isLoading && <FontAwesomeIcon icon="spinner" spin />}
		{!isLoading ? text : loadingText}
	</button>;
