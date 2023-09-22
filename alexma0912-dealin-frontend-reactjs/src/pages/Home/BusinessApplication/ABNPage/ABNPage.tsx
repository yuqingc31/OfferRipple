import React, { ReactNode } from 'react';
import { StyledABNPage } from './styledABNPage';

type ABNPageProps = {
  children: ReactNode;
};

const ABNPage = ({ children }: ABNPageProps) => {
  return <StyledABNPage>{children}</StyledABNPage>;
};

export default ABNPage;
