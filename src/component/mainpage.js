import React from "react";
import './mainpage.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Outlet, Link } from "react-router-dom";


function Main(){
    return(
     
        <div style={{backgroundColor:'black'}}>
        <div className="me"><h1>Hi</h1>
        <h3>
            I'm Sarah,
        </h3>
        <h3>A Front-End Developer</h3>
        </div>
       <div className="image"> <p className="details">I specalize in turning design concepts into clean, responsive, and accessible web interface that are both visually stunning and user-friendly. My passion for coding and attention to details enable me to create high-performance websites that meet client's needs and exceed their expectations. I work with HTML5, CSS3, JavaScript, Bootstrap,React and React-Bootstrap
      <br/> <ButtonGroup className="hireproject" aria-label="Basic example">
      <Link to="/contact"> <Button style={{backgroundColor:'black'}}variant="secondary">HIRE ME</Button></Link>
     
     
    </ButtonGroup>
       </p>
       
        <img size={24} className='laptop' src={process.env.PUBLIC_URL + "/coding.png"}></img>
        </div>
        </div>
    )
}
export default Main