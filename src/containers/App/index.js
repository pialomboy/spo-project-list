import React, { Component } from 'react';

import { mapColumns } from '../../utils/data';
import ProjectList from '../ProjectList';

import { getProjectRegistry, getUsers } from './api';
import fields from './data';


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
          columns: mapColumns(fields, users),
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
