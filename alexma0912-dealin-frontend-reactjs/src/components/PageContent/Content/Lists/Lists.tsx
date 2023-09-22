// import { useState, useEffect } from 'react';
// import { ListItem } from './ListTypes';
import { ListContainer } from './Lists.styles';
import { Dispatch, SetStateAction } from 'react';
import PostList from './PostList';
import { Post } from '../../../../pages/Home/LandingPage/LandingPage';

export interface ListProps {
  postList: Post[];
  totalPages: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Lists = ({ postList }: ListProps) => {
  return (
    <ListContainer>
      {postList.length !== 0 &&
        postList.map((list) => <PostList key={list._id} list={list} id={list._id} />)}
    </ListContainer>
  );
};

export default Lists;
