import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavbarDiary = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <div>
                    <FontAwesomeIcon icon="arrow-left" />
                    <Navbar.Brand href="#" className="pl-4">
                        <span className="text-info font-weight-bold">my</span> <span className="font-weight-bold">hair diary</span>
                    </Navbar.Brand>
                </div>
                <div>
                    <Navbar.Brand href="#">
                        <span className="font-weight-bold">Jan</span> 2021
                    </Navbar.Brand>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavbarDiary;