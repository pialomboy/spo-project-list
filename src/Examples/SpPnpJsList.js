import React, { Component } from 'react';

import pnp from 'sp-pnp-js';

// let w = new Web("{https://stateca.sharepoint.com/sites/DevTest/DASandbox/Lists/ProjectRegistry/AllItems.aspx"}); 
// const w = new $pnp.Web("{Site Url}");

// // GET /_api/web
// // r = return value containing all sp lists on the site.
// pnp.sp.web.lists.get().then(r => {
//   console.log('Got lists: ', r);o
// });

// // GET /_api/web/lists/getByTitle('Tasks')
// pnp.sp.web.lists.getByTitle("ProjectRegistry").get().then(r => {

//   console.log(r);
// });

// // GET /_api/web/lists/getByTitle('Tasks')/items
// pnp.sp.web.lists.getByTitle("ProjectRegistry").items.get().then(r => {
//   console.log(r);
// });

// let d = 'Loading...';

// // GET /_api/web/lists/getByTitle('Tasks')/items(1)
// pnp.sp.web.lists.getByTitle("ProjectRegistry").items.getById(1).get().then(r => {
//   const names = {
//     completedDate: 'sdin',
//   };
//   d = r[names.completedDate];
// });


class SpPnpJsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectRegistry: [],
    };
  }

  componentDidMount() {
    pnp.sp.web.lists.getByTitle("ProjectRegistry").items.get().then(r => {
      const newState = {
        projectRegistry: r,
      };
      this.setState(newState);
    });
  }

  render() {
    return (
      <ul>
        {
          this.state.projectRegistry.map((item) =>
            <li key={item.Id}>{item.Title}</li>
          )
        }
      </ul>
    );
  }
}

export default SpPnpJsList;
