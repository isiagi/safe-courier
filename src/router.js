import express from "express";
import parcelController from "./controllers/parcelController";
import authController from "./auth/auth.controller"
import { verifyToken } from "./auth/auth.utils"
import {getById, authGet, getAll, scopeParcel, getByUser} from "./middleware/parcel.middleware"

const router = express.Router();

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get("/parcels", getAll, verifyToken ,scopeParcel, getByUser, parcelController.getParcels);
router.get("/parcels/:id",getById, verifyToken, authGet, parcelController.getById);
router.post("/parcels", verifyToken, parcelController.createParcel);
router.patch('/parcels/:id/edit', verifyToken, parcelController.updateParcel)
router.patch("/parcels/:id/cancel", parcelController.cancelParcel);

// todo
// get parcel from logged in user

export default router;
