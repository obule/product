import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: [100, 'Name should not exceed 100 characters'],
  },
  description: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: [1000, 'Description should not exceed 1000 characters'],
  },
  price: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, 'category should not exceed 100 characters'],
  },
  imageName: {
    type: String,
    trim: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
}, {timestamps: true});

ProductSchema.statics = {
  createProduct(args) {
    return this.create({
      ...args,
    });
  },
  listProducts({ skip = 0, limit = 5 } = {}) {
    return this.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
  },
};

export default mongoose.model('Product', ProductSchema);
