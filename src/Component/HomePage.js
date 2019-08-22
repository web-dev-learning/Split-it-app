import React from "react";
import logo from "../images/Split-it-logo.png";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false
        };
        this.handleModalWindow = this.handleModalWindow.bind(this);
    }
      handleModalWindow = e => {
        e.preventDefault();
        this.setState(() => ({ isModalOpen: !this.state.isModalOpen }));
      };
	render() {
		return (
			<div>
				<img src={logo} alt="Spli-it app logo" />
				<button onClick={this.handleModalWindow}>Log-in</button>
				<button onClick={this.handleModalWindow}>Sign-up</button>
                <SignUpModal 
                openModal={this.state.isModalOpen} 
                closeModal={this.handleModalWindow} />
                <SignInModal   
                openModal={this.state.isModalOpen} 
                closeModal={this.handleModalWindow} />
			</div>
		);
	}
}

export default HomePage;
