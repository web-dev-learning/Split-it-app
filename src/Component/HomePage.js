import React from "react";
import logo from "../images/Split-it-logo.png";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSignUpModalOpen: false,
			isSignInModalOpen: false
		};
		this.handleSignUpModal = this.handleSignUpModal.bind(this);
		this.handleSignInModal = this.handleSignInModal.bind(this);
		this.handleSwapModal = this.handleSwapModal.bind(this);
	}
	handleSignUpModal = (e) => {
		e.preventDefault();
		this.setState((state) => ({isSignUpModalOpen: !state.isSignUpModalOpen}));
	};
	handleSignInModal = (e) => {
		e.preventDefault();
		this.setState((state) => ({isSignInModalOpen: !state.isSignInModalOpen}));
	};
	handleSwapModal = (e) => {
		e.preventDefault();
		this.setState((state) => ({
			isSignInModalOpen: !state.isSignInModalOpen,
			isSignUpModalOpen: !state.isSignUpModalOpen
		}));
	};
	render() {
		return (
			<div>
				<img src={logo} alt="Spli-it app logo" />
				<button onClick={this.handleSignInModal}>Sign-in</button>
				<button onClick={this.handleSignUpModal}>Sign-up</button>
				<SignUpModal
					openModal={this.state.isSignUpModalOpen}
					closeModal={this.handleSignUpModal}
					swapModal={this.handleSwapModal}
				/>
				<SignInModal
					openModal={this.state.isSignInModalOpen}
					closeModal={this.handleSignInModal}
					swapModal={this.handleSwapModal}
				/>
			</div>
		);
	}
}

export default HomePage;
