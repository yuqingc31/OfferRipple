import React, { ReactNode } from 'react';
import { StyledABNContainer } from './components/styledABNContainer';

type ABNContainerProps = {
  children: ReactNode;
};

const ABNContainer = ({ children }: ABNContainerProps) => {
  return <StyledABNContainer>{children}</StyledABNContainer>;
};

export default ABNContainer;
