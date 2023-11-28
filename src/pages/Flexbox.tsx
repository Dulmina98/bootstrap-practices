import Container from "react-bootstrap/Container";
import "./Positions.scss"

export function Flexbox() {

    return (
        <div className="main-container">
            <Container>
                <div className="main-box">
                    <div className="top-left-box box">1</div>
                    <div className="top-right-box box">2</div>
                    <div className="bottom-left-box box">3</div>
                    <div className="bottom-right-box box">4</div>
                    <div className="center box">5</div>
                </div>
            </Container>
        </div>
    )
}