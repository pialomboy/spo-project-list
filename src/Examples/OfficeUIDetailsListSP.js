import React, { Component } from 'react';
import pnp, { Web } from 'sp-pnp-js';

import {
    DetailsList,
    DetailsListLayoutMode,
} from 'office-ui-fabric-react/lib/DetailsList';

// GET /_api/web/lists/getByTitle('Tasks')/items(1)
pnp.sp.web.lists.getByTitle('ProjectRegistry').items.getById(1).get().then((r) => {
    //   const names = {
    //     completedDate: 'sdin',
    //   };
    //   d = r[names.completedDate];
    console.log(r);
});


const site = new Web('https://stateca.sharepoint.com/sites/Projects/');

// site.lists.getByTitle('_ProjectRegistry').get().then(r => {
//     console.log('pias thing she just did: ', r);
// });


const names = {
    id: 'ID',
    title: 'Title',
    documentVersion: 'calb',
    createdDate: 'sdin',
    completedDate: 'w95f',
};


// const items = [
//     {
//         title: 'Title 1',
//         version: '1',
//     },
//     {
//         title: 'Title 2',
//         version: '21',
//     },
//     {
//         title: 'Title 3',
//         version: '13',
//     },
// ];

const columns = [
    {
        key: names.id,
        name: 'ID',
        fieldName: names.id,
        isResizable: true,
    },
    {
        key: names.title,
        name: 'Title',
        fieldName: names.title,
        isResizable: true,
    },
    {
        key: names.documentVersion,
        name: 'Document Version',
        fieldName: names.documentVersion,
        isResizable: true,
    },
    {
        key: names.createdDate,
        name: 'Created Date',
        fieldName: names.createdDate,
        isResizable: true,
    },
    {
        key: names.completedDate,
        name: 'Completed Date',
        fieldName: names.completedDate,
        isResizable: true,
    },
];


class OfficeUIDetailsListSP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        // SAME SITE:
        // pnp.sp.web.lists.getByTitle("ProjectRegistry").items.get()
        //     .then((items) => {
        //         this.setState({ items });
        //     });

        // OTHER SITE:
        site.lists.getByTitle('_ProjectRegistry').items.get()
            .then((items) => {
                this.setState({ items });
            });
    }

    render() {
        return (
            <DetailsList
                items={this.state.items}
                columns={columns}
                layoutMode={DetailsListLayoutMode.fixedColumns}
            />
        );
    }
}

export default OfficeUIDetailsListSP;