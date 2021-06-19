import userModel from "./auth.modal";
import bcrypt from "bcrypt";
import jwt, { verify } from "jsonwebtoken";
import Response from "../utils/response";
import dot from "dotenv";

dot.config({ silent: process.env.NODE_ENV === 'production' });

export const authUtils = {
  findByEmail: async (email) => {
    return await userModel.findOne({ email });
  },
  createToken: async (userData) => {
    await jwt.sign({ userData }, process.env.JWT_KEY);
  },
  hashPassword: async (password, gen) => {
    return await bcrypt.hash(password, gen);
  },
  getToken: (req) => {
    const header = req.headers.authorization;
    const token =
      header && header.match("Bearer") ? header.split(" ")[1] : header;
    return req.params.token || token;
  },
  verifyToken: async (token) => {
    return await jwt.verify(token, process.env.JWT_KEY);
  },
  comparePassword: async (password, hash) => {
    return await bcrypt.compare(password, hash);
  },
};

export const verifyToken = (req, res, next) => {
  const token = authUtils.getToken(req);

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) {
      return Response(res, 401, err.message);
    }
  
    req.user = user;
    return next();
  });
};



