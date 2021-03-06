import React from 'react';
import styled from 'styled-components';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;


export class EmptyMessage extends React.PureComponent {
  render() {
    const {
        message, 
        buttonText, 
        buttonIcon, 
        onClick, 
    } = this.props;

    const buttonProps = {
      onClick,
      text: buttonText,
      iconProps: {
        iconName: buttonIcon,
      },
    };

    return (
      <Wrapper>
        <p>{message}</p>
        {
          buttonText &&
            <DefaultButton {...buttonProps} />
        }
      </Wrapper>
    );
  }
}


export default EmptyMessage;