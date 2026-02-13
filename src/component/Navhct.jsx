// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// const Navhct = () => {
//   return (
//     <div>
//        <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home"    >HYBRID CLOUD</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">About Us</Nav.Link>
//             <Nav.Link href="#link">Contact Us</Nav.Link>
            
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </div>
//   )
// }

// export default Navhct



import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navhct = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="assets/hybrid.svg"
            alt=""
            height="32"
            className="me-2"
          />
          <span className="fw-semibold"></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link href="#home" ><Link to={'/'} style={{textDecoration:"none",fontWeight:"bold"}}>Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={'/about'} style={{textDecoration:"none" ,fontWeight:"bold"}}>About Us</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={'/contactus'} style={{textDecoration:"none",fontWeight:"bold"}}>Contact Us</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={'/courses'} style={{textDecoration:"none",fontWeight:"bold"}}>Courses</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navhct
 