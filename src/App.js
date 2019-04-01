import { Auth } from 'aws-amplify';
import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import Routes from './Routes';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './App.scss';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isAuthenticated: false,	
			isAuthenticating: true
		};
	}

	async componentDidMount() {
		try {
			await Auth.currentSession();
			this.userHasAuthenticated(true);
	  	}
	  	catch(e) {
			if (e !== 'No current user') {
		  		alert(e);
			}
	  	}
	  	this.setState({ isAuthenticating: false });
	}

	handleLogout = async event => {
		await Auth.signOut();
  		
  		this.userHasAuthenticated(false);

  		this.props.history.push('/login');
	}

	userHasAuthenticated = authenticated => {
		this.setState({ isAuthenticated: authenticated });
	}

	render() {

		const childProps = {
			isAuthenticated: this.state.isAuthenticated,
			userHasAuthenticated: this.userHasAuthenticated
		};

		return (
			!this.state.isAuthenticating &&
			<div className='App'>
				<header>
					<Nav isAuthenticated={this.state.isAuthenticated} handleLogout={this.handleLogout}/>
				</header>
				<main className='main' role='main'>
					<Routes childProps={childProps}/>
				</main>
				<Footer />
			</div>
		);
	}
}

export default withRouter(App);
