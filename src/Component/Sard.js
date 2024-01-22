import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TShirt from './TShirt';

function Sard() {
  return (
    <Card style={{ width: '100%' }}>
      <Row>
        <Col>
          <TShirt index={0} />
        </Col>
        <Col>
          <TShirt index={1} />
        </Col>
        <Col>
          <TShirt index={2} />
        </Col>
      </Row>
    </Card>
  );
}

export default Sard;
