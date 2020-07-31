import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormFileInput from 'react-bootstrap/FormFileInput';
import FormFileLabel from 'react-bootstrap/FormFileLabel';
import Button from 'react-bootstrap/Button';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const Careers = () => {
  document.title = 'Careers | Modern clap';

  return (
    <div className="dv_wrapper">
      <Header
        title="Careers"
        desc="We’re looking for creative, collaborative individuals to join our team!"
        headerClassName="dv_career_header"
      />
      <div className="dv_content">
        <div className="dv_career_form_wrapper">
          <Container>
            <div className="dv_career_container">
              <label className="dv_career_section">Personal Details </label>
              <Form.Control as="select" className="dv_careers_form_input" defaultValue="">
                <option value="" hidden disabled>Job title</option>
                <option value="Fresher">Fresher</option>
                <option value="Jr. Asp.net Developer">
                  Jr. Asp.net Developer (0.6 to 3 year)
                </option>
                <option value="Sr. Asp.net Developer">
                  Sr. Asp.net Developer (above 3 year)
                </option>
                <option value="Jr. SQL Database Developer">
                  Jr. SQL Database Developer
                </option>
                <option value="Sr. SQL Database Developer">
                  Sr. SQL Database Developer
                </option>
                <option value="Jr. Graphic Designer">
                  Jr. Graphic Designer (1 to 3 year)
                </option>
                <option value="Sr. Graphic Designer">
                  Sr. Graphic Designer (above 3 year)
                </option>
                <option value="Jr. Web Designer">
                  Jr. Web Designer (1 to 3 year)
                </option>
                <option value="Sr. Web Designer">
                  Sr. Web Designer (above 3 year)
                </option>
                <option value="Jr. SEO / SMO executive">
                  Jr. SEO / SMO executive
                </option>
                <option value="Sr. SEO / SMO executive">
                  Sr. SEO / SMO executive
                </option>
                {/* <option value="Business Development Executive"> Business Development Executive</option> */}
                <option value="Business Development Manager">
                  Business Development Manager
                </option>
                <option value="Tele Sales Executive">
                  Tele Sales Executive
                </option>
                <option value="Data Entry Operator">Data Entry Operator</option>
                <option value="Other"> Other</option>
              </Form.Control>
              <Form.Control
                type="text"
                className="dv_careers_form_input"
                placeholder="Full Name"
              />
              <Form.Control
                type="text"
                className="dv_careers_form_input"
                placeholder="Mobile"
              />
              <Form.Control
                type="date"
                className="dv_careers_form_input"
                placeholder="DOB"
              />
              <Form.Control
                type="text"
                className="dv_careers_form_input"
                placeholder="Email ID"
              />
              <div className="dv_male_female">
                <Form.Check type="radio" custom inline>
                  <Form.Check.Input
                    type="radio"
                    id="customRadio"
                    name="example"
                    defaultValue="customEx"
                  />
                  <Form.Check.Label htmlFor="customRadio">
                    Male
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="radio" custom inline>
                  <Form.Check.Input
                    type="radio"
                    id="customRadio2"
                    name="example"
                    defaultValue="customEx"
                  />
                  <Form.Check.Label htmlFor="customRadio2">
                    Female
                  </Form.Check.Label>
                </Form.Check>
              </div>
              <Form.Control
                type="text"
                className="dv_careers_form_input"
                placeholder="Address"
              />
              <Form.Control
                type="text"
                className="dv_careers_form_input"
                placeholder="City"
              />
              <Form.Control as="select" className="dv_careers_form_input" defaultValue="">
                <option value="">Martial Status </option>
                <option value="Married">Married </option>
                <option value="unmarried">unmarried </option>
                <option value="Divorced">Divorced </option>
              </Form.Control>
              <label className="dv_career_section">Academic Details </label>
              <Form.Control
                type="text"
                className="dv_careers_form_input"
                placeholder="Highest Qualification"
              />
              <Form.Control
                type="text"
                className="dv_careers_form_input"
                placeholder="Year of Passing"
              />
              <Form.Control
                type="text"
                className="dv_careers_form_input"
                placeholder="Percentange"
              />
              <Form.Control
                type="text"
                className="dv_careers_form_input"
                placeholder="Collage"
              />
              <Form.Control
                type="text"
                className="dv_careers_form_input"
                placeholder="University"
              />
              <Form.Control
                type="text"
                className="dv_careers_form_input"
                placeholder="Skills"
              />
              <Form.Control
                type="text"
                className="dv_careers_form_input"
                placeholder="Other Details"
              />
              <label className="dv_career_section">Experience Details </label>
              <Form.Control as="select" className="dv_careers_form_input" defaultValue="">
                <option value="" hidden disabled>
                  Total Experice
                </option>
                <option value="Fresher">Fresher</option>
                <option value="Less than 11 Month">Less than 11 Month</option>
                <option value="1 year">1 year</option>
                <option value="2 year">2 year</option>
                <option value="3 year">3 year</option>
                <option value="4 year">4 year</option>
                <option value="5 year">5 year</option>
                <option value="6 year">6 year</option>
                <option value="7 year">7 year</option>
                <option value="8 year">8 year</option>
                <option value="9 year">9 year</option>
                <option value="10+ year">10 year</option>
              </Form.Control>
              <Form.Control as="select" className="dv_careers_form_input" defaultValue="">
                <option value="" hidden disabled>Notice Period </option>
                <option value="Immediate">Immediate</option>
                <option value="1 week">1 week</option>
                <option value="1 months">1 month</option>
                <option value="2 months">2 months</option>
                <option value="3 months">3 months</option>
                <option value="4 months">4 months</option>
                <option value="5 months">5 months</option>
                <option value="6 months">6 months</option>
              </Form.Control>
              <Form.File custom className="mb-3">
                <FormFileInput
                  id="customFile"
                  className="form-control dv_careers_form_input"
                  name="filename"
                />
                <FormFileLabel
                  htmlFor="customFile"
                  className="form-control dv_attach_resume"
                >
                  Attach Resume
                </FormFileLabel>
              </Form.File>
              <Button className="btn-default dv_submit_Career">Submit</Button>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
