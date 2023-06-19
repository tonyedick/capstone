import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Interior = () => {
  return (
    <>
      <Container fluid className="interiorBanner p-0">
      <div>
          <Container>
            <Row>
              <h1 className="interiorTitle">
                indoor/outdoor
              </h1>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Interior;
