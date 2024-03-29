import React from "react";
import './mainpage.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Outlet, Link } from "react-router-dom";
import { MdWavingHand } from "react-icons/md";

function Main(){
    return(
     
        <div style={{backgroundColor:'white', }}>
        <div className="me"><h1>Hi <MdWavingHand size={22} style={{color:'#FF6464'}}/></h1>
        <h3>
            I'm Sarah,
        </h3>
        <h3>A Front-End Developer</h3>
        </div>
       <div className="image"> <p className="details">I specalize in turning design concepts into clean, responsive, and accessible web interface that are both visually <br/>stunning and user-friendly.<br/> My passion for coding and attention to details enable me to create high-performance websites that meet <br/>client's needs and exceed their expectations. I work with HTML5, CSS3, JavaScript, Bootstrap,React and React-Bootstrap
      <br/> <ButtonGroup className="hireproject" aria-label="Basic example">
      <Link to="/contact"> <Button style={{backgroundColor:'#FF6464', color:'white',border:'none',paddingLeft:'28 px', paddingRight:'28px'}}variant="secondary">HIRE ME</Button></Link>
     
     
    </ButtonGroup>
       </p>
       
      <div style={{backroundColor:'black'}}>
        <img size={24} className='laptop' src={process.env.PUBLIC_URL + "/my-i.png"}></img>
        </div>  
        </div>
        </div>
    )
}
export default Main