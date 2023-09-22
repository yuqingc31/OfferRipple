import express from 'express';
import {
  getAllPosts,
  unbanPost,
  banPost,
  createNewPost,
  getPostById,
  getFilteredPosts,
  getSubscribedPosts,
  updatePost,
  getPost,
  getPostPhoto,
} from '../../controllers/posts';
import { authGuard } from '../../middleware/authGuard';

const postRouter = express.Router();
postRouter.use(express.json());

//API_PREFIX=/api/v1
//get all posts
postRouter.get('/posts', getAllPosts);

//publish new post
postRouter.post('/posts', authGuard, createNewPost);

//reset post deactivate status to false - post not banned
postRouter.put('/posts/unban/:id', authGuard, unbanPost);

//update post deactivate status to true - post banned
postRouter.put('/posts/banned/:id', authGuard, banPost);

//get single post data by id
postRouter.get('/posts/:id', getPostById);

//get filtered posts
postRouter.post('/posts/filter', getFilteredPosts);

//get subscribed authors' post
postRouter.post('/posts/filter/subscribe', authGuard, getSubscribedPosts);

//update post details by id (only title, content, videoURL)
postRouter.put('/posts/update/:id', authGuard, updatePost);

//get post details by id
postRouter.get('/posts/details/:id', getPost);

//get post photo by id
postRouter.get('/posts/photo/:id', getPostPhoto);

export default postRouter;
