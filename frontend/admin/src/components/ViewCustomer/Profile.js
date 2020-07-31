import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Col } from 'react-bootstrap';
import NumberCard from '../common/NumberCard';

const Profile = ({ active }) => {
  return (
    <div id="basicinfo" className={classnames('tab-pane', { active })}>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              style={{
                float: 'left',
                width: '60px',
                borderRadius: '50%'
              }}
              alt=""
            />
            <div className="dv_provider_customer_details">
              <h4>sanjay sakpal </h4>
              <ul>
                <li>
                  Mobile No : <strong>971 56 765 4321 &nbsp;</strong>
                </li>
                <li>
                  Email ID : <strong>demo@gmail.com &nbsp;</strong>
                </li>
                <li>
                  Status : <strong>Active &nbsp;</strong>
                </li>
                <li>
                  Member Since : <strong>13, Dec 20 </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <h4
            style={{
              margin: '15px 0 15px -8px',
              fontSize: '14px',
              textAlign: 'left',
              textTransform: 'uppercase',
              borderBottom: '1px solid #d7d7d7',
              display: 'block',
              padding: '15px 0 15px 24px',
              width: '100%',
              fontFamily: 'Segoe ui bold',
              borderTop: '1px solid #d7d7d7',
              background: '#ececec'
            }}
          >
            overview{' '}
          </h4>
          <Col xs={12} md={6} xl={3}>
            <NumberCard title="Total Bookings" value={32} />
          </Col>
          <Col xs={12} md={6} xl={3}>
            <NumberCard title="Cancelled" value={32} />
          </Col>
          <Col xs={12} md={6} xl={3}>
            <NumberCard title="Completed" value={32} />
          </Col>
          <Col xs={12} md={6} xl={3}>
            <NumberCard title="Ongoing" value={32} />
          </Col>
        </div>
        <div className="row">
          <h4
            style={{
              margin: '15px 0 15px -8px',
              fontSize: '14px',
              textAlign: 'left',
              textTransform: 'uppercase',
              borderBottom: '1px solid #d7d7d7',
              display: 'block',
              padding: '15px 0 15px 24px',
              width: '100%',
              fontFamily: 'Segoe ui bold',
              borderTop: '1px solid #d7d7d7',
              background: '#ececec'
            }}
          >
            details{' '}
          </h4>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label>Customer Name</label>
              <input
                type="text"
                className="form-control dv_all_inputs"
                placeholder="e g: ronny"
                defaultValue="sanjay sakpal"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label>Customer Email</label>
              <input
                type="text"
                className="form-control dv_all_inputs"
                placeholder="e g: ronny@gmail.com"
                defaultValue="sanjaysakpal@gmail.com"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label>Status</label>
              <select className="form-control dv_all_inputs">
                <option>Active </option>
                <option>In-Active </option>
              </select>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label>Member since </label>
              <input
                type="text"
                className="form-control dv_all_inputs"
                placeholder="e g:12/12/2001"
                defaultValue="12/12/2019"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                id="customRadio"
                name="example"
                defaultValue="customEx"
              />
              <label className="custom-control-label" htmlFor="customRadio">
                Male{' '}
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                id="customRadio2"
                name="example"
                defaultValue="customEx"
              />
              <label className="custom-control-label" htmlFor="customRadio2">
                Female{' '}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  active: PropTypes.bool.isRequired
};

export default Profile;
