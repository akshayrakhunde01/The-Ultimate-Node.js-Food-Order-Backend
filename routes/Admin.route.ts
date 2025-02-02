import express, { Request, Response ,NextFunction} from 'express';

const router = express.Router()

router.get('/',(req:Request ,res:Response)=>{
    res.status(200).json({suceess:true,message:'Admin working'})
 })

//  router.post('/vendor',createVendor)

 router.get('/vendor/:id',()=>{

 })

 router.delete('/vendor/:id',()=>{

 })

 router.patch('/vendor/:id',()=>{

 })
export {router as AdminRoutes}