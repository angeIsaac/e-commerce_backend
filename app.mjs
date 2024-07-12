import "./loadEnviroments.mjs"
import express from "express";
import createError  from "http-errors";
import cors from "cors"
import logger from "morgan"
import path from "path";
import cookieParser from "cookie-parser";
import connectDb from "./db/conection.mjs"
import userRouter from "./routes/userRoute.mjs";
import productRouter from "./routes/prodRoutes.mjs";
import commandRouter from "./routes/commandRoutes.mjs";

const app = express();

const __dirname = import.meta.dirname

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// nos different route
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/command", commandRouter);

// app.use(function(req, res, next) {
//     next(createError(404));
//     });

  // error handler
    // app.use(function(err, req, res, next) {
    // // set locals, only providing error in development
    // res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};

    // // render the error page
    // res.status(err.status || 500);
    // res.render('error');
    // });

export default app;