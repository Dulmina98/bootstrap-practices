import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GridSystem() {
    return (
        <div className="main-container">
            <Container>
                <Row>
                    <Col>1 of 12</Col>
                    <Col>2 of 12</Col>
                    <Col>3 of 12</Col>
                    <Col>4 of 12</Col>
                    <Col>5 of 12</Col>
                    <Col>6 of 12</Col>
                    <Col>7 of 12</Col>
                    <Col>8 of 12</Col>
                    <Col>9 of 12</Col>
                    <Col>10 of 12</Col>
                    <Col>11 of 12</Col>
                    <Col>12 of 12</Col>
                </Row>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>
    );
}

export default GridSystem;