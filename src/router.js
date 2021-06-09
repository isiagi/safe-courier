import express from 'express'
import parcelModal from './models/parcel.model'
import parcelController from './controllers/parcelController'
import Response from './utils/response'

const router = express.Router()

router.get('/parcels', parcelController.getParcels)
router.get('/parcel/:id', parcelController.getById)


export default router