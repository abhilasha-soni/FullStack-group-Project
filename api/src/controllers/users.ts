// product controller
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import UserServices from "../services/users";
import User, { UserDocument } from "../models/User";
import { BadRequestError } from "../helpers/apiError";

export const createUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { firstName, lastName, email, password } = request.body;

  const salt = await bcrypt.genSalt(15);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userInformation = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashedPassword,
  });

  try {
    const userCreate = await UserServices.createUserService(userInformation);
    response.status(201).json(userCreate);
  } catch (error) {
    next(error);
  }
};

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const logInWithPassword = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const userData = await UserServices.findUserByEmail(request.body.email);
    if (!userData) {
      response
        .status(403)
        .json({ message: "User do not have account yet. Create one!" });
      return;
    }

    // Check if the user is blocked
    if (userData.blocked) {
      return response
        .status(403)
        .json({
          message: "Your account is blocked. Contact the administrator.",
        });
    }

    //Check for password
    const isPasswordMatch = await bcrypt.compare(
      request.body.password,
      userData.password
    );

    if (!isPasswordMatch) {
      return response
        .status(401)
        .json({ message: "Invalid credentials. Password does not match." });
    }
    const token = jwt.sign(
      {
        email: userData.email,
        _id: userData._id,
        firstName: userData.firstName,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    response.status(200).json({ userData, token });
  } catch (error) {
    next(error);
  }
};

// Update user inforamtion
export const updateUserController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const update = request.body;
    const userId = request.params.id;
    const updatedUser = await UserServices.updateUser(userId, update);
    response.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

//get all users
export const getAllUsers = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const users = await UserServices.getAllUserService();
    response.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const blockUserController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const userId = request.params.id;
    const user = await UserServices.blockUserByService(userId);
    response.status(200).json({ message: "User blocked successfully", user });
  } catch (error) {
    next(error);
  }
};

export const unblockUserController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const userId = request.params.id;
    const user = await UserServices.unblockUserService(userId);
    response.status(200).json({ message: "User unblocked successfully", user });
  } catch (error) {
    next(error);
  }
};
export const googleAuthenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = req.user as UserDocument;
    console.log("user", userData);
    const token = jwt.sign(
      {
        // first name + last name
        email: userData.email,
        _id: userData._id,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    if (!userData) {
      res.json({ message: "can't find user with this email" });
      return;
    } else {
      res.json({ token, userData });
    }
  } catch (error) {
    console.log("err", error);
    next(error);
  }
};
