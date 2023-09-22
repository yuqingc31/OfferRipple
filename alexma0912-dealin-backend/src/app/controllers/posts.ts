import Post from '../models/post';
import { Request, Response } from 'express';
import postSchemaValidate from '../validators/postValidation';
import User from '../models/user';
import Notification from '../models/notification';
import axios from 'axios';
import config from '../config/index';
import mongoose from 'mongoose';
import imageData from './NOphoto';

interface PostType {
  _id: string;
  author: string;
  image: string[];
  videoURL?: string;
  promotion_end_date: string;
  title: string;
  category: string;
  business_address: string;
  discount: number;
  content: string;
  created_at: string;
  postal_code: string;
}

interface UserType {
  _id: string;
  avatar: string;
  created_at: string;
  dcoin: number;
  email: string;
  is_banned: boolean;
  is_deactivate: boolean;
  updated_at: string;
  username: string;
  phone_number: string;
  posts: PostType[];
}

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().populate('author').exec();
    const sortedPosts = posts.reverse();

    if (posts.length === 0) {
      res.status(404);
      res.json({ message: "Couldn't get all posts details." });
      return;
    }
    if (Object.keys(req.query).length === 0) {
      res.json(sortedPosts);
      res.status(200);
      return;
    }
    if (req.query && req.query.search === '') {
      const totalPages = Math.ceil(sortedPosts.length / 10);
      const pageNumber = Number(req.query.page);
      const pageStatIndex = pageNumber * 10 - 10;
      const pageEndIndex = pageNumber * 10;
      const slicedPosts = sortedPosts.slice(pageStatIndex, pageEndIndex);
      res.status(201).json({ slicedPosts, totalPages });
      return;
    }
    if (req.query && req.query.search !== '') {
      const searchKey = req.query.search as string;
      const regex = new RegExp(searchKey, 'i');
      const searchPosts = await Post.find({ title: regex }).populate('author').exec();
      const sortedSearchPosts = searchPosts.reverse();
      const totalPages = Math.ceil(sortedSearchPosts.length / 10);
      const pageNumber = Number(req.query.page);
      const pageStatIndex = pageNumber * 10 - 10;
      const pageEndIndex = pageNumber * 10;
      const slicedPosts = sortedSearchPosts.slice(pageStatIndex, pageEndIndex);
      res.status(201).json({ slicedPosts: slicedPosts, totalPages: totalPages });
      return;
    }
  } catch (error) {
    res.status(404).json({ error: 'Fail to get all posts' });
  }
};

export const getFilteredPosts = async (req: Request, res: Response) => {
  const { customTextField, formSelect, selectedValue, checkCurrent, page, geoInfo } = req.body;

  if (!geoInfo) {
    const posts = await Post.find().populate('author').exec();
    const sortedPosts = posts.reverse();
    const getUnbanPosts = sortedPosts.filter((post) => post.banned === false);

    let filterResult = getUnbanPosts;
    if (customTextField !== '') {
      filterResult = filterResult.filter((post) => {
        return post.title?.toLowerCase()?.includes(customTextField.toLowerCase());
      });
    }
    if (formSelect !== '') {
      filterResult = filterResult.filter((post) => {
        return post.category?.includes(formSelect);
      });
    }
    if (selectedValue !== null) {
      filterResult = filterResult.filter((post) => {
        const businessAddresses = post.business_address?.split(',') || [];
        return businessAddresses.some((address: string) => {
          return address.includes(selectedValue.suburb) && address.includes(selectedValue.state);
        });
      });
    }
    // if (selectedValue === null) {
    //   return res.status(201).json({ slicedPosts: [], totalPages: page, page });
    // }
    const totalPages = Math.ceil(filterResult.length / 12);
    const pageNumber = Number(page);
    const pageStatIndex = pageNumber * 12 - 12;
    const pageEndIndex = pageNumber * 12;
    const slicedPosts = filterResult.slice(pageStatIndex, pageEndIndex);
    res.status(201).json({ slicedPosts, totalPages, page });
    return;
  }

  if (!checkCurrent) {
    const posts = await Post.find().populate('author').exec();
    const sortedPosts = posts.reverse();
    const getUnbanPosts = sortedPosts.filter((post) => post.banned === false);

    let filterResult = getUnbanPosts;
    if (customTextField !== '') {
      filterResult = filterResult.filter((post) => {
        return post.title?.toLowerCase()?.includes(customTextField.toLowerCase());
      });
    }
    if (formSelect !== '') {
      filterResult = filterResult.filter((post) => {
        return post.category?.includes(formSelect);
      });
    }
    if (selectedValue !== null) {
      filterResult = filterResult.filter((post) => {
        const businessAddresses = post.business_address?.split(',') || [];
        return businessAddresses.some((address: string) => {
          return address.includes(selectedValue.suburb) && address.includes(selectedValue.state);
        });
      });
    }
    const totalPages = Math.ceil(filterResult.length / 12);
    const pageNumber = Number(page);
    const pageStatIndex = pageNumber * 12 - 12;
    const pageEndIndex = pageNumber * 12;
    const slicedPosts = filterResult.slice(pageStatIndex, pageEndIndex);
    res.status(201).json({ slicedPosts, totalPages, page });
    return;

    // const posts = await Post.find().populate('author').exec();
    // const sortedPosts = posts.reverse();
    // const getUnbanPosts = sortedPosts.filter((post) => post.banned === false);
    // let filterResult = getUnbanPosts.filter((post) => post.postal_code?.includes(geoInfo));

    // if (customTextField !== '') {
    //   filterResult = filterResult.filter((post) => {
    //     return post.title?.toLowerCase()?.includes(customTextField.toLowerCase());
    //   });
    // }
    // if (formSelect !== '') {
    //   filterResult = filterResult.filter((post) => {
    //     return post.category?.includes(formSelect);
    //   });
    // }
    // if (selectedValue !== null) {
    //   filterResult = filterResult.filter((post) => {
    //     const businessAddresses = post.business_address?.split(',') || [];
    //     return businessAddresses.some((address: string) => {
    //       return address.includes(selectedValue.suburb) && address.includes(selectedValue.state);
    //     });
    //   });
    // }
    // const totalPages = Math.ceil(filterResult.length / 12);
    // const pageNumber = Number(page);
    // const pageStatIndex = pageNumber * 12 - 12;
    // const pageEndIndex = pageNumber * 12;
    // const slicedPosts = filterResult.slice(pageStatIndex, pageEndIndex);
    // res.status(201).json({ slicedPosts, totalPages, page });
    // return;
  }

  if (checkCurrent) {
    const posts = await Post.find().populate('author').exec();
    const sortedPosts = posts.reverse();
    const getUnbanPosts = sortedPosts.filter((post) => post.banned === false);
    let filterResult = getUnbanPosts.filter((post) => post.postal_code?.includes(geoInfo));

    if (customTextField !== '') {
      filterResult = filterResult.filter((post) => {
        return post.title?.toLowerCase()?.includes(customTextField.toLowerCase());
      });
    }
    if (formSelect !== '') {
      filterResult = filterResult.filter((post) => {
        return post.category?.includes(formSelect);
      });
    }
    if (selectedValue !== null) {
      filterResult = filterResult.filter((post) => {
        const businessAddresses = post.business_address?.split(',') || [];
        return businessAddresses.some((address: string) => {
          return address.includes(selectedValue.suburb) && address.includes(selectedValue.state);
        });
      });
    }
    const totalPages = Math.ceil(filterResult.length / 12);
    const pageNumber = Number(page);
    const pageStatIndex = pageNumber * 12 - 12;
    const pageEndIndex = pageNumber * 12;
    const slicedPosts = filterResult.slice(pageStatIndex, pageEndIndex);
    res.status(201).json({ slicedPosts, totalPages, page });
    return;
  }
};

export const getSubscribedPosts = async (req: Request, res: Response) => {
  const { id, customTextField, formSelect, selectedValue, checkCurrent, page, geoInfo } = req.body;
  const followingPostsList: PostType[] = [];
  const currentUser = await User.findById(id).populate('following').exec();
  currentUser?.following.forEach((following: UserType) => {
    followingPostsList.push(...following.posts);
  });
  const posts = await Post.find().populate('author').exec();
  const sortedPosts = posts.reverse();
  const getUnbanPosts = sortedPosts.filter((post) => post.banned === false);
  const subscribedPosts = getUnbanPosts.filter((post) => {
    return followingPostsList.some((followingPost) => {
      const followingPostId = followingPost._id?.toString();
      const postId = post._id?.toString();
      return followingPostId === postId;
    });
  });
  let filterResult = subscribedPosts;
  if (customTextField !== '') {
    filterResult = filterResult.filter((post) => {
      return post.title?.includes(customTextField);
    });
  }

  if (formSelect !== '') {
    filterResult = filterResult.filter((post) => {
      return post.category?.includes(formSelect);
    });
  }

  if (selectedValue !== null) {
    filterResult = filterResult.filter((post) => {
      const businessAddresses = post.business_address?.split(',') || [];
      return businessAddresses.some((address: string) => {
        return address.includes(selectedValue.suburb) && address.includes(selectedValue.state);
      });
    });
  }
  if (checkCurrent) {
    filterResult = filterResult.filter((post) => post.postal_code === geoInfo);
  }

  const totalPages = Math.ceil(filterResult.length / 12);
  const pageNumber = Number(page);
  const pageStatIndex = pageNumber * 12 - 12;
  const pageEndIndex = pageNumber * 12;
  const slicedPosts = filterResult.slice(pageStatIndex, pageEndIndex);
  res.status(201).json({ slicedPosts, totalPages, page });
  return;
};

export const createNewPost = async (req: Request, res: Response) => {
  const {
    author,
    title,
    content,
    image,
    videoURL,
    discount,
    promotion_end_date,
    category,
    business_address,
    banned = false,
  } = req.body;
  let postal_code = '0000';
  if (!author) {
    return res.status(404).json({ code: 0, error: 'new post data required' });
  }
  if (!title) {
    return res.status(404).json({ code: 1, error: 'new post title required' });
  }
  if (!content) {
    return res.status(404).json({ code: 2, error: 'new post content required' });
  }
  if (!image || image.length === 0) {
    return res.status(404).json({ code: 3, error: 'post image required' });
  }
  if (!discount || discount.length === 0) {
    return res.status(404).json({ code: 4, error: 'post discount required' });
  }
  if (!promotion_end_date) {
    return res.status(404).json({ code: 5, error: 'Promotion end date required' });
  }
  if (!category) {
    return res.status(404).json({ code: 6, error: 'post category required' });
  }
  if (!business_address) {
    return res.status(404).json({ code: 7, error: 'please select an address from address options' });
  }
  const api_key = config.google_map_api;
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${business_address}&key=${api_key}`,
    );
    const postalResult = response.data.results;
    if (postalResult.length > 0) {
      const addressComponent = postalResult[0].address_components;
      const postcodeObj = addressComponent.find((component: any) => component.types.includes('postal_code'));
      if (postcodeObj) {
        postal_code = postcodeObj.long_name;
      } else {
        return res.status(404).json({ code: 8, error: 'invalid address' });
      }
    } else {
      return res.status(404).send({ code: 8, error: 'Address not found.' });
    }
  } catch (error) {
    return res.status(404).send({ code: 8, error: 'Failed to fetch postcode.' });
  }
  try {
    const validateContent = {
      author,
      title,
      content,
      image,
      videoURL,
      discount,
      promotion_end_date,
      category,
      business_address,
      banned,
      postal_code,
    };
    const validated = await postSchemaValidate.validateAsync(validateContent);
    const dcoinUpdate = await User.findOneAndUpdate(
      { _id: author, dcoin: { $gte: 5 } },
      { $inc: { dcoin: -5 } },
      { new: true, upsert: false },
    );

    if (!dcoinUpdate) {
      return res.status(404).send({ code: 9, error: 'insufficient dcoins, please charge' });
    }
    const newPost = new Post(validated);
    const newPostCheck = await newPost.save();
    res.status(201).json(newPostCheck);
    await User.findByIdAndUpdate(author, {
      $push: { posts: newPostCheck._id },
    });
  } catch (error) {
    res.status(404).json({ error: 'fail to create new post' });
    console.log(error);
  }

  try {
    const notification = new Notification({
      send_by: '647b79c7f844fa6f3b688ed1',
      send_to: author,
      category: 'post',
      title: title,
    });
    await notification.save();

    const user = await User.findById(author).exec();
    user?.message.addToSet(notification);
    await user?.save();
  } catch (error) {
    res.status(404).json({ error: 'fail to send new notification' });
  }
};

export const unbanPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({ error: 'no post id found' });
  }
  try {
    const post = await Post.findByIdAndUpdate(id, { banned: false }, { new: true }).exec();
    res.status(201).json(post);
  } catch (error) {
    res.status(404).json({ error: 'fail to unban post' });
  }
};

export const banPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({ error: 'no post id found' });
  }
  try {
    const post = await Post.findByIdAndUpdate(id, { banned: true }, { new: true }).exec();
    res.status(201).json(post);
  } catch (error) {
    res.status(404).json({ error: 'fail to ban post' });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({ error: 'No post ID found' });
  }
  try {
    const post = await Post.findById(id).populate('author').exec();
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get post' });
  }
};

export const getPost = async (req: Request, res: Response) => {
  const { _id }: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
  const POST = await Post.findById(_id).exec();
  if (!POST) {
    res.status(404);
    res.json({ message: "Couldn't get post details." });
    return;
  }
  const post = {
    id: _id,
    author_name: POST.author,
    title: POST.title,
    content: POST.content,
    discount: POST.discount,
    deadline: POST.promotion_end_date,
    timestamp: POST.created_at,
    category: POST.category,
    tags: POST.discount,
    location: POST.business_address,
    videoURL: POST.videoURL,
  };
  console.log(post);
  res.json(post);
  res.status(200);
};

export const getPostPhoto = async (req: Request, res: Response) => {
  const { _id }: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
  try {
    const POST = await Post.findById(_id).exec();
    if (!POST) {
      res.status(404);
      res.json({ message: "Couldn't get post details." });
      return;
    }
    if (Array.isArray(POST.image) && POST.image.length > 0) {
      const firstImage = POST.image[0];
      return res.send(firstImage);
    } else {
      return res.json(imageData);
    }
  } catch (error) {
    console.error('Error retrieving user image:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({ error: 'No post ID found' });
  }
  const {
    title,
    content,
    videoURL,
  } = req.body;

  const updateData = {
    $set: {
      title: title,
      content: content,
      videoURL: videoURL,
    },
  };
  
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(201).json({ message: 'Post Details updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update post' });
  }
};
