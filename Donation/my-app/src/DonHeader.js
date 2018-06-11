import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import heart from './images/heart.png';
import blood from './images/blood.png';
import Aboutus from './Aboutus';
import Donate from './Donate';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
  } from 'react-router-dom'

class DonorHeader extends Component {


constructor() {
    super();
    this.state = {
    	name:"",
    	page:""};}

  render() {
  	if (this.props.page=="Home1"){
  	
    return (
  
      <div className="App">

	<header id="header">
				<a className="logo" href="/">Health Donation Centre, Hello {this.props.user.name}</a>
				
 <div className="dropdown" >
  <span>Menu &nbsp;</span>
  <div className="dropdown-content" style={{marginLeft:'-7rem'}}>
   <a href="/">Home</a>
   <a href="/Donate">Donate</a>
      <a href="/Offers">Donation Offers</a>

   <a href="#footer">Contact us</a>
   <a href="/Aboutus">About us</a>
      <a href="#">Sign out</a>

  </div>
</div>



			</header>
			</div>);}

    else if(this.props.page=="Login"){
    	this.state.name = this.props.name;

    	 return (
        
  
      <div className="App">
<header id="header">
				<a className="logo" href="#">Health Donation Centre Login page</a>
				
				ul
 <div className="dropdown" >
  <span >Menu &nbsp;</span>
  <div className="dropdown-content" style={{marginLeft:'-7rem'}}>
   <a href="#footer">Contact us</a>
   <a href="/Aboutus">About us</a>
  </div>
</div>
			</header>
			</div>);


    }
    else {
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
   <a href="/Aboutus">About us</a>
      <a href="#">Sign out</a>

  </div>
</div>


			</header>
			</div>

			);


    }
			}}



export default DonorHeader;
