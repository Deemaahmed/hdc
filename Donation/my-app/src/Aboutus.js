import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


class Aboutus extends Component { 
constructor(props){
		super(props)
		this.state={
			eeemm:""

		}
this.gotohome = this.gotohome.bind(this);
this.gotodon = this.gotodon.bind(this);
this.gotomydons = this.gotomydons.bind(this);
this.gotoprofile = this.gotoprofile.bind(this);
this.gotoaboutus = this.gotoaboutus.bind(this);}
		componentWillMount(){
		const {email} = this.props.match.params

		console.log(email) // "foo"
		this.state.eeemm=email;
		console.log(this.state.eeemm)



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


			


			<section id="banner">
				<div className="inner">
					<h1>About Us</h1>
					<p>Health Donation Centre lets you effortlessly give and track
all health donations provided by Saudi Arabia hospitals. It helps in improving the quality of the health industry by easing the process of donating. It works as a bridge between donors and hospitals.<br />
					 </p>
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

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>


          </div>
    );
  }
}

export default Aboutus;