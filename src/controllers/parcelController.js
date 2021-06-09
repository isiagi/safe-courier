import parcelModal from '../models/parcel.model'
import Response from '../utils/response'

const parcelController = {
    getParcels: (req, res) => {
        parcelModal.find({},(err, result) => {
            if(err){
               return  Response(res, 400, err)
            }
            if(result.length === 0){
                return Response(res, 400, 'No Parcel Availiable')
            }
            Response(res, 200, result)
        })
    },
    getById: (req, res) =>{
        parcelModal.findOne({_id: req.params.id},(err, result) => {
            if(err){
                Response(res, 400, err)
            }
            return Response(res, 200, result)
        })
    
    }
}

export default parcelController