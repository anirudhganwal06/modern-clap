import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ReactComponent as Cleaners } from '../../svgs/cleaners.svg';
import { ReactComponent as OnlineFitness } from '../../svgs/online-fitness.svg';
import { ReactComponent as LadiesSalon } from '../../svgs/ladies-salon.svg';
import { ReactComponent as GentsSalon } from '../../svgs/gents-salon.svg';
import { ReactComponent as Disinfection } from '../../svgs/disinfection.svg';
import { ReactComponent as DeepCleaning } from '../../svgs/deep-cleaning.svg';
import { ReactComponent as Handyman } from '../../svgs/handyman.svg';
import { ReactComponent as Electrician } from '../../svgs/electrician.svg';
import { ReactComponent as Painters } from '../../svgs/painters.svg';
import { ReactComponent as PackersAndMovers } from '../../svgs/packers-and-movers.svg';
import { ReactComponent as ACTechnician } from '../../svgs/ac-technician.svg';
import { ReactComponent as PestControl } from '../../svgs/pest-control.svg';

const CategoryBox = () => {
  const categories = [
    {
      name: 'cleaners',
      icon: <Cleaners />,
      url: 'cleaners'
    },
    {
      name: 'online fitness',
      icon: <OnlineFitness />,
      url: 'online-fitness'
    },
    {
      name: 'ladies salon',
      icon: <LadiesSalon />,
      url: 'ladies-salon'
    },
    {
      name: 'gents salon',
      icon: <GentsSalon />,
      url: 'gents-salon'
    },
    {
      name: 'disinfection',
      icon: <Disinfection />,
      url: 'disinfection'
    },
    {
      name: 'deep cleaning',
      icon: <DeepCleaning />,
      url: 'deep-cleaning'
    },
    {
      name: 'handyman',
      icon: <Handyman />,
      url: 'handyman'
    },
    {
      name: 'electrician',
      icon: <Electrician />,
      url: 'electrician'
    },
    {
      name: 'painters',
      icon: <Painters />,
      url: 'painters'
    },
    {
      name: 'packers & movers',
      icon: <PackersAndMovers />,
      url: 'packers-and-movers'
    },
    {
      name: 'AC Technicians',
      icon: <ACTechnician />,
      url: 'ac-technician'
    },
    {
      name: 'pest controls',
      icon: <PestControl />,
      url: 'pest-control'
    }
  ];

  const categoriesJSX = categories.map(category => (
    <Col md={2} xs={4} className="dv_all_cat_2" key={category.name}>
      <Link to={'/book-now?category=' + category.url}>
        {category.icon}
        {category.name}
        {/* <span class="dv_off_percentage_show">31% off </span>
         */}
      </Link>
    </Col>
  ));

  return (
    <div className="dv_all_category">
      <Container>
        <div className="dv_all_category_card">
          <Row>{categoriesJSX}</Row>
        </div>
      </Container>
    </div>
  );
};

export default CategoryBox;
