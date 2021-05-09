import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BottomBar = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
            <Container>
                <div>
                    <FontAwesomeIcon icon="home" size="2x" />
                </div>
                <div>
                    <FontAwesomeIcon icon="search" size="2x" />
                </div>
                <div>
                    <FontAwesomeIcon icon="plus-circle" size="2x" />
                </div>
                <div>
                    <FontAwesomeIcon icon="calendar-alt" size="2x" />
                </div>
                <div>
                    <FontAwesomeIcon icon="user-circle" size="2x" />
                </div>
            </Container>
        </Navbar>
    );
}
export default BottomBar;