import express, { Request, Response } from 'express';
import { routes } from './routes';


 const app = express()

 const PORT = process.env.PORT || 4000
app.use('/admin',routes.AdminRoutes)
app.use('/vendor',routes.VendorRoutes)
 // api health route 

  app.use('/api-health',(req:Request ,res:Response)=>{
    res.status(200).json({suceess:true,message:'api health is good'})
 })


 app.listen(PORT,()=>{
    console.log(` server is up and accessing PORT: ${PORT}`)
 })