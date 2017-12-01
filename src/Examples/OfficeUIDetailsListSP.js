import React, { Component } from 'react';
import pnp from 'sp-pnp-js';

import {
    DetailsList,
    DetailsListLayoutMode,
} from 'office-ui-fabric-react/lib/DetailsList';

// GET /_api/web/lists/getByTitle('Tasks')/items(1)
pnp.sp.web.lists.getByTitle("ProjectRegistry").items.getById(1).get().then(r => {
    //   const names = {
    //     completedDate: 'sdin',
    //   };
    //   d = r[names.completedDate];
    console.log(r)
});

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
        key: 'ID',
        name: 'ID',
        fieldName: names.id,
        isResizable: true,
    },
    {
        key: 'title',
        name: 'Title',
        fieldName: names.title,
        isResizable: true,
    },
    {
        key: 'documentVersion',
        name: 'Document Version',
        fieldName: names.documentVersion,
        isResizable: true,
    },
    {
        key: 'createdDate',
        name: 'Created Date',
        fieldName: names.createdDate,
        isResizable: true,
    },
    {
        key: 'completedDate',
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
        pnp.sp.web.lists.getByTitle("ProjectRegistry").items.get()
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