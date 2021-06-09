import express from 'express'
import parcelModal from './models/parcel.model'
import parcelController from './controllers/parcelController'

const router = express.Router()

router.get('/', parcelController.getParcels)

export default router