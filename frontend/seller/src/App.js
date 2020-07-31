import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import classnames from 'classnames';

import Header from './components/common/Header';
import SideNav from './components/common/SideNav';
import Footer from './components/common/Footer';
import BottomNav from './components/common/BottomNav';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Inbox from './pages/Inbox';
import Requests from './pages/Requests';
import AcceptedRequests from './pages/AcceptedRequests';
import Services from './pages/Services';
import AddService from './pages/AddService';
import Staff from './pages/Staff';
import AddStaff from './pages/AddStaff';
import ViewRequest from './pages/ViewRequest';
import Login from './pages/Login';
import Invoice from './pages/Invoice';
import RecoverPassword from './pages/RecoverPassword';
import Sale from './pages/Sale';
import Reviews from './pages/Reviews';
import Settings from './pages/Settings';
// import FlashCards from './components/common/FlashCards';
// import avatar from './images/avatar.png';

import './App.css';

function App() {
  const [sideNav, setSideNav] = useState(false);

  // const flashCards = [
  //   {
  //     name: 'Rupali Sharma',
  //     img: avatar,
  //     service: 'Cleaners',
  //     message: 'New request recieved!'
  //   },
  //   {
  //     name: 'Rupali Sharma',
  //     img: avatar,
  //     service: 'Cleaners',
  //     message: 'New request recieved!'
  //   }
  // ];

  return (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
      <div
        className={classnames('sb-nav-fixed', {
          'sb-sidenav-toggled': sideNav
        })}
      >
        <Switch>
          <Route>
            <Header toggleSideNav={() => setSideNav(!sideNav)} />
            <div id="layoutSidenav">
              <SideNav close={() => setSideNav(false)} />
              <div id="layoutSidenav_content">
                <main>
                  <Switch>
                    <Route exact path="/">
                      <Dashboard />
                    </Route>
                    <Route exact path="/notifications">
                      <Notifications />
                    </Route>
                    <Route exact path="/inbox">
                      <Inbox />
                    </Route>
                    <Route exact path="/requests">
                      <Requests />
                    </Route>
                    <Route exact path="/accepted-requests">
                      <AcceptedRequests />
                    </Route>
                    <Route exact path="/request/:id">
                      <ViewRequest />
                    </Route>
                    <Route exact path="/services">
                      <Services />
                    </Route>
                    <Route exact path="/services/add">
                      <AddService />
                    </Route>
                    <Route exact path="/staffs">
                      <Staff />
                    </Route>
                    <Route exact path="/staff/add">
                      <AddStaff />
                    </Route>
                    <Route exact path="/sale">
                      <Sale />
                    </Route>
                    <Route exact path="/reviews">
                      <Reviews />
                    </Route>
                    <Route exact path="/settings">
                      <Settings />
                    </Route>
                    <Route exact path="/login">
                      <Login />
                    </Route>
                    <Route exact path="/recover-password">
                      <RecoverPassword />
                    </Route>
                    <Route exact path="/invoice">
                      <Invoice />
                    </Route>
                  </Switch>
                  {/* <FlashCards cards={flashCards} /> */}
                </main>
                <Footer />
              </div>
            </div>
            <BottomNav toggleMenu={() => setSideNav(!sideNav)} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
