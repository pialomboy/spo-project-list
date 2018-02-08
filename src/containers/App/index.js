/* eslint-disable */
import React, { Component } from 'react';

import Loading from '../../components/Loading';
import { mapItems, mapColumns } from '../../utils/data';

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
  searchFields,
} from './data';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: { [fields.title.key]: '' },
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

  loadLists = async () => {
    try {
      const [spItems, offices, users] = await Promise.all([
        getProjectRegistry().items.get(),
        getOffices().items.get(),
        getUsers().get(),
      ]);
      
      const lookups = {
        users,
        offices,
      };
  
      const items = mapItems(spItems, fields, Object.keys(fields), lookups);

      const columns = {
        home: mapColumns(fields, keys.home, lookups),
        details: mapColumns(fields, keys.details, lookups),
      };
  
      this.setState({
        items,
        columns,
        loading: false,
      });
    } catch(error) {
      this.setState({ error: error.message });
    }
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
      searchFields,
      columns: columns.home,
      onSelect: this.showDetails,
    };
    
    const detailsProps = {
      item,
      columns: columns.details,
      title: item[fields.title.key].mapped,
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
