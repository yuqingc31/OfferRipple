import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    buyer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    dcoin_amount: {
      type: Number,
    },
    payment_amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

export default model('Recharge', schema);
