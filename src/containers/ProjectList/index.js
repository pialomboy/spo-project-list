import React, { PureComponent } from 'react';

import List from '../../components/List';


class ProjectList extends PureComponent {
  render() {
    return (
      <List
        title={'Project Registry'}
        items={this.props.items}
        columns={this.props.columns}
        selectionMode={0}
      />
    );
  }
}

export default ProjectList;