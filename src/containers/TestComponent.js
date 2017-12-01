import React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
// import { Label } from 'office-ui-fabric-react/lib/Label';

export class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            primary: true,
        }
    }

    alertClicked = () => {
        alert('clicked...');
        this.setState({ primary: !this.state.primary });
    }

    render() {
        const checked = false;
        const disabled = false;

        return (
            <div className='ms-BasicButtonsTwoUp'>
                <div>
                    {/* <Label>Standard</Label>
                    <DefaultButton
                        disabled={disabled}
                        checked={checked}
                        text='Button'
                    /> */}
                </div>
                <DefaultButton
                    primary={this.state.primary}
                    disabled={disabled}
                    checked={checked}
                    text='This is Text'
                    onClick={this.alertClicked}
                />
            </div>
        );
    }
}

export default TestComponent;
