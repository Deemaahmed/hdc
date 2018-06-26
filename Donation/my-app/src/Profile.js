import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import login2 from './images/login2.png'
import fa from './images/fa.png'
import profile from './images/profile.png'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


class Profile extends Component { 


					constructor(){
					  super();
					  this.state={
					  	ustype:"",
					  	don:[{ }],
					  	selectedVal:"",
					  	selectedCity:"",
					  	selectedBloodType:"",
					  	eeemm:""
					  };

					 	 this.getBloodType = this.getBloodType.bind(this);
					 	 this.getCity = this.getCity.bind(this);
					 	 this.gotohome = this.gotohome.bind(this);
						this.gotodon = this.gotodon.bind(this);
						this.gotomydons = this.gotomydons.bind(this);
						this.gotoprofile = this.gotoprofile.bind(this);
						this.gotoaboutus = this.gotoaboutus.bind(this);
						this.direct=this.direct.bind(this)

					 }



	componentWillMount(){
		const {email} = this.props.match.params
		console.log(email) // "foo"
		this.state.eeemm=email;
		console.log(this.state.eeemm)




		fetch('http://204.48.28.197/donor/'+this.state.eeemm)
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
						document.getElementById("6").value=data[0].bloodtype;
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



	//				signup(e){

			

  
/*

if(str=="Donor"){
	//Get Blood type
	var e = document.getElementById("mySelect1");
	var bloodtyp = e.options[e.selectedIndex].value;
	fetch('http://localhost:3000/donor',
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


window.location.assign("/Login");
}



	else{

		fetch('http://localhost:3000/hospital',
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

	}*/


   




//}




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
						window.location.assign("/EditProfileD/"+this.state.eeemm);
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
	
	<img style={{marginLeft:'-20px',paddingBottom:'40px',top:'-40px',height:'120px',width:'90px'}} src={profile} />


				<h1 className="header1">My Profile</h1>


				


				<form>



					<p >Username</p>
						<input id="1" className="special" ref={(ref) => {this.usname = ref}} disabled="disabled"  type="text" name="username" value={this.getName} />

					<p >E-mail:</p>
						<input id="2" ref={(ref) => {this.emailadd = ref}} disabled="disabled" type="text" name="emaill" value={this.getEmail} />


					<p >Phone Number:</p>
						<input id="3" ref={(ref) => {this.emailadd = ref}} disabled="disabled" type="text" name="ph" value={this.getPhone} />

					<p >Password:</p>
						<input id="4" ref={(ref) => {this.passw = ref}} disabled="disabled" type="password" name="passwordd" value={this.getPassword} />



					<p>City:</p>
						<input id="5" ref={(ref) => {this.passw = ref}} disabled="disabled" type="text" name="citty" value={this.getCity} />


		
		   			<p>Blood type*</p>
						<input id="6" ref={(ref) => {this.passw = ref}} disabled="disabled" type="text" name="citty" value={this.getBloodType} />

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

export default Profile;
