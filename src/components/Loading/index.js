import React from 'react';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

import Wrapper from './Wrapper';


const Loading = props => (
    <Wrapper><Spinner {...props} /></Wrapper>
);

Loading.defaultProps = {
    size: SpinnerSize.large,
    label: 'Loading...',
    ariaLive: 'assertive',
};

export default Loading;
