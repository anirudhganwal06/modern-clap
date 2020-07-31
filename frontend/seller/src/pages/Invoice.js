import React from 'react';

import { Container } from 'react-bootstrap';

const Invoice = () => {
  document.title = 'Invoice - Modernclap';

  return (
    <Container fluid>
      <h1 className="mt-4 dv_page_heading">Invoice </h1>
      <div className="invoice-box">
        <table cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr className="top">
              <td colSpan={2}>
                <table>
                  <tbody>
                    <tr>
                      <td className="title">ModernClap</td>
                      <td>
                        Invoice #: MD12345
                        <br />
                        Booking Date: 12/12/2020
                        <br />
                        Service Date: 14/12/2020
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="information">
              <td colSpan={2}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Provider</strong>
                        <br />
                        Suhana Beauty Lounge
                        <br />
                        <span style={{ fontSize: '13px' }}>Mumbai</span>
                      </td>
                      <td>
                        <strong>Customer</strong>
                        <br />
                        Rose Camrela
                        <br />
                        <span style={{ fontSize: '13px' }}>Mumbai</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="details">
              <td>Check</td>
              <td>1000</td>
            </tr>
            <tr className="heading">
              <td>Item</td>
              <td>Price</td>
            </tr>
            <tr className="item">
              <td>Website design</td>
              <td>$300.00</td>
            </tr>
            <tr className="item">
              <td>Hosting (3 months)</td>
              <td>$75.00</td>
            </tr>
            <tr className="item last">
              <td>Domain name (1 year)</td>
              <td>$10.00</td>
            </tr>
            <tr className="total">
              <td />
              <td>Total: $385.00</td>
            </tr>
            <tr className="heading">
              <td>Payment Method</td>
              <td>Cash After service</td>
            </tr>
            <tr className="item last">
              <td>Pay by Cash after Service</td>
              <td>
                <span style={{ color: 'green' }}>Paid </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Invoice;
