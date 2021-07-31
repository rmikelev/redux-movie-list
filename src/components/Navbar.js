
import { Link } from 'react-router-dom';
import RBNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/container';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
    return (
        <RBNavbar>
            <Container>
                <RBNavbar.Brand href="/">Movie Data Base</RBNavbar.Brand>
                <RBNavbar.Toggle /> 
                    <RBNavbar.Collapse> 
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/movie-list">Movie</Nav.Link>  
                        </Nav> 
                    </RBNavbar.Collapse>
            </Container>

        </RBNavbar>
    );
}

export default Navbar; 