var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/users_data';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllUsers: getAllUsers,
  getSingleUser: getSingleUser,
  createUser: createUser,
  updateUser: updateUser,
  removeUser: removeUser

};


function getAllUsers(req, res, next) {
  db.any('select * from users')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL users'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function getSingleUser(req, res, next) {
  var userID = parseInt(req.params.id);
  db.one('select * from users where id = $1', userID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createUser(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into users (name, email, password, type,bloodType)' +
      'values(${name}, ${email}, ${password}, ${type},${bloodType})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}



function updateUser(req, res, next) {
  db.none('update users set name=$1, email=$2, password=$3, type=$4 , bloodType=$5 where id=$5',
    [req.body.name, req.body.email, req.body.password,
      req.body.type, req.params.bloodType])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated users'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}





function removeUser(req, res, next) {
  var userID = parseInt(req.params.id);
  db.result('delete from users where id = $1', userID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} users`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}













