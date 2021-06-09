import mongoose, {Schema} from 'mongoose'

const authSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum : ['user','admin'],
        default: 'user'
    },
})

const Auth = mongoose.model('user', authSchema)

export default Auth