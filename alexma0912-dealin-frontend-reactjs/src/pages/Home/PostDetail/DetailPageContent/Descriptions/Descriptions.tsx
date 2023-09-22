import React from 'react';
import { DescriptionContainer } from './styledDescriptions';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

interface DescriptionProps {
  postId?: string;
  content?: string;
  title?: string;
  authorId?: string;
}

const EditWrapper = styled.div`
  height: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    margin-left: 1rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 1rem;
  }

  @media (min-width: 1024px) {
  }
`;

const StyledEditButton = styled.button`
  background-color: #f85c70;
  position: relative;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.9rem;
  line-height: 0.9rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  padding: 0 1.4rem;
  border-radius: 1.875rem;
  transition: all 500ms ease;
  cursor: pointer;
  margin-right: 1rem;
  top: -10px;
  z-index: 780;

  &:hover {
    background: #0d1927;
    box-shadow: 0 0.625rem 1.875rem 0 rgba(13, 25, 39, 0.3);
  }

  &:before {
    position: absolute;
    content: '';
    width: 0%;
    height: 100%;
    background: #0d1927;
    border-radius: 30px;
    left: 0px;
    top: 0px;
    z-index: -1;
    transition: all 500ms ease;

    ${EditWrapper}:hover & {
      width: 100%;
    }
  }

  @media (max-width: 64rem) {
    box-shadow: none;
  }
`;

const Description = ({ postId, content, authorId }: DescriptionProps) => {
  const navigate = useNavigate();

  let showButton = false;
  if (localStorage.getItem('id') !== null && localStorage.getItem('id') === authorId) {
    showButton = true;
  }
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  const handlePostClick = (postId: string) => {
    navigate(`/updatepost/${postId}`);
    setTimeout(scrollToTop, 100);
  };

  return (
    <DescriptionContainer>
      <div
        className="description-header"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <h3 className="Nunito-title">Description</h3>
        {showButton ? (
          <StyledEditButton onClick={() => handlePostClick(`${postId}`)}>
            Edit Post
          </StyledEditButton>
        ) : null}
      </div>
      <pre className="Quicksand-content">{content}</pre>
    </DescriptionContainer>
  );
};

export default Description;
