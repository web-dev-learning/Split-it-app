import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

class SignInModal extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Modal className="sign-up-modal" isOpen={this.props.openModal} contentLabel="Modal for Sign up form">
				<form>
					<h3>
						<label htmlFor="username-or-emailId">Username/Email-id:</label>
					</h3>
					<input type="text" id="username-or-emailId" placeholder="" required />
					<h3 className="password">Password</h3>
					<input type="passoword" id="password" placeholder="enter your password" required />
					<button onSubmit={this.props.closeModal}>Sign me in!</button>
					<button onClick={this.props.closeModal}>Cancel</button>
				</form>

				<p>
					Not a member? <button onClick={this.props.swapModal}>Sign up here</button>
				</p>
			</Modal>
		);
	}
}

SignInModal.propTypes = {
	openModal: PropTypes.bool,
	closeModal: PropTypes.func
};

export default SignInModal;
