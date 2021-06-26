import parcelModal from '../models/parcel.model'
import Response from '../utils/response'
import {EmailTransporter} from '../middleware/nodemailer'

const parcelController = {

    getParcels: (req, res) => {
        const data = !req.all ? req.all : req.parcel
        return Response(res, 200, data)
    },
    getById: (req, res) =>{
        return Response(res, 200, req.parcel)
    },
    createParcel:  (req, res) => {
        req.body.userId = req.user.user
        parcelModal.create(req.body, (err, result) => {
            if (err) {
                return Response(res, 400, err)
            }
            return Response(res, 200, result)
        })
    },
    updateParcel: (req, res) => {
        parcelModal.updateOne({_id: req.params.id}, req.body, async(err, result) => {
            if(err){
                Response(res, 400, err)
            }
            if(req.user.userRole.userType === 'admin'){
               await EmailTransporter(req.user.userRole.email)
            }
            return Response(res, 200, "Parcel successful updated")
        })
    },
    cancelParcel: (req, res) => {
        parcelModal.findOneAndUpdate(
          { _id: req.params.id },
          { $set: { status: "canceled" } },
          { new: true },
          (err, result) => {
            if (err) {
              Response(res, 400, err);
            }
            return Response(res, 200, result);
          }
        );
      }
  
}

export default parcelController