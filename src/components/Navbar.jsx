import { Navbar, Container, Nav } from "react-bootstrap";

function MyNavbar() {
    return (
    <Navbar bg="dark" variant="dark" expand="lg" classname="sticky-top shadow-sm">
        <Container>
        <Navbar.Brand href="/">BeritaOnLine</Navbar.Brand>
        <Nav classname="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/kategori/teknologi">Teknologi</Nav.Link>
            <Nav.Link href="/kategori/olahraga">Olahraga</Nav.Link>
            <Nav.Link href="/kategori/politik">Politik</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    );
}

export default MyNavbar;