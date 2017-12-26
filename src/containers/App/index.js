import React, { Component } from 'react';

import ProjectList from '../ProjectList';

import { getProjectRegistry, getUsers } from './api';
import mapColumns from './columns';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      items: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    Promise.all([
      getProjectRegistry().items.get(),
      getUsers().get(),
    ])
      .then(([items, users]) => {
        this.setState({
          items,
          columns: mapColumns(users),
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });

    // // log all items
    // getProjectRegistry().items.get()
    //   .then((r) => {
    //     console.log('ALL: ', r);
    //   });
  }

  render() {
    const {
      items,
      columns,
      loading,
      error,
    } = this.state;

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
