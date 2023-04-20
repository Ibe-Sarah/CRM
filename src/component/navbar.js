import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Modal, ProgressBar , Card, Button} from "react-bootstrap";
import {useState} from 'react'
import {Link} from 'react-router-dom'
function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false)
  const [showProject2Modal, setShowProject2Modal] = useState(false)
  const [showProject3Modal, setShowProject3Modal] = useState(false)

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleShowProjectModal = () => setShowProjectModal(true);
  const handleCloseProjectModal = () => setShowProjectModal(false);
  const handleShowProject2Modal = () => setShowProject2Modal(true);
  const handleCloseProject2Modal = () => setShowProject2Modal(false);
  const handleShowProject3Modal = () => setShowProject3Modal(true);
  const handleCloseProject3Modal = () => setShowProject3Modal(false);

  return (
    <>
    <Navbar style={{fontFamily:'clash Grotesk sans-serif', boxShadow:' 0 4px 8px 0 rgba(0,0,0,0.2)'}} bg="#EDF7FA" expand="lg" >
      <Container>
        <Navbar.Brand className="ms-auto" href="#home">SARAH IBE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            {/* <Nav.Link href="#home">About</Nav.Link> */}
            {/* <Link to="/contact"> <Nav.Link href="#">Contact</Nav.Link></Link> */}
            <NavDropdown style={{fontFamily:'clash Grotesk sans-serif',}} title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleShowProjectModal}>Project 1</NavDropdown.Item>
              <NavDropdown.Item onClick={handleShowProject2Modal}>
              Project 2
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={handleShowProject3Modal}>Project 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleShowModal}>
          My Skills
        </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>My Skills</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{fontFamily:'clash Grotesk sans-serif'}} className="skill-bar">
            <span>HTML</span>
            <ProgressBar now={90} label={`90%`} />
          </div>
          <div style={{fontFamily:'clash Grotesk sans-serif'}} className="skill-bar">
            <span>CSS</span>
            <ProgressBar now={85} label={`85%`} />
          </div>
          <div style={{fontFamily:'clash Grotesk sans-serif'}} className="skill-bar">
            <span>JavaScript</span>
            <ProgressBar now={65} label={`65%`} />
          </div>
          <div  style={{fontFamily:'clash Grotesk sans-serif'}}className="skill-bar">
            <span>React</span>
            <ProgressBar now={50} label={`50%`} />
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showProjectModal} onHide={handleCloseProjectModal}>
        <Modal.Header closeButton>
          <Modal.Title style={{}}>Project 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/landing.png"} />
            <Card.Body>
              <Card.Text style={{fontFamily:'clash Grotesk sans-serif'}} >
                This is a project I built using React and Bootstrap. It is a landing page for a CRM. Check it out on{" "}
                <a href="https://github.com/your-username/project-1">
                  GitHub
                </a>
                .
              </Card.Text>
              <Button variant="primary" onClick={handleCloseProjectModal}>
                Close
              </Button>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>

      <Modal show={showProject2Modal} onHide={handleCloseProject2Modal}>
        <Modal.Header closeButton>
          <Modal.Title>Project 2</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/election.png"} />
            <Card.Body>
              <Card.Text style={{fontFamily:'clash Grotesk sans-serif'}}>
                This is a project I built using HTML and CSS. It is a form for voters' opinion on their state election. Check
                it out on{" "}
                <a href="https://github.com/Ibe-Sarah/Election">
                  GitHub
                </a>
                .
              </Card.Text>
              <Button variant="primary" onClick={handleCloseProject2Modal}>
                Close
              </Button>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>

      <Modal  show={showProject3Modal} onHide={handleCloseProject3Modal}>
        <Modal.Header closeButton>
          <Modal.Title>Project 3</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/home.png"} />
            <Card.Body>
              <Card.Text style={{fontFamily:'clash Grotesk sans-serif'}}>
                This is a project I built using HTML, CSS and Bootstrap. It is a homepage for a healt-care service provider. Check
                it out on{" "}
                <a href="https://github.com/Ibe-Sarah/homepage">
                  GitHub
                </a>
                .
              </Card.Text>
              <Button variant="primary" onClick={handleCloseProject3Modal}>
                Close
              </Button>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>



      <style jsx>{`
        .skill-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .skill-bar span {
          margin-right: 10px;
          width: 100px;
        }
        @media only screen and (max-width: 767px) {
          .skill-bar {
            flex-direction: column;
          }
          .skill-bar span {
            margin-bottom: 10px;
            width: auto;
          }
          .skill-bar :global(.progress) {
            margin-bottom: 10px;
          }
        }
      `}</style>
 
    </>
  );
}

export default Header;