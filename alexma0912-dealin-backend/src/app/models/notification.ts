import mongoose, { Schema, model } from 'mongoose';

const schema: Schema = new Schema(
  {
    send_by: {
      type: mongoose.Types.ObjectId,
      ref: 'Admin',
    },

    send_to: [
      {
        type: mongoose.Types.ObjectId,
        ref: ['Admin', 'User'],
      },
    ],

    category: {
      type: String,
      enum: ['post', 'comment', 'reply', 'message', 'approve', 'reject', 'other'],
      required: true,
    },

    title: {
      type: String,
      required: true,
      length: 128,
    },

    is_read: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);
export default model('Notification', schema);
