import React, { Component } from 'react';
import './App.css';
import Wallpaper from './images/Wallpaper.png'
import Aboutus from './Aboutus';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


class Offers extends Component { 


	constructor(){
		super();
		this.state={
			users:[{ }],
					eeemm:""}
			this.gotodons = this.gotodons.bind(this);
			this.gotoprofile = this.gotodons.bind(this);
			this.gotoaboutus = this.gotodons.bind(this);
			this.createTable = this.createTable.bind(this);
	}


componentWillMount(){
		const {email} = this.props.match.params
		console.log(email) 
		this.state.eeemm=email;
		console.log(this.state.eeemm)
			fetch('http://localhost:3000/don_request2')
 		.then (results =>{
		return results.json();
		}).then(data =>{
			console.log("Here");
			console.log(data);

		this.setState({users: data});
				this.createTable = this.createTable.bind(this);
				console.log(this.state.users[0]);
				this.createTable();
	});
}
	

/*

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

	this.populateArray()*/



	/*sendMail(){
		var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Deema.a3a@gmail.com',
    pass: '00119922d'
  }
});

var mailOptions = {
  from: 'Deema.a3a@gmail.com',
  to: 'Deema.a3a@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
	}*/
		
		

		createTable(){

console.log(this.state.users[0]);
		var table = document.createElement('table'), tr, td, row, cell;
		tr = document.createElement('tr');
		var th = document.createElement('th');
		tr.appendChild(th);
		th.innerHTML = "#";

		var th = document.createElement('th');
		tr.appendChild(th);
		th.innerHTML = "Category";

		var th = document.createElement('th');
		tr.appendChild(th);
		th.innerHTML = "Blood Type";

		var th = document.createElement('th');
		tr.appendChild(th);
		th.innerHTML = "Diseases";

		var th = document.createElement('th');
		tr.appendChild(th);
		th.innerHTML = "E-mail Address";

		var th = document.createElement('th');
		tr.appendChild(th);
		th.innerHTML = "Send Email";

 
    //Fifth add checkbox to td element


		table.appendChild(tr);


for (row = 0; row < this.state.users.length; row++) {

	
   		tr = document.createElement('tr');

   		 td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = row;
    
        td = document.createElement('td');
        tr.appendChild(td);
        console.log(this.state.users[0].category)
        td.innerHTML = this.state.users[row].category;

         td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = this.state.users[row].bloodtype;

         td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = this.state.users[row].disease;

         td = document.createElement('td');
        tr.appendChild(td);
        var anchor = document.createElement('a');
        td.innerHTML = this.state.users[row].email;

 td = document.createElement('td');
 var butt = document.createElement('input'); // create a button
    butt.setAttribute('type','button'); // set attributes ...
    var emailaa = this.state.users[row].email+"";
    butt.setAttribute('id',emailaa)
    butt.setAttribute('name',emailaa);
 //  butt.setAttribute('onclick',"this.emailDonor()")
 /*  edit.onclick = function(){
    editrow(id);
};*/
    butt.setAttribute('value','send');

td.appendChild(butt);
  tr.appendChild(td);
 
    //Fifth add checkbox to td element

		tr.appendChild(td);
    
    table.appendChild(tr);
}
document.getElementById('container').appendChild(table);
}



	
//this.createTable = this.createTable.bind(this);



	gotohome(){
		window.location.assign("/home2/"+this.state.eeemm);
				}

	gotodons(){
		window.location.assign("/Donation/"+this.state.eeemm);
				}

	gotoprofile(){
		window.location.assign("/Profileh2/"+this.state.eeemm);
				}

	gotoaboutus(){
		window.location.assign("/Aboutus2/"+this.state.eeemm)
				}
	
	render() {
    return (
      <div className="App">
			<header id="header">
					<a className="logo" onClick={this.gotohome}>Health Donation Centre</a>
				
 <div className="dropdown" >
  <span>Menu &nbsp;</span>
  <div className="dropdown-content" style={{marginLeft:'-7rem'}}>
   <a onClick={this.gotohome} >Home</a>
   <a onClick={this.gotodons}>Donations</a>
   <a href="#footer">Contact us</a>
   <a onClick={this.gotoprofile} >Profile</a>
   <a onClick={this.gotoaboutus} >About us</a>
   <a href="/Login">Sign out</a>

  </div>
</div>


			</header>
		



			<section style={{height:'650px'}} className="wrapper">
				<div className="inner">
				<h1 style={{marginTop:'20px'}} className="header1">Donation Requests</h1>
				<img src={Wallpaper} className="avatar3" />
			<div id="container">
	
	</div>


			</div>

		</section>

<div className="ddd">
	

	<form className="fff" onSubmit={this.sendMail}>
 <p> Email Address of Donor:</p>
  <input  type="text" name="firstname" value="example@example.com" />
  <br />

  <input  type="submit" value="Send Request" />
</form> 


	</div>
	  <br />


	
			<footer id="footer">
				<div className="inner">
					<div className="content">
						<section>
							<h3>Health Donation Centre</h3>
							<p>Our website helps in improving the quality of the health industry by easing the process of donating. It works as a bridge between donors and hospitals.</p>
						</section>
	<section>
							<h4>Values</h4>
							<ul className="alt">
								<li><a href="#">Excellence</a></li>
								<li><a href="#">Integrity</a></li>
								<li><a href="#">Trust</a></li>
							</ul>
						</section>
						<section>
							<h4>Contact us</h4>
							<ul className="plain">
								<li><a href="#"><i className="icon fa-twitter">&nbsp;</i>Twitter</a></li>
								<li><a href="#"><i className="icon fa-facebook">&nbsp;</i>Facebook</a></li>
								<li><a href="#"><i className="icon fa-instagram">&nbsp;</i>Instagram</a></li>
							</ul>
						</section>
					</div>
					<div className="copyright">
						&copy; 2018 Saudi Arabia.
					</div>
				</div>
			</footer>

		
       </div>
    	
    	);
    }
}

export default Offers;