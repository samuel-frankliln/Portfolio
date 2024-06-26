import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import chatify from '../../Assets/Projects/chatify.png';
import bitsOfCode from '../../Assets/Projects/blog.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='Water Depth Predictor'
              description='Water Depth Estimation Using Sentinel-2 Satellites for Shallow Water Directed the research and implementation of advanced algorithm’s, integrating SVMs and Deep Neural Networks to estimate shallow water depths from Sentinel-2 Satellite image bands achieving more than 90% accuracy '
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='Covid and Pneumonia Detection using X-ray Image and CNN'
              description='COVID  and Pneumonia detection model developed on Tensorflow and composed on Django framework and Flask backend with 98% accuracy.'
              ghLink='https://github.com/samuel-frankliln/covid'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
