
module.exports = {
   se: function() {

var api_key = '0e71b000b01a2a48e97e99db2fa48319-b892f62e-04344194';
var domain = 'sandbox7fd9ac7c6da54c99981409d2915cdfd4.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Donation Centre <healthdonationcentre@gmail.com>',
  to: 'deema.a3a@gmail.com',
  subject: 'Donation Acceptance',
  text: 'Dear, thank you for submitting your donation, we would like to inform you that you are accepted anyday that suits you in  hospital'
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
}}
