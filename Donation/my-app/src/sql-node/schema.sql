CREATE TABLE users (
  id   INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email  VARCHAR(100) NOT NULL,
  password  VARCHAR(100) NOT NULL,
  bloodType   char  NOT NULL
);


var user = {
  name: 'Deema',
  email: 'D@gmail.com',
  password: '123',
  bloodType :'B+'
};

var query = connection.query('insert into users set ?', user, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.error(result);
});