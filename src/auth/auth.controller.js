import User from "./auth.modal";
import { authUtils } from "./auth.utils";
import Response from "../utils/response";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import dot from "dotenv";

dot.config({ silent: process.env.NODE_ENV === 'production' });

const userController = {
  register: async (req, res) => {
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send("email exists");
  
    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
  
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName, 
      email: req.body.email, 
      password: hashPassword, 
    });
    
    try {
      const savedUser = await user.save();
      res.send({ user: savedUser._id });
    } catch (err) {
      res.status(400).send(err);
    }
  }
  ,
  login: async (req, res) => {
    const user = await authUtils.findByEmail(req.body.email);

    if (!user) {
      return Response(res, 400, "Sign Up to continue");
    }

    const validUser = await authUtils.comparePassword(
      req.body.password,
      user.password
    );

    if (!validUser) {
      return Response(res, 401, "Email or Password invalid");
    }

    user.password = undefined;

    const token = await jwt.sign(
      { user: user._id, userRole: user },
      process.env.JWT_KEY
    );

    console.log(token);

    return Response(res, 200, { user, token });
  },
};

export default userController;
