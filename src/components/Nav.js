import React from 'react';
import '../dist'

function Nav({ currentPage, handlePageChange }) {
  return (
    <h1 className="bg-night h-200 text-green-500">Malia Yraguen</h1>
    // <Navbar bg="light">
    //   <Container>
    //     <Navbar.Brand href="#home">MY</Navbar.Brand>
    //     <Nav className="me-auto">
    //       <Nav.Link href="#home"
    //         onClick={() => handlePageChange('Home')}
    //         className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
    //       >Home</Nav.Link>
    //       <Nav.Link href="#about"
    //         onClick={() => handlePageChange('About')}
    //         className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
    //       >About</Nav.Link>
    //       <Nav.Link href="#Portfolio"
    //         onClick={() => handlePageChange('Portfolio')}
    //         className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Nav.Link>
    //       <Nav.Link href="#Contact"
    //         onClick={() => handlePageChange('Contact')}
    //         className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
    //       <Nav.Link href="https://github.com/malxxy">GitHub</Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
  );
}

export default Nav;