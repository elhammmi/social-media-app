import  express  from "express"; 
const app = express()
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser";

//middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser( ))          
   
app.get('/', function (req, res) {
  res.send('Hello World!'); // This will serve your request to '/'.
});

app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/comments",commentRoutes)
app.use("/api/likes",likeRoutes)
app.use("/api/auth",authRoutes)
app.listen(8800, ()=>{
    console.log("App is working");
})
