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
}).catch((error) => {
    console.log({'Db connection failed': error});
});

const db = mongoose.connection

export default db