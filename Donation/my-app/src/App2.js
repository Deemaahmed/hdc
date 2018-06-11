import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import heart from './images/heart.png'
import blood from './images/blood.png'
import Aboutus from './Aboutus';
import Donation from './Donation';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App2 extends Component { 



/* Constructor and Methods */
	constructor(props){
		super(props)
		this.state={
			eeemm:""}
			this.gotodons = this.gotodons.bind(this);
			this.gotoprofile = this.gotodons.bind(this);
			this.gotoaboutus = this.gotodons.bind(this);}



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
		console.log(email) 
		this.state.eeemm=email;
		console.log(this.state.eeemm)}

/* Constructor and Methods */

	render() {
    return (
	<div className="App"> 
			<header id="header">
					<a className="logo" onClick={this.gotohome}>Health Donation Centre</a>
				
 <div className="dropdown" >
  <span>Menu &nbsp;</span>
  <div className="dropdown-content" style={{marginLeft:'-7rem'}}>

   <a onClick={this.gotohome}>Home</a>
   <a onClick={() => {this.gotodons}}>Donations</a>
   <a href="#footer">Contact us</a>
   <a href={"/Profileh2/"+this.state.eeemm} >Profile</a>
   <a href={"/Aboutus2/"+this.state.eeemm }> About us</a>
   <a href="/Login">Sign out</a>

  </div>
</div>
			</header>




			<nav id="menu">
				<ul className="links">
					<li><a href="index2.html">Home</a></li>
					<li><a href="Donations.html">Donations</a></li>
			    <li><a href="#footer">Contact us</a></li>
			      <li><a href="Aboutus.html">About us</a></li>
						<li><a href="#">Sign out</a></li>
				</ul>
			</nav>





			<section id="banner">
				<div className="inner">
					<h1>Save a Life</h1>
					<p>Your cooperation helps to improve the lives of people in and from foster care<br />
					 </p>
				</div>
			</section>


			

			<section className="wrapper">
				<div className="inner">
					<header className="special">

						<p>Every donation helps us sustain and expand our work to deliver lifesaving health care to those who need it most. You’re just a click away from making a profound difference in someone’s life.</p>
					</header>
					<div className="highlights">

						<section>
							<div className="content">
								<header>
									<a href="#" ><img src={heart} width="120px" height="120px" /></a>
									<h3>Organs that can be donated:</h3>
								</header>
								<p>1. Heart<br />2. Lung<br />3. Kidney<br />4. Liver<br />5. Pancreas<br />
									</p>
							</div>
						</section>

						<section>
							<div className="content">
								<header>
									<a href="#" ><img src={blood} width="120px" height="120px" /></a>
									<h3>Tissues that can be donated:</h3>
								</header>
								<p>1. Eye tissue<br />2. Bone<br />3. Skin<br />4. Tendons<br />5. Heart tissue<br />6. Blood<br />
									</p>
							</div>
						</section>




					</div>
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

export default App2;