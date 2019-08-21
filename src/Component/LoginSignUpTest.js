/* This is a test file to test how to go from one modal window to anohter. 
The logic of this code would sit in HomePage.js
Here we would try to implement how clicking on "Already a user? Log in" would close the sign up modal and opens a Log in modal window
*/

import React from "react";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";

class LoginSignUpTest extends React.Component {
  constructor() {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.openSignInLoginModal = this.openSignInLoginModal.bind(this)
  }
  openSignInLoginModal = () => {
    this.setState(() => ({ isModalOpen: true }));
  };
  render() {
    return (
      <div>
        <button onClick={openSignInLoginModal}>Sign-In</button>
        <button onClick={openSignInLoginModal}>Sign-Up</button>
        <SignInModal isModalOpen={this.state.isModalOpen} 
        isModalClose={this.CloseSignInLoginModal}
        />
        <SignUpModal isModalOpen={this.state.isModalOpen} 
        isModalClose={this.CloseSignInLoginModal}
        />
      </div>
    );
  }
}
