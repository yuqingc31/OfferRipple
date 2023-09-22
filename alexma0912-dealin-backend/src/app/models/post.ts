// models/post.ts
import { Schema, model, Document } from 'mongoose';

// // Define a separate type for timestamps
// export interface ITimestamps {
//   created_at?: Date;
//   updated_at?: Date;
// }

// Define the schema for the Post model
const postSchema = new Schema<IPost>(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    image: {
      type: [String],
    },
    videoURL: {
      type: String,
    },
    discount: {
      type: String,
    },
    promotion_end_date: {
      type: Date,
    },
    category: {
      type: String,
    },
    business_address: {
      type: String,
    },
    postal_code: {
      type: String,
    },
    banned: {
      type: Boolean,
    },
  },
  // Include the timestamps type in the schema
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

// Define the Post interface extending Document and including ITimestamps
export interface IPost extends Document {
  author?: string;
  title?: string;
  content?: string;
  image?: string[];
  videoURL?: string;
  discount?: string;
  promotion_end_date?: string;
  category?: string;
  business_address?: string;
  banned?: boolean;
  created_at?: Date;
  updated_at?: Date;
  postal_code?: string;
}

// Create the model
const Post = model<IPost>('Post', postSchema);

export default Post;
