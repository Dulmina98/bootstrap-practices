import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Breakpoints() {

    return (
        <div className="main-container">
            <Container>
                <Row>
                    <Col sm={12} lg={6} xl={3} className={"column"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Architecto eveniet facilis iusto laboriosam nisi optio praesentium quia quidem sapiente
                        sequi? Accusantium architecto enim rem sequi.</Col>
                    <Col sm={12} lg={6} xl={3} className={"column"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Architecto eveniet facilis iusto laboriosam nisi optio praesentium quia quidem sapiente
                        sequi? Accusantium architecto enim rem sequi.</Col>
                    <Col sm={12} lg={6} xl={3} className={"column"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Architecto eveniet facilis iusto laboriosam nisi optio praesentium quia quidem sapiente
                        sequi? Accusantium architecto enim rem sequi.</Col>
                    <Col sm={12} lg={6} xl={3} className={"column"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Architecto eveniet facilis iusto laboriosam nisi optio praesentium quia quidem sapiente
                        sequi? Accusantium architecto enim rem sequi.</Col>
                </Row>
                <Row>
                    <Col>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eveniet facilis iusto
                        laboriosam nisi optio praesentium quia quidem sapiente sequi? Accusantium architecto enim rem
                        sequi.</Col>
                    <Col>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eveniet facilis iusto
                        laboriosam nisi optio praesentium quia quidem sapiente sequi? Accusantium architecto enim rem
                        sequi.</Col>
                    <Col>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eveniet facilis iusto
                        laboriosam nisi optio praesentium quia quidem sapiente sequi? Accusantium architecto enim rem
                        sequi.</Col>
                </Row>
            </Container>
        </div>
    )
}