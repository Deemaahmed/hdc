import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import login2 from './images/login2.png'
import fa from './images/fa.png'
import profile from './images/profile.png'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class Profileh2 extends Component { 


	constructor(props){
		super(props)
		this.state={
			eeemm:""}
			this.gotodons = this.gotodons.bind(this);
			this.gotoprofile = this.gotodons.bind(this);
			this.gotoaboutus = this.gotodons.bind(this);
			this.direct = this.direct.bind(this);
		}



gotodons(){
	window.location.assign("/Donation/"+this.state.eemm);
}

gotoprofile(){
	window.location.assign("/Profileh2/"+this.state.eemm);
}

gotoaboutus(){
	window.location.assign("/Aboutus2/"+this.state.eemm)
}







				componentWillMount(){
		const {email} = this.props.match.params
		console.log(email) // "foo"
		this.state.eeemm=email;
		console.log(this.state.eeemm)




		fetch('http://204.48.28.197/hospital/'+this.state.eeemm)
				.then (results =>{
				return results.json();
				}).then(data =>{
				if(typeof(data[0]) !== 'undefined' || data[0] != null)
			//if(data[0].city!=null)
					{
						console.log(data[0].name+"XXXX")
						this.setState({don:data[0]})
						document.getElementById("1").value=data[0].name;
						document.getElementById("2").value=data[0].email;
						document.getElementById("3").value=data[0].phone;
						document.getElementById("4").value=data[0].password;
						document.getElementById("5").value=data[0].city;
					}})


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
fetch('http://204.48.28.197/donor/'+email1,
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

fetch('http://204.48.28.197/donor/'+"Deema@gmail.com",
        {
          method: 'DELETE',
          headers: {

            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
         
        });


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

					direct(){
						window.location.assign("/EditProfileH/"+this.state.eeemm);
					}


 
	render() {
    return (
	<div className="App"> 
			<header id="header">
					<a className="logo" href="/home2">Health Donation Centre</a>
				
 <div className="dropdown" >
  <span>Menu &nbsp;</span>
  <div className="dropdown-content" style={{marginLeft:'-7rem'}}>
   <a href="/home2">Home</a>
   <a href="/Donation">Donations</a>
   <a href="#footer">Contact us</a>
   <a href="/Profileh2">Profile</a>
   <a href="/Aboutus2">About us</a>
      <a href="/Login">Sign out</a>

  </div>
</div>


			</header>


<section style={{height:'850px',top:'20px'}} className="wrapper">

		<div className="register">
	
	<img style={{marginLeft:'-20px',paddingBottom:'40px',top:'-40px',height:'120px',width:'90px'}} src={profile} />


				<h1 className="header1">My Profile</h1>


				


				<form>



					<p >Hospital Name</p>
						<input id = "1" className="special" ref={(ref) => {this.usname = ref}} disabled="disabled"  type="text" name="username" value={this.getName} />

					<p >E-mail:</p>
						<input id = "2" ref={(ref) => {this.emailadd = ref}} disabled="disabled" type="text" name="emaill" value={this.getEmail} />


					<p >Phone Number:</p>
						<input id = "3" ref={(ref) => {this.emailadd = ref}} disabled="disabled" type="text" name="ph" value={this.getPhone} />

					<p >Password:</p>
						<input id = "4" ref={(ref) => {this.passw = ref}} disabled="disabled" type="password" name="passwordd" value={this.getPassword} />



					<p>City:</p>
						<input id = "5" ref={(ref) => {this.passw = ref}} disabled="disabled" type="text" name="citty" value={this.getCity} />


<button onClick={this.direct} type="button" style={{height:'40px',top:'40px',marginLeft:'-220px'}} >Edit</button>
					
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

export default Profileh2;
