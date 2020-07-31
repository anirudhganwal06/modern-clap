import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import AboutUs from './pages/static/AboutUs';
import Blogs from './pages/Blogs';
import MyBookings from './pages/MyBookings';
import BookingDetails from './pages/BookingDetails';
import Careers from './pages/Careers';
import ContactUs from './pages/static/ContactUs';
import Landing from './pages/Landing';
import PrivacyPolicy from './pages/static/PrivacyPolicy';
import TermsAndConditions from './pages/static/TermsAndConditions';
import Reviews from './pages/Reviews';
import SelectServices from './pages/SelectServices';
import ProviderLogin from './pages/ProviderLogin';
import ProviderRegistration from './pages/ProviderRegistration';
import ServiceDetails from './pages/ServiceDetails';
import ScrollToTop from './components/common/ScrollToTop';
import MobileSeach from './pages/MobileSearch';
import MyReviews from './pages/MyReviews';

import { setLoggedIn, currentUser } from './app/cache';

const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isAuthenticated {
      __typename
      ...on Customer {
        _id
        name
      }
    }
  }
`;

function App() {
  const { loading, data } = useQuery(IS_LOGGED_IN);

  if (!loading && data) {
    console.log(data.isAuthenticated);
    setLoggedIn(true);
    currentUser(data.isAuthenticated);
  }

  return (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/blogs">
          <Blogs />
        </Route>
        <Route exact path="/bookings">
          <MyBookings />
        </Route>
        <Route exact path="/booking-details">
          <BookingDetails />
        </Route>
        <Route exact path="/careers">
          <Careers />
        </Route>
        <Route exact path="/contact-us">
          <ContactUs />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/terms-and-conditions">
          <TermsAndConditions />
        </Route>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
        <Route exact path="/my-reviews">
          <MyReviews />
        </Route>
        <Route exact path="/book-now">
          <SelectServices />
        </Route>
        <Route exact path="/provider/login">
          <ProviderLogin />
        </Route>
        <Route exact path="/provider/register">
          <ProviderRegistration />
        </Route>
        <Route exact path="/service/:service">
          <ServiceDetails />
        </Route>
        <Route exact path="/search">
          <MobileSeach />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
