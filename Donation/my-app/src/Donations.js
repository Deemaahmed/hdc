import React, { Component } from 'react';
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


class Donations extends Component { 


		







		componentWillMount(){
		const {email} = this.props.match.params

		console.log(email) // "foo"
		this.state.eeemm=email;
		console.log(this.state.eeemm)

			fetch('http://localhost:3000/don_request2/'+this.state.eeemm)
			.then (results =>{
			return results.json();
			}).then(data =>{
			if(typeof(data[0]) !== 'undefined' || data[0] != null){
				this.setState({dons:data})
				console.log(this.state.dons[0].category)
				console.log(this.state.dons[0])
				console.log(this.state.dons.length)
				this.createTable = this.createTable.bind(this);
				this.createTable();
			}
				
				else
					alert("Incorrect E-mail")})


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


		constructor(props){
		super(props);
		this.state={
			dons:[{}],
			cat:"",
			eeemm:""

		}

		this.createTable = this.createTable.bind(this);
		this.gotohome = this.gotohome.bind(this);
		this.gotodon = this.gotodon.bind(this);
		this.gotomydons = this.gotomydons.bind(this);
		this.gotoprofile = this.gotoprofile.bind(this);
		this.gotoaboutus = this.gotoaboutus.bind(this);
//bind here
	}

		createTable(){
		var table = document.createElement('table'), tr, td, row, cell;
		tr = document.createElement('tr');
		var th = document.createElement('th');
		tr.appendChild(th);
		th.innerHTML = "Serial Number";

		var th = document.createElement('th');
		tr.appendChild(th);
		th.innerHTML = "Category";


		var th = document.createElement('th');
		tr.appendChild(th);
		th.innerHTML = "Diseases";
		table.appendChild(tr);
/*
		var th = document.createElement('th');
		tr.appendChild(th);
		th.innerHTML = "Date";
		

		*/


for (row = 0; row < this.state.dons.length; row++) {

	
   		tr = document.createElement('tr');

   		 td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = this.state.dons[row].ID;
    
        td = document.createElement('td');
        tr.appendChild(td);
        console.log(this.state.dons[0].category)
        td.innerHTML = this.state.dons[row].category;


         td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = this.state.dons[row].disease;

     /*  td = document.createElement('td');
        tr.appendChild(td);
        var anchor = document.createElement('a');
        td.innerHTML = this.state.dons[row].date;*/
    
    table.appendChild(tr);
}
document.getElementById('container').appendChild(table);

}

delete(e){
			var em =document.getElementById("numb").value;
			var a=e.target.elements.numb.value;
			console.log(em)
			console.log(a)

				if (em==null || em=="")
			 	{alert('Please enter a serial number')}
				else{


			console.log(em)
			
fetch('http://localhost:3000/don_request2/'+em,
        {
          method: 'DELETE',
          headers: {

            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },

        });




}}
	
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
				<h1 style={{marginTop:'20px'}} className="header1">Donations</h1>
				<img src={Wallpaper} className="avatar3" />



			</div>
			<div id="container">
	
	</div>

		</section>

	


<div className="ddd">
	

	<form className="fff" onSubmit={this.delete}>
 <p> Serial Number of the donation that you want to cancel:</p>
  <input  type="text" id="numb"  />
  <br />

  <input  type="submit" value="Cancel Donation" />
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

export default Donations;