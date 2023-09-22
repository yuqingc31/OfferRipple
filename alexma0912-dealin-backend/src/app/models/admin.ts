import mongoose, { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const schema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  message: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Notification',
    },
  ],
});

schema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 10);
};

schema.methods.validatePassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

export default model('Admin', schema);
