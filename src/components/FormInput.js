import React from "react";

class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // const value = event.target.value;
    // const name = event.target.name;
    const { name, value } = event.target;
    this.props.receiver(name, value);
  }

  render() {
    return (
      <div>
        <label>
          {this.props.errors && "error:" + this.props.errors}
          {this.props.label}
          <input
            type={this.props.type ? this.props.type : "text"}
            value={this.props.value}
            onChange={this.handleChange}
            name={this.props.name}
          />
        </label>
      </div>
    );
  }
}

export default FormInput;
