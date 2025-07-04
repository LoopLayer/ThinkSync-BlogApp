import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app=express();
connectDB();
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json());

// Router 
app.get('/',(req,res)=>res.send("API is working"))
app.use('/api/v1/admin',adminRouter);
app.use('/api/v1/blog',blogRouter)

const PORT= process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server Is Running On Port:",PORT)
    

})

export default app;
