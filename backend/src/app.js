import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import xss from "xss-clean";
import authRoutes from "./routes/authRoutes.js";


const app = express();

app.use(helmet());

app.use(cors());

app.use(compression());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(mongoSanitize());

app.use(xss());

app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);

app.disable("x-powered-by");

const limiter = rateLimit({

    windowMs:15*60*1000,

    max:100

});

app.use(limiter);

app.get("/api/v1", (req,res)=>{

    res.status(200).json({

        success:true,

        message:"Welcome to Loris E-9 API",

        version:"1.0.0"

    });

});

export default app;