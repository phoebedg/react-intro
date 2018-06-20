import React from "react";
import Person from "./components/Person";

class PersonApp extends React.Component {
  render() {
    return (
      <div>
        <Person
          name="Phoebe"
          src="https://ca.slack-edge.com/T85AGSEH3-UADMQBEKW-b3a8c7a15925-72"
        />
        <Person
          name="Oliver"
          src="https://ca.slack-edge.com/T85AGSEH3-UAT1AC68L-4b7c6a21addc-48"
        />
        <Person
          name="Dmitri"
          src="https://ca.slack-edge.com/T85AGSEH3-U84GD59PA-c8b658fe6ad9-48"
        />
      </div>
    );
  }
}

export default PersonApp;
