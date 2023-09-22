import { Schema, model } from 'mongoose';

const schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  security_question: {
    type: String,
    required: true,
  },
  security_answer: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model('ResetPassword', schema);
