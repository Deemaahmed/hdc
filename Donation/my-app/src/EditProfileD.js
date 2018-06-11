import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import login2 from './images/login2.png'
import fa from './images/fa.png'
import Wallpaper from './images/Wallpaper.png'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


class EditProfileD extends Component { 


					constructor(){
					  super();
					  this.state={
					  	ustype:"",
					  	selectedVal:"",
					  	selectedCity:"",
					  	ustype:"",
					  	don:[{ }],
					  	selectedVal:"",
					  	selectedCity:"",
					  	selectedBloodType:"",
					  	eeemm:""
					  };

					  this.getBloodType = this.getBloodType.bind(this);
					  this.getCity = this.getCity.bind(this);
					  	this.getBloodType = this.getBloodType.bind(this);
					 	 this.getCity = this.getCity.bind(this);
					 	 this.gotohome = this.gotohome.bind(this);
						this.gotodon = this.gotodon.bind(this);
						this.gotomydons = this.gotomydons.bind(this);
						this.gotoprofile = this.gotoprofile.bind(this);
						this.gotoaboutus = this.gotoaboutus.bind(this);
						this.updateprofile=this.updateprofile.bind(this);
					 }

	



					 



	componentWillMount(){
		const {email} = this.props.match.params
		console.log(email) // "foo"
		this.state.eeemm=email;
		console.log(this.state.eeemm)




		fetch('http://localhost:3000/donor/'+this.state.eeemm)
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
						document.getElementById("5").value=data[0].password;

					}})


	}
	gotohome(){
		window.location.assign("/home1/"+this.state.eeemm);
				}

	gotodon(){
		window.location.assign("/Donate/"+this.state.eeemm);
				}

	gotomydons(){
		window.location.assign("/Donations/"+this.state.eeemm);
	}

	gotoprofile(){
		window.location.assign("/Profile/"+this.state.eeemm);
				}

	gotoaboutus(){
		window.location.assign("/Aboutus/"+this.state.eeemm)
				}




					updateprofile(e){

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


	//Get Blood type
	var e = document.getElementById("mySelect1");
	var bloodtyp = e.options[e.selectedIndex].value;
	
      
//this.sendMail("Deema.a3a@gmail.com")
fetch('http://localhost:3000/donor/'+this.state.eeemm,
        {
          method: 'PUT',
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




alert("Your profile has been updated successfuly");







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
				<a className="logo" onClick={this.gotohome}>Health Donation Centre</a>


				
 <div className="dropdown" >
  <span>Menu &nbsp;</span>
  <div className="dropdown-content" style={{marginLeft:'-7rem'}}>

   <a onClick={this.gotohome} >Home</a>
   <a onClick={this.gotodon}>Donate</a>
   <a onClick={this.gotomydons}>My Donations</a>
   <a href="#footer">Contact us</a>
   <a onClick={this.gotoprofile} >Profile</a>
   <a onClick={this.gotoaboutus} >About us</a>
   <a href="/Login">Sign out</a>

  </div>
</div>


			</header>


<section style={{height:'850px',top:'20px'}} className="wrapper">

		<div className="register">
	
				<h1 className="header1">Edit Profile</h1>


				<img style={{left:'510px'}} src={Wallpaper} className="avatar3" />


				<form onSubmit={this.updateprofile}>




					<p >Username:</p>
						<input className="special" ref={(ref) => {this.usname = ref}} id="1" type="text" name="username" />

					<p >E-mail:</p>
						<input ref={(ref) => {this.emailadd = ref}} id="2" type="text" name="emaill" />


					<p >Phone Number:</p>
						<input ref={(ref) => {this.emailadd = ref}} id="3" type="text" name="ph" />

					<p >Enter Password:</p>
						<input ref={(ref) => {this.passw = ref}}  id="4" type="password" name="passwordd"/>


					<p>Re-enter Password:</p>
						<input type="password" id="5" name="passwordd2"  />


					<p>City:</p>
						<select id="5" onChange={this.getCity} id="menyval23" ref={(ref) => {this.bty = ref}} style={{borderColor:'#992727',borderWidth:'2',color:'grey',width:'37%',height:'30px',fontSize:'10px'}} name="usertype">
								
										<option  value="Riyadh">Riyadh</option>
										<option  value="AlQassim">Al-Qassim</option>
										<option  value="Dammam">Dammam</option>
										<option  value="Jeddah">Jeddah</option>

						</select>

					<br />
		   			<p>Blood type:</p>

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


					<input style={{marginTop:'-80px'}} type="submit" name="submit" value="Update" />
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

export default EditProfileD;
