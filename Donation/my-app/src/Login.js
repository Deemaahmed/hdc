
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import login2 from './images/login2.png'
import App from './App'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import  DonHeader from './DonHeader';
import { Link } from 'react-router-dom'



class Login extends Component { 

	//Get all data, if exists then the user is not registered



	constructor(props) {
				    super(props);
				    this.state = {
				    	user:[{ }],	
				      emailaddress: "",
				      passwd: "",
				      emailaddin:"",
				      passinp:"",
				      ustype:"",

				    };
    		this.login = this.login.bind(this);}




	
	login(e) { 

				var a=e.target.elements.emaila.value;
			     var b=document.forms["Form"]["passwordd"].value;
			     
			     if (a==null || a=="",b==null || b=="")
			     {
			         alert("Please Fill All Required Fields");
			         return ;
			     }


   				e.preventDefault();
   				const em = e.target.elements.emaila.value+"";
   				const pass = e.target.elements.passwordd.value+"";

   				var ty = ""

   				///Check if it is a hospital ?
				fetch('http://204.48.28.197/donor/'+em)
				.then (results =>{
				return results.json();
				}).then(data =>{
				if(typeof(data[0]) !== 'undefined' || data[0] != null)
			//if(data[0].city!=null)
					{
			
						this.setState({user:data[0],emailaddress:data[0].email,passwd:data[0].password,emailaddin:em,passinp:pass})
						this.samePassword("Donor",em)

					}})
					console.log(this.ustype);
		
			//this.samePassword("Donor")
			 console.log("It is not a donor");

					fetch('http://204.48.28.197/hospital/'+em)
						.then (results =>{
							return results.json();
					}).then(data =>{	
						if(typeof(data[0]) !== 'undefined' || data[0] != null){
					
							this.setState({user:data[0],emailaddress:data[0].email,passwd:data[0].password,emailaddin:em,passinp:pass})
						this.samePassword("Hospital",em)
								}})

			 console.log("Yaay");
//call for checking email and pass 

	}


	samePassword(ustype,emailadd){
		if(this.state.passwd==this.state.passinp)
			{if(ustype=="Donor")
				{window.location.assign("/home1/"+emailadd);}
			else if(ustype=="Hospital")
				{window.location.assign("/home2/"+emailadd);}
				}
 		else {
			document.getElementById("errormsg").innerHTML = "Incorrect email or password.";
 		}
			}

	signUp(){

		window.location.assign("/Register");}
  
	//componentWillMount(){
	//fetch('http://localhost:3000/users')
	
 	//	.then (results =>{
	//	return results.json();
	//	}).then(data =>{
	//	this.setState({users: data});
	//	})}
		
		
	render() {
    return (
    	<div className="App"> 
    


              /////Header///////
				<header id="header">
						<a className="logo" href="#">Health Donation Centre</a>								
						 <div className="dropdown" >
						  <span >Menu &nbsp;</span>
						  <div className="dropdown-content" style={{marginLeft:'-7rem'}}>
						   <a href="#footer">Contact us</a>
						   <a href="/Aboutus3">About us</a>
				  			</div>
						</div>
				</header>
			






              ///////Body/////////

			<div id="banner11">
				<div className="loginBox">
					<img scr={login2} width="20px" height="20px" className="avatar" />
				<h1 style={{textAlign:'center',marginTop:'-40'}} className="header1">Sign in</h1>
				<span style={{color:'red'}} id = "errormsg"></span>
				<form onSubmit={this.login} name="Form">
					<p >Email</p>
					<input type="text" name="emaila" placeholder="Enter Email"/>
					<p >Password</p>
					<input type="password" name="passwordd" placeholder="Enter Password"/>
					
					<input type="submit" name="submit" value="Login"/>
					<a onClick={this.signUp} style={{fontSize:'1.2em'}} href="#">Sign up</a>
				</form>
				</div>
			</div>


		




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
    	
    	)}
}

export default Login;
