import React from 'react';

import { Link } from 'react-router-dom';

const TimingSelector = () => {
  return (
    <>
      <ul className="dv_timing_selection">
        <li>
          <Link to="#!">
            <span className="dv_day_txt">today </span> 24
          </Link>
        </li>
        <li>
          <Link to="#!" className="active">
            <span className="dv_day_txt">tom </span> 25
          </Link>
        </li>
        <li>
          <Link to="#!">
            <span className="dv_day_txt">Wed </span> 26
          </Link>
        </li>
        <li>
          <Link to="#!">
            <span className="dv_day_txt">Thus </span> 27
          </Link>
        </li>
        <li>
          <Link to="#!">
            <span className="dv_day_txt">Fri </span> 28
          </Link>
        </li>
        <li>
          <Link to="#!">
            <span className="dv_day_txt">sat </span> 29
          </Link>
        </li>
        <li>
          <Link to="#!">
            <span className="dv_day_txt">sun </span> 30
          </Link>
        </li>
      </ul>
      <ul className="dv_timing_selection">
        <li>
          <Link to="#!" className="active">
            10 AM
          </Link>
        </li>
        <li>
          <Link to="#!"> 11 AM </Link>
        </li>
        <li>
          <Link to="#!"> 12 AM </Link>
        </li>
        <li>
          <Link to="#!"> 01 PM </Link>
        </li>
        <li>
          <Link to="#!"> 02 PM </Link>
        </li>
        <li>
          <Link to="#!"> 03 PM </Link>
        </li>
        <li>
          <Link to="#!"> 04 PM </Link>
        </li>
        <li>
          <Link to="#!"> 05 PM </Link>
        </li>
        <li>
          <Link to="#!"> 06 PM </Link>
        </li>
        <li>
          <Link to="#!"> 07 PM </Link>
        </li>
        <li>
          <Link to="#!"> 08 PM </Link>
        </li>
        <li>
          <Link to="#!"> 09 PM </Link>
        </li>
        <li>
          <Link to="#!"> 10 PM </Link>
        </li>
      </ul>
    </>
  );
};

export default TimingSelector;
