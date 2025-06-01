import mongoose, { Schema, model } from 'mongoose';

export interface IReview {
  state: string;
  user: string;
  rating: number;
  comment: string;
  date?: Date;
}

const reviewSchema = new Schema<IReview>(
  {
    state: { type: String, required: true },
    user: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

export const ReviewModel = model<IReview>('Review', reviewSchema);
