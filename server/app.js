import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import extendResponse from './middleswares/standardResponse.js'
// const adminRouter = require('./routes/adminRoutes');
// import usersRouter from'./routes/usersRoutes.js';
import dotenv from 'dotenv';
import { router } from './routes/usersRoutes.js';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
dotenv.config();
app.use(cors());
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
const PORT = process.env.PORT || 8080;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(extendResponse);

app.use('/', router);
// app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
mongoose
  .connect("mongodb+srv://letzFlix:Qowdjo5shwQPzHpN@cluster0.nckwdg3.mongodb.net/" ?? 'mongodb://127.0.0.1:27017/letzFlix')
  .then(async () => {
    console.log('Connected to mongodb');
    console.log('Connected to mongodb');
  });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));

export { app };

