import React, { PureComponent } from 'react';

import List from '../../components/List';


class ProjectList extends PureComponent {
  render() {
    return (
      <List
        title={'Example List (tooltips, sort, filter, title)'}
        items={this.props.items}
        columns={this.props.columns}
      />
    );
  }
}

export default ProjectList;