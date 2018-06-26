import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import login2 from './images/login2.png'
import fa from './images/fa.png'
import Wallpaper from './images/Wallpaper.png'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


class Register extends Component { 


					constructor(){
					  super();
					  this.state={
					  	ustype:"",
					  	selectedVal:"",
					  	selectedCity:"",
					  	selectedBloodType:"",
					  };

					  this.getBloodType = this.getBloodType.bind(this);
					  this.getCity = this.getCity.bind(this);
					 }





					signup(e){

								e.preventDefault();
								var qs = require('qs');
								var assert = require('assert');

								var a=e.target.elements.username.value;
						        var b=e.target.elements.emaill.value;
						        var c=e.target.elements.ph.value;
						        var d=e.target.elements.passwordd.value;
						        var f=e.target.elements.passwordd2.value;


						        if (a==null || a=="",b==null || b=="",c==null || c=="",d==null || d=="",f==null || f=="")
						        {
						            alert("Please Fill All Required Fields");
						            return ;
						        }

						        if(d!=f)
						        {
						        	alert("Passwords are incompatible")
						        }
			/*

const searchParams = new URLSearchParams();
for (const prop in params) {
  searchParams.set(prop, params[prop]);
}


fetch(url, {
  method: 'POST',
  body: searchParams
})




	e.preventDefault();
   	const name1 = e.target.elements.username.value+"";
   	const email1 = e.target.elements.emaill.value+"";
   	const phone1 = e.target.elements.ph.value+"";
   	const password1 = e.target.elements.passwordd.value+"";
   	const city1 = "Riyadh";
   	const bloodtype1 = "B+";

   	var params = {
     name : e.target.elements.username.value,
   	 email : e.target.elements.emaill.value,
   	 phone : e.target.elements.ph.value,
   	 password : e.target.elements.passwordd.value,
   	 city : "Riyadh",
   	 bloodtype : "B+"
};

var formData = new FormData();

for (var k in params) {
    formData.append(k, params[k]);
}

var request = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
    body: formData
};

fetch('http://localhost:3000/donor', request);

*/

   	const name1 = e.target.elements.username.value+"";
   	const email1 = e.target.elements.emaill.value+"";
   	const phone1 = e.target.elements.ph.value+"";
   	const password1 = e.target.elements.passwordd.value+"";
   	var e = document.getElementById("menyval23");
   	const city1 = e.options[e.selectedIndex].value;   	

   	var e = document.getElementById("menyval");
   	const str = e.options[e.selectedIndex].value;



if(str=="Donor"){
	//Get Blood type
	var e = document.getElementById("mySelect1");
	var bloodtyp = e.options[e.selectedIndex].value;
	fetch('http://204.48.28.197/donor',
        {
          method: 'POST',
          headers: {

            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: qs.stringify({
				     name : name1,
				   	 email : email1,
				   	 phone : phone1,
				   	 password : password1,
				   	 city : city1,
				   	 bloodtype : bloodtyp
          })
        });
//this.sendMail("Deema.a3a@gmail.com")


/*
fetch('http://localhost:3000/donor/'+email1,
        {
          method: 'PUT',
          headers: {

            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: qs.stringify({
				     name : name1,
				   	 email : "Deema.a@gmail.com",
				   	 phone : phone1,
				   	 password : password1,
				   	 city : city1,
				   	 bloodtype : bloodtyp
          })
        });

fetch('http://localhost:3000/donor/'+"Deema@gmail.com",
        {
          method: 'DELETE',
          headers: {

            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
         
        });
*/

window.location.assign("/Login");
}



	else{

		fetch('http://204.48.28.197/hospital',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: qs.stringify({
				     name : name1,
				   	 email : email1,
				   	 phone : phone1,
				   	 password : password1,
				   	 city : city1,
          })
        });
        window.location.assign("/Login");

	}


   




}
/*

sendMail(emailadd){




var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'deema.a3a@gmail.com',
    pass: '00119922d'
  },
  tls: {
    rejectUnauthorized: false
  }
});

const mailOptions = {
  from: '"Deema" <deema.a3a@gmail.com',
  to: 'deema.a3a@gmail.com',
  subject: 'Hi',
  html: '<p>Your html here</p>'
};



  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
  });
}*/

/*
axios.post('http://localhost:3000/donor', {
    name: 'Fred',
   name:'name1',
  	email:'email1',
  	phone:'phone1',
  	password:'password1',
  	city:'city1',
  	bloodtype:'bloodtype1'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  }); 

fetch('http://localhost:3000/donor', {
  method: 'POST',
  headers: {
  	'Accept': 'application/json',
 'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  	name:name1,
  	email:'email1',
  	phone:phone1,
  	password:password1,
  	city:city1,
  	bloodtype:bloodtype1,})
}).then(function (data) {  
  console.log('Request success: ', data);  
})  
.catch(function (error) {  
  console.log('Request failure: ', error);  
});*/



					displaymenu(){
						var e = document.getElementById("menyval");
					var str = e.options[e.selectedIndex].value;
						if(str=="Hospital")
					document.getElementById("mySelect1").disabled=true;
					else 
						document.getElementById("mySelect1").disabled=false;

					}

					getBloodType(){

					var e = document.getElementById("mySelect1");
					var str = e.options[e.selectedIndex].value;
					this.state.selectedBloodType= str
					}

					getCity(){

					var e = document.getElementById("menyval23");
					var str = e.options[e.selectedIndex].value;
					console.log(str)

					}
 
	render() {
    return (
	<div className="App"> 
		<header id="header">
			<a className="logo" href="#">Health Donation Centre</a>
							
 <div className="dropdown">
  <span >Menu &nbsp;</span>
  <div className="dropdown-content" style={{marginLeft:'-7rem'}}>
   <a href="#footer">Contact us</a>
   <a href="/Aboutus3">About us</a>
  </div>
</div>
			</header>


<section style={{height:'850px',top:'20px'}} className="wrapper">

		<div className="register">
	
				<h1 className="header1">Register</h1>


				<img style={{left:'510px'}} src={Wallpaper} className="avatar3" />


				<form onSubmit={this.signup}>

				  <p>User Type*</p>	
					<select id="menyval" onChange={this.displaymenu}ref={(ref) => {this.ty = ref}} style={{borderColor:'#992727',borderWidth:'2',color:'grey',width:'37%',height:'30px',fontSize:'10px'}} name="usertype">
		     <option  value="Donor">Donor</option>
		     <option  value="Hospital">Hospital</option>
				   </select><br />



					<p >Username or Hospital Name*</p>
						<input className="special" ref={(ref) => {this.usname = ref}}  type="text" name="username" placeholder="Deema Alabdulaali" />

					<p >E-mail*</p>
						<input ref={(ref) => {this.emailadd = ref}} type="text" name="emaill" placeholder="example@example.com" />


					<p >Phone Number*</p>
						<input ref={(ref) => {this.emailadd = ref}} type="text" name="ph" placeholder="+966 552660660" />

					<p >Enter Password*</p>
						<input ref={(ref) => {this.passw = ref}} type="password" name="passwordd" placeholder="Enter Password" />


					<p>Re-enter Password*</p>
						<input type="password" name="passwordd2" placeholder="Re-enter Password" />


					<p>City*</p>
						<select onChange={this.getCity} id="menyval23" ref={(ref) => {this.bty = ref}} style={{borderColor:'#992727',borderWidth:'2',color:'grey',width:'37%',height:'30px',fontSize:'10px'}} name="usertype">
								
										<option  value="Riyadh">Riyadh</option>
										<option  value="AlQassim">Al-Qassim</option>
										<option  value="Dammam">Dammam</option>
										<option  value="Jeddah">Jeddah</option>

						</select>

					<br />
		   			<p>Blood type*</p>

					    <select onChange={this.getBloodType} id = "mySelect1" ref={(ref) => {this.bty = ref}} style={{borderColor:'#992727',borderWidth:'2',color:'grey',width:'37%',height:'30px',fontSize:'10px'}} name="usertype">
										<option  value="A+">A+</option>
										<option  value="A-">A-</option>	
										<option  value="B+">B+</option>	
										<option  value="B-">B-</option>	
										<option  value="C+">C+</option>	
										<option  value="C-">C-</option>	
										<option  value="AB+">AB+</option>	
										<option  value="AB-">AB-</option>				
						</select>


					<input style={{marginTop:'-80px'}} type="submit" name="submit" value="Register" />
				</form>

				</div>

</section>

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
    	
    	);}
}

export default Register;
