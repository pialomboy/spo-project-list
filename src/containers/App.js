import React, { Component } from 'react';

import NewForm from './NewForm';
import ProjectList from './ProjectList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNewForm: false,
    };
  }

  hideNewForm = () => {
    this.setState({ displayNewForm: false });
  }

  displayNewForm = () => {
    this.setState({ displayNewForm: true });
  }

  render() {
    return (
      <div>
        <h2>Project Registry Online (PRO)</h2>

        {
          this.state.displayNewForm ?
            <button onClick={this.hideNewForm}>Back</button> :
            <button onClick={this.displayNewForm}>New Project</button>
        }

        {
          this.state.displayNewForm ?
            <NewForm /> :
            <ProjectList />
        }
      </div>
    );
  }
}

export default App;
