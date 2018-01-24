/* eslint-disable */
import React, { Component } from 'react';

import Loading from '../../components/Loading';
import { mapColumns } from '../../utils/data';

import ProjectList from '../ProjectList';
import ProjectDetails from '../ProjectDetails';

import {
  getUsers,
  getOffices,
  getProjectRegistry,
} from './api';

import {
  keys,
  fields,
} from './data';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      items: [],
      columns: {
        home: [],
        details: [],
      },
      loading: true,
      error: null,
      hideDetails: true,
    };
  }

  componentDidMount() {
    this.loadLists();
  }

  loadLists = () => {
    Promise.all([
      getProjectRegistry().items.get(),
      getOffices().items.get(),
      getUsers().get(),
    ])
      .then(([items, offices, users]) => {
        // console.log('items: ', items);
        // console.log('offices: ', offices);
        // console.log('users: ', users);

        const lookups = {
          users,
          offices,
        };
        
        const columns = {
          home: mapColumns(fields, keys.home, lookups),
          details: mapColumns(fields, keys.details, lookups),
        };

        this.setState({
          items,
          columns,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  showDetails = (item) => {
    this.setState({ item, hideDetails: false });
  }

  hideDetails = () => {
    this.setState({ hideDetails: true });
  }

  render() {
    const {
      item,
      items,
      columns,
      loading,
      error,
      hideDetails,
    } = this.state;

    // ERROR
    if (error) {
      return <p>{error}</p>;
    }

    // LOADING
    if (loading) {
      return <Loading />;
    }

    // PROJECTS LIST AND DETAILS
    const listProps = {
      items,
      columns: columns.home,
      onSelect: this.showDetails,
    };

    const detailsProps = {
      item,
      columns: columns.details,
      title: `${item[fields.title.key]} (${item[fields.acronym.key]})`,
      hidden: hideDetails,
      onDismiss: this.hideDetails,
    };

    return (
      <div>
        <ProjectList {...listProps} />
        <ProjectDetails {...detailsProps} />
      </div>
    );
  }
}

export default App;
