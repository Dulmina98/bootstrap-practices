import Container from "react-bootstrap/Container";
import "./Positions.scss"

export function Positions() {

    return (
        <div className="main-container">
            <Container>
                <div className="main-box">
                    <div className="top-left-box box">Top Left</div>
                    <div className="top-right-box box">Top Right</div>
                    <div className="bottom-left-box box">Bottom Left</div>
                    <div className="bottom-right-box box">Bottom Right</div>
                    <div className="center box">Center</div>
                </div>
            </Container>
        </div>
    )
}