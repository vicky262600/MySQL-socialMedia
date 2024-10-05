import express from "express";
const app = express();
import userRouters from "./routes/users.js"
import postRouters from "./routes/posts.js"
import likeRouters from "./routes/likes.js"
import commentRouters from "./routes/comments.js"
import authRouters from "./routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors";

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth ", authRouters)
app.use("/api/users", userRouters)
app.use("/api/posts", postRouters)
app.use("/api/likes", likeRouters)
app.use("/api/comments", commentRouters)

app.listen(8800, ()=>{
    console.log("jai bholenath")    
})