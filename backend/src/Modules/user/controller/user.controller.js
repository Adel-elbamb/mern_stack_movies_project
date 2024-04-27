import userModel from "../../../../DB/Models/User.model.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";

   export const signUp = async (req ,res, next) => {
    const { frist_name ,  last_name , age , email , password } = req.body 
        const userExist = await userModel.findOne({email})
        if(userExist) {
          return next(new Error("email exist ,please login"), { cause: 409 })
        }
  
        const user = await userModel.create({frist_name ,  last_name , age , email , password })
  
        return res.json({message : "done" , user })
  
  }