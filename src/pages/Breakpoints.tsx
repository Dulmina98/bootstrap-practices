import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Breakpoints() {

    return (
        <div className="main-container">
            <Container>
                <Row>
                    <Col xs={12} sm={6} lg={4} xl={1} className={"column"}>1 of 12</Col>
                    <Col xs={12} sm={6} lg={4} xl={1} className={"column"}>2 of 12</Col>
                    <Col xs={12} sm={6} lg={4} xl={1} className={"column"}>3 of 12</Col>
                    <Col xs={12} sm={6} lg={4} xl={1} className={"column"}>4 of 12</Col>
                    <Col xs={12} sm={6} lg={4} xl={1} className={"column"}>5 of 12</Col>
                    <Col xs={12} sm={6} lg={4} xl={1} className={"column"}>6 of 12</Col>
                    <Col xs={12} sm={6} lg={4} xl={1} className={"column"}>7 of 12</Col>
                    <Col xs={12} sm={6} lg={4} xl={1} className={"column"}>8 of 12</Col>
                    <Col xs={12} sm={6} lg={4} xl={1} className={"column"}>9 of 12</Col>
                    <Col xs={12} sm={6} lg={4} xl={1} className={"column"}>10 of 12</Col>
                    <Col xs={12} sm={6} lg={4} xl={1} className={"column"}>11 of 12</Col>
                    <Col xs={12} sm={6} lg={4} xl={1} className={"column"}>12 of 12</Col>
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
    )
}