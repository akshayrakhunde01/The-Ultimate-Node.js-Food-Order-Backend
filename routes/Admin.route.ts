import express, { Request, Response ,NextFunction} from 'express';

const router = express.Router()

router.get('/',(req:Request ,res:Response)=>{
    res.status(200).json({suceess:true,message:'Admin working'})
 })

export {router as AdminRoutes}