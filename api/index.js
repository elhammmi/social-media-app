import  express, { request }  from "express"; 
const app = express()
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(cors({ 
  origin:'http://localhost:3000'
}));
app.use(cookieParser( ));        
   
app.get('/', function (req, res) {
  res.send('Hello World!'); // This will serve your request to '/'.
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"), (req, res)=>{
  const file = req.file;
  res.status(200).json(file.filename);
})

app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/comments",commentRoutes)
app.use("/api/likes",likeRoutes)
app.use("/api/auth",authRoutes)
app.listen(8800, ()=>{
    console.log("App is working");
})
