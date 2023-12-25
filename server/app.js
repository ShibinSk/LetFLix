// import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import extendResponse from './middleswares/standardResponse.js'
// const adminRouter = require('./routes/adminRoutes');
// import usersRouter from'./routes/usersRoutes.js';
import dotenv from 'dotenv';
import { router } from './routes/usersRoutes.js';
// import Adminrouter  from './routes/adminRotes.js';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();
dotenv.config();
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });
const _dirname=path.dirname("")
const buildpath = path.join(_dirname,"../client/dist")
app.use(express.static(buildpath));
app.use(cors({
  origin: '*',
}));

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
app.use(express.static('public'));
app.use('/', router);
// app.use('/Book', router);
// app.use('/admin', Adminrouter);
  
// app.post('/bookNow', (req, res) => {
//   // Handle the POST request, send JSON response
//   res.json({ message: 'Book successfully added!' });
// });
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
mongoose
  .connect(process.env.MONGO_DB ?? 'mongodb://localhost:27017')
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

