import React, { Component } from 'react';
import { Auth } from "aws-amplify";
import LoaderButton from "../components/LoaderButton";
import './Login.css';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			email: '',
			password: ''
		};
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = async event => {
		event.preventDefault();

		this.setState({ isLoading: true });

	 	try {
			await Auth.signIn(this.state.email, this.state.password);
			this.props.userHasAuthenticated(true);
			this.props.history.push('/');
		} catch (e) {
			alert(e.message);
			this.setState({ isLoading: false });
		}
	}

	render() {
		return (
			<div className='Login'>
				<div className='container'>
					<form onSubmit={this.handleSubmit}>
						<div className='form-group'>
							<label for='email'>Email</label>
							<input 
								autoFocus
								className='form-control form-control-lg' 
								id='email' 
								aria-describedby='email'
								value={this.state.email}
								onChange={this.handleChange}
								type='email'
							/>
							<small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
						</div>
						<div className='form-group'>
							<label for='password'>Password</label>
							<input 
								className='form-control form-control-lg' 
								id='password' 
								aria-describedby='email'
								value={this.state.password}
								onChange={this.handleChange}
								type='password' 
							/>
						</div>
						<LoaderButton 
							type='submit'
							className='btn btn-lg btn-block btn-primary'
							disabled={!this.validateForm()}
							isLoading={this.state.isLoading}	
							text='Entrar'
							loadingText='Cargando'
						/>
					</form>
				</div>
			</div>
		);
	}
}
