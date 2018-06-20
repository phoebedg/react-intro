import React from "react";
import FormInput from "./FormInput";

class RegistrationForm extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      formComplete: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiver = this.receiver.bind(this);
  }

  validate() {
    const { firstName, lastName, email } = this.state;

    if (!firstName.length) {
      // If first name is longer than 0
      return false;
    }

    if (!lastName.length) {
      return false;
    }

    if (!email.length) {
      return false;
    }

    const chunks = email.split("@");

    if (chunks.length !== 2) {
      return false;
    }

    const moreChunks = chunks[1].split(".");

    if (moreChunks.length !== 2) {
      return false;
    }

    return true;
  }

  handleSubmit(event) {
    event.preventDefault();

    const isValid = this.validate();

    if (!isValid) {
      alert("Sorry, you are a turnip");
    } else {
      alert("Congratulations, you are not an idiot");
    }
    // if (
    //   typeof event.target.value === "string" &&
    //   typeof event.target.value === "string" &&
    //   event.target.value.includes("@")
    // ) {
    //   alert("Congratulations, you are not an idiot");
    // } else {
    //   alert("Sorry, you are a turnip");
    // }
  }

  receiver(name, value) {
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <FormInput
          label="First name"
          value={this.state.firstName}
          receiver={this.receiver}
          name="firstName"
          // errors={this.state.errors.firstName}
        />
        <FormInput
          label="Last name"
          value={this.state.lastName}
          receiver={this.receiver}
          name="lastName"
          // errors={this.state.errors.secondName}
        />
        <FormInput
          label="Email"
          value={this.state.email}
          type="email"
          receiver={this.receiver}
          name="email"
          // errors={this.state.errors.email}
        />
        <button type="submit" onSubmit={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default RegistrationForm;
