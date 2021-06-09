import express from "express";
import parcelModal from "./models/parcel.model";
import parcelController from "./controllers/parcelController";
import Response from "./utils/response";

const router = express.Router();

router.get("/parcels", parcelController.getParcels);
router.get("/parcels/:id", parcelController.getById);
router.post("/parcels", parcelController.createParcel);
router.patch('/parcels/:id/edit', parcelController.updateParcel)
router.patch("/parcels/:id/cancel", parcelController.cancelParcel);

// todo
// get parcel from logged in user

export default router;
