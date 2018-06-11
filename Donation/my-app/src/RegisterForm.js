import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import login2 from './images/login2.png'
import fa from './images/fa.png'
import Wallpaper from './images/Wallpaper.png'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 




class RegisterForm extends Component { 



constructor(){
  super();
 }
render() {

	if(this.props.ustype=="Hospital"){
    return (
<div>

	<form onSubmit={this.handleSubmit}>
				
					<p >Hospital Name*</p>
						<input className="special" ref={(ref) => {this.usname = ref}}  type="text" name="username" placeholder="Dr.Sulaiman Al Habib" />
					<p> City *</p>
					<p >E-mail*</p>
						<input ref={(ref) => {this.emailadd = ref}} type="text" name="email" placeholder="example@example.com" />
					<p >Hospital Number*</p>
						<input ref={(ref) => {this.emailadd = ref}} type="text" name="email" placeholder="011 490 9999" />

					<p >Enter Password*</p>
						<input ref={(ref) => {this.passw = ref}} type="password" name="password" placeholder="Enter Password" />
					<p>Re-enter Password*</p>
						<input type="password" name="password" placeholder="Re-enter Password" />

					<input style={{marginTop:'-80px'}} type="submit" name="submit" value="Register" />
				</form>

</div>


    	);}

	else {
	return (
		<div>



		</div>

		);

	}}}




export default RegisterForm;