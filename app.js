var createError 	= require('http-errors');
var express 		= require('express');
var path 			= require('path');
var cookieParser 	= require('cookie-parser');
var logger 			= require('morgan');

// const NS_PER_SEC = 1e9;
// const time = process.hrtime();
// // [ 1800216, 25 ]

// setTimeout(() => {
//   const diff = process.hrtime(time);
//   // [ 1, 552 ]

//   console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
//   // benchmark took 1000000552 nanoseconds
// }, 1000);
// const startTime = process.hrtime();
// const endTime = process.hrtime(startTime);

// Setting UP Koneksi SQLSERVER 
var ConnectionSqlServer = require('tedious').Connection;
var RequestSqlServer 	= require('tedious').Request;
var config 				= require("./config/database");

// var config = {
//   userName: 'sa', // update me
//   password: 'simrs3', // update me
//   server: '10.10.100.33',
//   options: {
//     // debug: {
//       // packet: true,
//       // data: true,
//       // payload: true,
//       // token: false,
//       // log: true
//     // },
//     database: 'rsudmajalengka_dummy',
//     // encrypt: true // for Azure users
//   }
// }

// var connection = new ConnectionSqlServer(config.databaseSQLServer);


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var frontendsIndexRouter = require('./routes/frontends/index');
var frontendsContactRouter = require('./routes/frontends/contact');
var contactFRouter = require('./routes/frontends/contactFRouter');
// var frontendsContactRouter = require('./routes/frontends/contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/frontends', frontendsIndexRouter);
app.use('/frontends/contact', frontendsContactRouter);

app.use('/contact', contactFRouter);  // Add catalog routes to middleware chain.
// app.use('/contact', frontendsIndexRouter);

// app.get('/frontends', function (req, res) {
  // res.send('GET request to the homepage')
  // res.render('FrontEnds/index');
// })

// function executeStatement() {
//   request = new RequestSqlServer("SELECT * FROM Pasien", function(err, rowCount) {
//     if (err) {
//       console.log(err);
//     } else {
//     		// var endTime = process.hrtime(startTime);
//       		// console.log(rowCount + ' rows' + endTime);
//       // console.log(endTime);
//       // console.log('rows');
//     }
//     connection.close();
//   });

//   request.on('row', function(columns) {
//     columns.forEach(function(column) {
//       if (column.value === null) {
//         console.log('NULL');
//       } else {
//         console.log(column.value);
//       }
//     });
//   });

//   connection.execSql(request);
// }

// connection.on('connect', function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     // executeStatement();
//     // console.log('Koneksi Berhasil')
//   }
// });



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
