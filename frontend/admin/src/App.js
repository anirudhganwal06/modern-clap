import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import classnames from 'classnames';

import AddService from './pages/AddService';
import Bookings from './pages/Bookings';
import Categories from './pages/Categories';
import Customers from './pages/Customers';
import Dashboard from './pages/Dashboard';
import Inbox from './pages/Inbox';
import Login from './pages/Login';
import Notifications from './pages/Notifications';
import PromoCodes from './pages/PromoCodes';
import Providers from './pages/Providers';
import Revenue from './pages/Revenue';
import Reviews from './pages/Reviews';
import Services from './pages/Services';
import Settings from './pages/Settings';
import Types from './pages/Types';
import ViewBooking from './pages/ViewBooking';
import ViewCustomer from './pages/ViewCustomer';
import ViewProvider from './pages/ViewProvider';

import Header from './components/common/Header';
import SideNav from './components/common/SideNav';
import Footer from './components/common/Footer';
import BottomNav from './components/common/BottomNav';
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
                    <Route exact path="/service/add">
                      <AddService />
                    </Route>
                    <Route exact path="/bookings">
                      <Bookings />
                    </Route>
                    <Route exact path="/categories">
                      <Categories />
                    </Route>
                    <Route exact path="/customers">
                      <Customers />
                    </Route>
                    <Route exact path="/">
                      <Dashboard />
                    </Route>
                    <Route exact path="/inbox">
                      <Inbox />
                    </Route>
                    <Route exact path="/login">
                      <Login />
                    </Route>
                    <Route exact path="/notifications">
                      <Notifications />
                    </Route>
                    <Route exact path="/promo-codes">
                      <PromoCodes />
                    </Route>
                    <Route exact path="/providers">
                      <Providers />
                    </Route>
                    <Route exact path="/revenue">
                      <Revenue />
                    </Route>
                    <Route exact path="/reviews">
                      <Reviews />
                    </Route>
                    <Route exact path="/services">
                      <Services />
                    </Route>
                    <Route exact path="/settings">
                      <Settings />
                    </Route>
                    <Route exact path="/types">
                      <Types />
                    </Route>
                    <Route exact path="/booking/:id">
                      <ViewBooking />
                    </Route>
                    <Route exact path="/customer/:id">
                      <ViewCustomer />
                    </Route>
                    <Route exact path="/provider/:id">
                      <ViewProvider />
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
