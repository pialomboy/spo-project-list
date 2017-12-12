import React, { Component } from 'react';

import NewForm from '../NewForm';
import ProjectList from '../ProjectList';

import { getProjectRegistry } from './api';
import columns from './columns';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    getProjectRegistry()
      .then((items) => {
        this.setState({ 
          items, 
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const { items, loading, error } = this.state;

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <div>
        <h2>Project Registry Online (PRO)</h2>
        {
          loading ?
            <p>loading....</p> :
            <ProjectList items={items} columns={columns} />
        }
      </div>
    );
  }
}

export default App;
