import mongoose, {Schema} from 'mongoose'

const parcelSchema = new Schema({
    title: String,
    description: String,
    weight: String,
    userId: String,
    status:{
        type: String,
        enum: ['pending','delievered', 'canceled', 'delievering'],
        default: 'pending'
    },
    pick: String,
    destination: String,
    email: String,
})

const Parcel = mongoose.model('parcel', parcelSchema)

export default Parcel