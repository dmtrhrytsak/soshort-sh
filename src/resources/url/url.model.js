import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const urlSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    default: () => nanoid(4).toLowerCase(),
  },
});

export default mongoose.model('URL', urlSchema);
