import React from 'react';
import { Sidebar, ImageContainer, Image, Div } from './SubPageSidebar.styles';

const SubPageSidebar: React.FC = () => {
  return (
    <Sidebar>
      <ImageContainer>
        <Div>
          <Image src={require('./GoogleAdPhoto.jpeg')} alt="Google Ad1" />
        </Div>
      </ImageContainer>
      <ImageContainer>
        <Div>
          <Image src={require('./GoogleAdPhoto.jpeg')} alt="Google Ad2" />
        </Div>
      </ImageContainer>
      <ImageContainer>
        <Div>
          <Image src={require('./GoogleAdPhoto.jpeg')} alt="Google Ad3" />
        </Div>
      </ImageContainer>
      <ImageContainer>
        <Div>
          <Image src={require('./GoogleAdPhoto.jpeg')} alt="Google Ad4" />
        </Div>
      </ImageContainer>
    </Sidebar>
  );
};

export default SubPageSidebar;
