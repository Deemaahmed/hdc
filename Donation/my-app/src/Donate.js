import React, { Component } from 'react';
import logo from './logo.svg';
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


class Donate extends Component { 


		constructor(){
					  super();
					  this.state={
					  	user:"",
					  	eeemm:""

					  };
this.gotohome = this.gotohome.bind(this);
this.gotodon = this.gotodon.bind(this);
this.gotomydons = this.gotomydons.bind(this);
this.gotoprofile = this.gotoprofile.bind(this);
this.gotoaboutus = this.gotoaboutus.bind(this);
this.submitData = this.submitData.bind(this);
					 }

	componentWillMount(){
		const {email} = this.props.match.params

		console.log(email) // "foo"
		this.state.eeemm=email;
		console.log(this.state.eeemm)}


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




					 submitData(e){
								e.preventDefault();
								var qs = require('qs');
								var assert = require('assert');

								var a=e.target.elements.dis.value;
				
	var e = document.getElementById("mySelect1");
	var cat = e.options[e.selectedIndex].value;



   		fetch('http://204.48.28.197/don_request2',
        {
          method: 'POST',
          headers: {

            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: qs.stringify({
		   	email : this.state.eeemm,
			category:cat,
			disease : a,
			bloodtype : 'A+',
			state:'NO',
			reqdate:'20-4-2018'
          })
        });
alert("Submitted successfuly")


   							}
/*


handleClick(e){
	

	var a=e.target.elements.dis.value;
	alert(a)

}*/
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

		



			<section style={{height:'650px'}} className="wrapper">
				<div className="inner">
				<h1 style={{marginTop:'20px'}} className="header1">Donate</h1>
				<img src={Wallpaper} className="avatar3" />
				<form onSubmit={this.submitData}>
					<br />
					<p style={{textAlign:'left'}}>Donation Category</p>
					<select id = "mySelect1" style={{borderColor:'#992727',borderWidth:'2px',color:'grey',width:'25%',height:'30px',fontSize:'10px'}}>




		     <option  value="Heart">Heart</option>
				 <option  value="Lung">Lung</option>
				 <option  value="Kidney">Kidney</option>
				 <option  value="Liver">Liver</option>
				 <option  value="Pancreas">Pancreas</option>
				 <option  value="tissueEye">Eye tissue</option>
				 <option  value="bone">Bone</option>
				 <option  value="skin">Skin</option>
				 <option  value="tendons">Tendons</option>
				 <option  value="heartissue">Heart tissue</option>
				 <option  value="blood">Blood</option>
		   </select>
			<br />

					<br />
		<p style={{textAlign:'left'}}>Do you have current or chronic diseases?</p>
		<textarea id = "dis" style={{borderColor:'#992727',borderWidth:'2px',width:'40%'}} cols="25" rows="3" >
		</textarea>					
		<input type="submit" name="submit" value="Submit Request" style={{marginLeft:'550px',marginTop:'80px'}} />
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
    	
    	);
    }
}

export default Donate;
