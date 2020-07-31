import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BlogCard from '../components/Blogs/BlogCard';

const Blogs = () => {
  document.title = 'Blogs | Modern clap';

  const blogs = [
    {
      heading: 'Blog heading',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod..!',
      date: '12/12/2020',
      imgSrc: './images/blog-list.jpg',
      link: '#!'
    },
    {
      heading: 'Blog heading',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod..!',
      date: '12/12/2020',
      imgSrc: './images/blog-list.jpg',
      link: '#!'
    },
    {
      heading: 'Blog heading',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod..!',
      date: '12/12/2020',
      imgSrc: './images/blog-list.jpg',
      link: '#!'
    }
  ];

  const blogsJSX = blogs.map((blog, index) => (
    <Col key={index} xs={12} sm={6} md={4}>
      <BlogCard
        heading={blog.heading}
        desc={blog.desc}
        date={blog.date}
        imgSrc={blog.imgSrc}
        link={blog.link}
      />
    </Col>
  ));

  return (
    <div className="dv_wrapper">
      <Header
        title="Blog"
        desc="A blog is a discussion or informational data published on the Web"
        headerClassName="dv_blog_header"
      />
      <div className="dv_content">
        <div className="dv_terms_conditions">
          <Container>
            <Row>{blogsJSX}</Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
