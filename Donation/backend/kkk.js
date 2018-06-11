import React, { Component } from 'react';
import './App.css';
import Wallpaper from './images/Wallpaper.png'
import Aboutus from './Aboutus';
import SendEmail from './SendEmail'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


class Offers extends Component { 


<Link to={'home1/deema.a3a'}>My route</Link>
	constructor(){
		super();
		this.state={
			users:[{ }],
		}
		this.populateArray = this.populateArray.bind(this);
			this.createTable = this.createTable.bind(this);
	}


componentWillMount(){
	this.populateArray()
}


	sendMail(){
	//	const myModule = require('./SendEmail');
//let val = SendEmail.se(); // val is "Hello" 

}
		

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

emailDonor(){

}

	
	render() {
    return (
      <div className="App">
			<header id="header">
					<a className="logo" href="/">Health Donation Centre</a>
				
 <div className="dropdown" >
  <span >Menu &nbsp;</span>
  <div className="dropdown-content" style={{marginLeft:'-7rem'}}>
   <a href="/">Home</a>
   <a href="/Donate">Donate</a>
   <a href="/Offers">Donation Offers</a>
   <a href="#footer">Contact us</a>
   <a href="/Aboutus">About us</a>
   <a href="#">Sign out</a>
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