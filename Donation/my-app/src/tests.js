 .then(function(response) {
 return response.json();
 }).then(function(json) {
 console.log(json);
 }).catch(function(err) {
 console.log(err);
 });	

}


fetch('https://localhost:3000/data.json')
 .then(function(response) {
 return response.json();
 }).then(function(json) {
 console.log(json);
 }).catch(function(err) {
 console.log(err);
 });

//For register

 handleSubmit(event){ 
  event.preventDefault();
  console.log(this.usname.value)
  fetch('/usersdata/{email}', {

   method: 'post',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({ 
    "name": this.usname.value,
    "email": this.emailadd.value,
    "password":this.passw.value,
    "bloodtype":this.bty.value,
    "type":this.ty.value
   })})};


 .then (results =>{
		return results.json();
	}).then(data =>{
		let users = data.results.map((usersdata)=>{
			return (
					<div key = {usersdata.results}>
					<p> usersdata.results.name </p>
					</div>
				)
		})
		this.setState({users:users});
		console.log("state",this.state.users);
	})



handleSubmit(event){ 
  event.preventDefault();
  console.log(this.usname.value)
  fetch('/usersdata/{email}', {

   method: 'post',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({ 
    "name": this.usname.value,
    "email": this.emailadd.value,
    "password":this.passw.value,
    "bloodtype":this.bty.value,
    "type":this.ty.value
   })})};



componentWillMount(){
	fetch('http://localhost:3000/users')
 		.then((Response)=>Response.json()).
 		then((findresponse)=>
 		{

 			console.log(findresponse.users)
 		}

 			)


}



	