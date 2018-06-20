import React from "react";

class Person extends React.Component {
  constructor(props) {
    super(props);

    // this.state = { value: "", counter: 0 };
    this.state = {
      value: "",
      counter: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.setState(function(prevState) {
      return {
        counter: prevState.counter + 1
      };
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        {/* <h1>My name is {this.props.name}</h1> */}
        <img src={this.state.value} />
        <p>This is {this.state.value}</p>
        <button onClick={this.handleClick}>Who is this?</button>
        <p>I have been clicked {this.state.counter} times</p>
        <label>
          Name:
          <input value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Image:
          <input value={this.state.value} onSubmit={this.handleSubmit} />
          {/* Create submit button etc */}
        </label>
      </div>
    );
  }
}

export default Person;
