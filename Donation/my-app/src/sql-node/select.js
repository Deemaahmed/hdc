



var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://deemaahmed:123@deemaahmed:3001/user_info')

db.one('SELECT name AS n from user_info', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })