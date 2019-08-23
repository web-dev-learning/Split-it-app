import React from "react";
import logo from "../images/Split-it-logo.png";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import PropTypes from "prop-types";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSignUpModalOpen: false,
			isLogInModalOpen: false
		};
		this.handleSignUpModal = this.handleSignUpModal.bind(this);
		this.handleLogInModal = this.handleLogInModal.bind(this);
	}
	handleSignUpModal = (e) => {
		e.preventDefault();
		this.setState((state) => ({isSignUpModalOpen: !state.isSignUpModalOpen}));
	};
	handleLogInModal = (e) => {
		e.preventDefault();
		this.setState((state) => ({isLogInModalOpen: !state.isLogInModalOpen}));
	};
	render() {
		return (
			<div>
				<img src={logo} alt="Spli-it app logo" />
				<button onClick={this.handleLogInModal}>Log-in</button>
				<button onClick={this.handleSignUpModal}>Sign-up</button>
				<SignUpModal openModal={this.state.isSignUpModalOpen} closeModal={this.handleSignUpModal} />
				<SignInModal openModal={this.state.isLogInModalOpen} closeModal={this.handleLogInModal} />
			</div>
		);
	}
}

HomePage.propTypes = {
	isSignUpModalOpen: PropTypes.bool,
	isLogInModalOpen: PropTypes.bool
};

export default HomePage;
