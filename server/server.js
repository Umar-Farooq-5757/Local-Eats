import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;
// Routes
import userRouter from "./routes/users.routes.js";
// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get("/", (req, res) => {
  res.send("Home page");
});
app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log("Server started on port:", PORT);
});
