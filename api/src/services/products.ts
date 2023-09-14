import Product, { ProductDocument } from "./../models/Product";
import mongoose from "mongoose";
import { NotFoundError } from "../helpers/apiError";


export const createProductService = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return await product.save();
};

export const getProductListService = async (): Promise<ProductDocument[]> => {
  return await Product.find();
};

export const getProductByIdService = async (
  productId: string
): Promise<ProductDocument> => {
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new NotFoundError(`Invalid product ID: ${productId}`);
  }
  const foundProduct = await Product.findById(productId);
  if (!foundProduct) {
    throw new NotFoundError(`Product not found with ID: ${productId}`);
  }
  return foundProduct;
};

export const editproductservice = async (
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument> => {
  const foundProduct = await Product.findByIdAndUpdate(productId, update, {
    new: true,
  });
  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`);
  }
  return foundProduct;
};

