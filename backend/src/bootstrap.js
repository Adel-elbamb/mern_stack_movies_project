import connection from '../DB/connection.js'
import userRouter from './Modules/user/user.router.js'
import bodyParser from 'body-parser'

const bootstarp = ( app , express ) => {
     
      // app.use(express.json())
      app.use(bodyParser.json());

     app.use('/user' , userRouter)



    
     app.all('*',(req,res,next)=>{
        res.send("in_valid routing please check url or method")
        }  )
       

     
     
     connection()

}

export default bootstarp