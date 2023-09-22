/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import Content from './Content';
import { ListItem } from '../PageContent/Content/Lists/ListTypes';
import { PostContainer } from './PageContent.styles';
import Box from '@mui/material/Box';

interface ContentProps {
  userid?: string | undefined;
}

interface UserData {
  posts?: string[] | undefined;
}

const PageContent = ({ userid }: ContentProps) => {
  const [postLists, setPostLists] = useState<ListItem[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataResponse = await axios.get(`${BACKEND_URL}/api/v1/users/${userid}`);
        const userData: UserData = userDataResponse.data;
        const postIdsRAW = userData.posts;
        const postIds = postIdsRAW?.reverse();

        if (!postIds || postIds.length === 0) {
          setPostLists([]);
          return;
        }

        const postListPromises = postIds.map(async (postId: string) => {
          const postDetailsResponse = await axios.get(
            `${BACKEND_URL}/api/v1/posts/details/${postId}`
          );
          return postDetailsResponse.data;
        });

        const resolvedPostList = await Promise.all(postListPromises);
        setPostLists(resolvedPostList);
      } catch (error) {
        console.error('Error fetching data:', error);
        setPostLists([]);
      }
    };

    fetchData();
  }, [userid]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition >= 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box>
      <PostContainer>
        <Content postLists={postLists} />
      </PostContainer>
    </Box>
  );
};

export default PageContent;
