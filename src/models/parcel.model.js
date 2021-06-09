import mongoose, {Schema} from 'mongoose'

const parcelSchema = new Schema({
    description: String,
    userId: String,
    status:{
        type: String,
        enum: ['delievered', 'canceled', 'delievering']
    },
    pick: String,
    destination: String
})

const Parcel = mongoose.model('parcel', parcelSchema)

export default Parcel