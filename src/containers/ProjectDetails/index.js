import React, { PureComponent } from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { List } from 'office-ui-fabric-react/lib/List';

import Item from './Item';
import Items from './Items';


class ProjectDetails extends PureComponent {
    onRenderItem = (column, index) => {
        const { item } = this.props;
        return (
            <Items>
                <Item>{column.name}</Item>
                <Item>{column.onRender(item, index, column)}</Item>
            </Items>
        );
    }

    render() {
        const {
            title,
            columns,
            hidden,
            onDismiss,
        } = this.props;

        const dialogProps = {
            hidden,
            onDismiss,
            dialogContentProps: {
                title,
                type: DialogType.normal,
            },
        };

        const itemsProps = {
            items: columns,
            onRenderCell: this.onRenderItem,
        };

        const closeBtnProps = {
            text: 'Close',
            onClick: onDismiss,
        };

        return (
            <Dialog {...dialogProps}>
                <List {...itemsProps} />

                <DialogFooter>
                    <DefaultButton {...closeBtnProps} />
                </DialogFooter>
            </Dialog>
        );
    }
}

export default ProjectDetails;