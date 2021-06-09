import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const options = {
  useFindAndModify: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.DB_CONNECT, options).then(() => {
    console.log('Db connection successful');
}).catch(() => {
    console.log('Db connection failed');
});
