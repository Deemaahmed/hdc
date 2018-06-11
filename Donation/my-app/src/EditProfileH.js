import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import login2 from './images/login2.png'
import fa from './images/fa.png'
import Wallpaper from './images/Wallpaper.png'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


class EditProfileH extends Component { 



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

					//  this.getBloodType = this.getBloodType.bind(this);
					  //	this.getBloodType = this.getBloodType.bind(this);
					 	 this.getCity = this.getCity.bind(this);
					 	 this.gotohome = this.gotohome.bind(this);
						this.gotodons = this.gotodons.bind(this);
						this.gotoprofile = this.gotoprofile.bind(this);
						this.gotoaboutus = this.gotoaboutus.bind(this);
						this.updateprofile=this.updateprofile.bind(this);

					 }



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



					 componentWillMount(){
		const {email} = this.props.match.params
		console.log(email) // "foo"
		this.state.eeemm=email;
		console.log(this.state.eeemm)




		fetch('http://localhost:3000/hospital/'+this.state.eeemm)
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

	
      
//this.sendMail("Deema.a3a@gmail.com")
fetch('http://localhost:3000/hospital/'+this.state.eeemm,
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
				   	
          })
        });




alert("Your profile has been updated successfuly");




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
   <a onClick={this.gotohome}>Home</a>
   <a onClick={this.gotodons}>Donations</a>
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


					<p >Hospital Name:</p>
						<input id = "1" className="special" ref={(ref) => {this.usname = ref}}  type="text" name="username" />

					<p >E-mail:</p>
						<input id = "2" ref={(ref) => {this.emailadd = ref}} type="text" name="emaill" />


					<p >Phone Number:</p>
						<input id = "3" ref={(ref) => {this.emailadd = ref}} type="text" name="ph" />

					<p >Enter Password:</p>
						<input id = "4" ref={(ref) => {this.passw = ref}} type="password" name="passwordd"/>


					<p>Re-enter Password:</p>
						<input id = "5" type="password" name="passwordd2"  />


					<p>City:</p>
						<select onChange={this.getCity} id="menyval23" ref={(ref) => {this.bty = ref}} style={{borderColor:'#992727',borderWidth:'2',color:'grey',width:'37%',height:'30px',fontSize:'10px'}} name="usertype">
								
										<option  value="Riyadh">Riyadh</option>
										<option  value="AlQassim">Al-Qassim</option>
										<option  value="Dammam">Dammam</option>
										<option  value="Jeddah">Jeddah</option>

						</select>

					<br />
		   		


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

export default EditProfileH;
