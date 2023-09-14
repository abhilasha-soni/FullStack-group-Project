// product services
import { NotFoundError } from "../helpers/apiError";
import User, { UserDocument } from "../models/User";

// talk/communicate to database
const createUserService = async (user: UserDocument): Promise<UserDocument> => {
  return await user.save();
};

const findUserByEmail = async (userEmail: string): Promise<UserDocument> => {
  const foundUser = await User.findOne({ email: userEmail });
  if (!foundUser) {
    throw new NotFoundError(`${userEmail} not found`);
  }
  return foundUser;
};

const updateUser = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument> => {
  const foundUser = await User.findByIdAndUpdate(userId, update, {
    new: true,
  });

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`);
  }
  return foundUser;
};
export const getAllUserService = async (): Promise<UserDocument[]> => {
  return await User.find();
};

export const blockUserByService = async (
  userId: string
): Promise<UserDocument | null> => {
  const user = await User.findById(userId);

  if (!user) {
    throw new NotFoundError("User not found");
  }

  user.blocked = true;
  return await user.save();
};

export const unblockUserService = async (
  userId: string
): Promise<UserDocument | null> => {
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError("User not found");
  }
  user.blocked = false;
  return await user.save();
};

const findOrCreate = async (
  payload: Partial<UserDocument>
): Promise<UserDocument> => {
  const result = await User.findOne({ email: payload.email });
  // find user by email from database
  if (result) {
    return result;
  } else {
    const user = new User({
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      password:payload.password
    });
    const createdUser = await user.save();
    return createdUser;
  }
};

export default {
  createUserService,
  findUserByEmail,
  updateUser,
  getAllUserService,
  blockUserByService,
  unblockUserService,
  findOrCreate
};
