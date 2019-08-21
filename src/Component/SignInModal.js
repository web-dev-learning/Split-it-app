import React from "react";
import Modal from "react-modal";

class SignInModal extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props.isOpen);
		return (
			<Modal className="sign-up-modal" isOpen={this.props.isModalOpen} contentLabel="Modal for Sign up form">
				<form>
					<h3>
						<label htmlFor="username-or-emailId">Username/Email-id:</label>
					</h3>
					<input type="text" id="username-or-emailId" placeholder="" required />
					<h3 className="password">Password</h3>
					<input type="passoword" id="password" placeholder="enter your password" required />
					<button onSubmit={this.props.closeModal}>Sign me in!</button>
				</form>

				<p>
					Not a member? <a href="#">Sign up here</a>
				</p>
			</Modal>
		);
	}
}

export default SignInModal;
