import React from 'react';
import keyBy from 'lodash.keyby';
import { Link } from 'office-ui-fabric-react/lib/Link';

import { renderMultiLine } from './string';
import { formatDate } from './date';


export const types = {
    url: 'url',
    title: 'title',
    mutliLine: 'multiLine',
    person: 'person',
    date: 'date',
};

export function mapColumns(fields, keys, users) {
    const mappedUsers = keyBy(users, 'Id');

    return keys.map((key) => {
        const field = fields[key];
        return ({
            key: field.key,
            fieldName: field.key,
            name: field.name,
            isResizable: true,
            minWidth: 100,
            maxWidth: 200,
            data: {
                type: field.type,
            },
            onRender: (item, index, column) => {
                const selected = item[column.key];
                switch (column.data.type) {
                    case types.url:
                        return <Link href={selected.Url} target={'_blank'} data-selection-invoke>{selected.Description}</Link>;
                    case types.mutliLine:
                        return renderMultiLine(selected);
                    case types.person:
                        return <Link href={`mailto:${mappedUsers[selected].Email}`} data-selection-invoke>{mappedUsers[selected].Title}</Link>;
                    case types.date:
                        return <span>{formatDate(selected)}</span>;
                    case types.title:
                        return <span>{`${selected} (${item[fields.acronym.key]})`}</span>;
                    default:
                        return <span>{String(selected)}</span>;
                }
            },
        });
    });
}
