import React from "react";

// const holArr = [];

class HolidayDestinations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      holArr: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // holArr.push(this.state.value);
    this.setState(function(prevState) {
      return {
        holArr: [...prevState.holArr, this.state.value]
      };
    });
    this.setState({ value: "" });
  }

  handleClick(event) {
    const index = event.target.index;
    event.preventDefault();

    this.setState(function(prevState) {
      return {
        holArr: [...prevState.holArr.splice(index, 1)]
      };
    });
  }

  render() {
    return (
      <div>
        <form value={this.state.value} onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.state.holArr.map(el => (
            <li key={el}>
              {el} <button onClick={this.handleClick}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HolidayDestinations;
