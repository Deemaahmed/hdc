import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import App2 from './App2'
import Aboutus from './Aboutus'
import Aboutus2 from './Aboutus2'
import Aboutus3 from './Aboutus3'
import Donate from './Donate'
import Donation from './Donation'
import Donations from './Donations'
import Login from './Login'
import Register from './Register'
import Offers from './Offers'
import Profile from './Profile'
import Profileh2 from './Profileh2'
import EditProfileD from './EditProfileD'
import EditProfileH from './EditProfileH'
import './index.css'
import { BrowserRouter,Switch, Route} from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 



ReactDOM.render(<BrowserRouter>
      <Switch>
     
      <Route exact path="/" component={Login} />

      <Route exact path="/home2" component={App2} />
      <Route exact path="/Aboutus" component={Aboutus} />
      <Route exact path="/Aboutus2" component={Aboutus2} />
      <Route exact path="/Aboutus3" component={Aboutus3} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Donate" component={Donate} />
      <Route exact path="/Offers" component={Offers} />
      <Route exact path="/Donation" component={Donation} />
      <Route exact path="/Donations" component={Donations} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/Profileh2" component={Profileh2} />
      <Route exact path="/EditProfileD" component={EditProfileD} />
      <Route exact path="/EditProfileH" component={EditProfileH} />

      <Route path='/home1/:email' exact component={App} />
      <Route path='/home2/:email' exact component={App2} />
      <Route path='/Donation/:email' exact component={Donation} />
      <Route exact path='/Profileh2/:email' exact component={Profileh2} />
      <Route path='/Aboutus2/:email' exact component={Aboutus2} />
      <Route path="/Aboutus/:email" exact component={Aboutus} />

      <Route path='/Donate/:email' component={Donate} />
      <Route path='/Donations/:email' exact component={Donations} />
      <Route path='/Profile/:email' exact component={Profile} />
      <Route path='/EditProfileD/:email' exact component={EditProfileD} />
      <Route path='/EditProfileH/:email' exact component={EditProfileH} />




      </Switch>


</BrowserRouter>
    , document.getElementById('root'))






