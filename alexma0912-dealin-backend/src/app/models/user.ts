import mongoose, { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const schema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      default: 'New User',
    },

    email: {
      type: String,
      // validate if the format is correct
      match: /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      trim: true,
      lowercase: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    phone_number: {
      type: String,
    },

    avatar: {
      type: String,
    },

    posts: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Post',
      },
    ],

    following: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    ],

    follower: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    ],

    message: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Notification',
      },
    ],

    dcoin: {
      type: Number,
      default: 25,
    },

    personal_question: {
      type: String,
    },

    personal_answer: {
      type: String,
    },

    is_deactivate: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.active;
        delete ret.__v;
      },
    },
  },
);

schema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 10);
};

schema.methods.validatePassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

export default model('User', schema);
