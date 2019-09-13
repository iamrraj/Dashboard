import React,{Component} from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import Topbar from './Container/Layout/Topbar'
// import Untopbar from './Container/Layout/Untopbar'
// import Footer from './Container/Layout/Footer'
import Dashboard from './Views/Dashboard'
import ElectricBike from './Views/Electric/ElectricBike'
import ClassicBike from './Views/Classic/ClassicBike'
import Walk from './Views/Walk/Walk'
import Edetails from './Views/Electric/Edetails'
import DetailE from './Views/Electric/DetailE'
import Cdetails from './Views/Classic/Cdetails'
import Details from './Views/Walk/Details'
import user from './Views/User/user'
import Udetails from './Views/User/Udetails'
import Login from './Container/Login'
import Notification from './Views/Page/Notification'
import Report from './Views/Page/Report'

import './App.css';

const BaseLayout = () => (

  <div>
    <Topbar />
  
          <Route path="/" exact  component={Dashboard } />
          <Route path="/electricbike"  component={ElectricBike} />
          <Route path="/classicbike"  component={ClassicBike} />
          <Route path="/walk"  component={Walk} />
          <Route path="/overview/e"  component={Edetails} />
          <Route path="/overview/4343"  component={Cdetails} />
          <Route path="/overview/365"  component={DetailE} />
          <Route path="/overview/3443"  component={Details} />
          <Route path="/user"  component={user} />
          <Route path="/overview/lol"  component={Udetails} />
          <Route path="/login"  component={Login} />
          <Route path="/notification"  component={Notification} />
          <Route path="/report"  component={Report} />

    {/* <Footer /> */}
  </div>
  
  )

class App extends Component {

  constructor(props){
    super(props);
    this.state = {

    };
  }


  render() {
  
    return (
    <BrowserRouter>
        <BaseLayout/>
    </BrowserRouter>
    
  );
  }
}
export default App;
