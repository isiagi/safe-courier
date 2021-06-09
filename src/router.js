import express from 'express'
import parcelModal from './models/parcel.model'
import parcelController from './controllers/parcelController'
import Response from './utils/response'

const router = express.Router()

router.get('/parcels', parcelController.getParcels)
router.get('/parcel/:id', (req, res) =>{
    parcelModal.findOne({_id: id},(err, result) => {
        if(err){
            Response(res, 400, err)
        }
        return Response(res, 200, result)
    })

})

export default router