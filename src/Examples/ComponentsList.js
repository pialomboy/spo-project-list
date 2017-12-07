import React, { Component } from 'react';

import List from '../components/List';


const items = [
  {
    title: 'Title 1',
    version: '1',
  },
  {
    title: 'Title 2',
    version: '21',
  },
  {
    title: 'Title 3',
    version: '13',
  },
];

const columns = [
  {
    key: 'title',
    name: 'Title',
    fieldName: 'title',
    isResizable: true,
    ariaLabel: 'Tooltip for title',
  },
  {
    key: 'version',
    name: 'Document Version',
    fieldName: 'version',
    isResizable: true,
    ariaLabel: 'Tooltip for doc version',
  },
];


class ComponentsList extends Component {
  render() {
    return (
      <List
        title={'Example List (tooltips, sort, filter, title)'}
        items={items}
        columns={columns}
      />
    );
  }
}

export default ComponentsList;