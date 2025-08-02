import mongoose from 'mongoose';

export const connectDB=async(uri)=>{
  await  mongoose.connect(uri,{
        dbName:"HospitalDB"
    }).then((c)=>console.log(`DB connected successfully ${c.connection.host}`))
    .catch((e)=>console.log(e)
    )
}
