import express from 'express';
import doctorRoutes from './routes/doctor.route.js';
import { connectDB } from './utils/db.js';
import ExpressError from './utils/errorhandler.js';


const app = express();
const PORT = process.env.PORT || 8000;

// to connect with database
connectDB(process.env.MONGOURI);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/doctors",doctorRoutes);

// home route 
app.get("/", (req, res) => {
    res.send("hello world");
});

//default route 
app.use( (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

// Global error handler
app.use((err, req, res, next) => {

  if(err.name==='CastError') err.message='Invalid Id'
  
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";

    res.status(statusCode).json({ success: false, message });
});




app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
