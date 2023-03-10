import React from 'react';
import { Dropdown,Form, DropdownButton, } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCalculator, faUserFriends, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';


function Sidebar() {


    const projects = ['Project Name 1', 'Project Name 2', 'Project Name 3', 'Project Name 4', 'Project Name 5', 'New Project +'];

    const handleProjectClick = (project) => {
      if (project === 'Add new project') {
        // handle adding new project
      } else {
        // handle selecting existing project
      }
    }
  

  return (
    <Nav className="flex-column bg-white sidebar">
      <Nav.Item>
 <FontAwesomeIcon icon={faTachometerAlt}className='side'/><h5> <DropdownButton id="project-dropdown" title="Dashboard"style={{ backgroundColor: "white" }} >
 <div style={{height:'150px', overflowY:'auto'}}>
           
            {projects.map(project => (
              <Dropdown.Item key={project} onClick={() => handleProjectClick(project)}>{project} </Dropdown.Item>
            ))} 
</div>
          </DropdownButton></h5>
        </Nav.Item>

      <Nav.Item>
        <FontAwesomeIcon icon={faUsers} className='side'/><h5> <DropdownButton id="project-dropdown" title="Client Data"style={{ backgroundColor: "white" }}>
            {projects.map(project => (
              <Dropdown.Item className= 'ditem' key={project} onClick={() => handleProjectClick(project)}>{project}  </Dropdown.Item>
            ))}
          </DropdownButton></h5>
        
        </Nav.Item>
      <Nav.Item>
 <FontAwesomeIcon icon={faCalculator} className='side' /><h5> <DropdownButton id="project-dropdown" title="Accounting"style={{ backgroundColor: "white" }}>
            {projects.map(project => (
              <Dropdown.Item key={project} onClick={() => handleProjectClick(project)}>{project}</Dropdown.Item>
            ))}
          </DropdownButton></h5>

      </Nav.Item>
      <Nav.Item>
        <FontAwesomeIcon icon={faUserFriends} className='side'/><h5> <DropdownButton id="project-dropdown" title="Human Resources"style={{ backgroundColor: "white" }}>
            {projects.map(project => (
              <Dropdown.Item key={project} onClick={() => handleProjectClick(project)}>{project}</Dropdown.Item>
            ))}
          </DropdownButton></h5>
        
      </Nav.Item>
      <Nav.Item>
        
          <FontAwesomeIcon icon={faUserFriends} className='side' /> <span className= 'team'><h6>Invite Teammates</h6></span>
        
      </Nav.Item>
      <Nav.Item>
        <FontAwesomeIcon icon={faCog} className='side'/> <h6>Settings</h6>
        
      </Nav.Item>
      <Nav.Item>
         <FontAwesomeIcon icon={faSignOutAlt} className='side'/> <h6>Logout</h6>
        </Nav.Item>
    </Nav>
  );
}

export default Sidebar;
