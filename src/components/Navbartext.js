import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbartext.css'
import ins from '../assets/pics/ins.jpg'
import ph from '../assets/pics/ph.jpg'
import mail from '../assets/pics/mail.jpg'
import li from '../assets/pics/li.jpg'
import wa from '../assets/pics/wa.jpg'
import fcb from '../assets/pics/fcb.jpg'

const Navbartext = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='navtext'>
                            <div className="socialmedia-div">
                                <img src={ph} /><div className='navtext'>  +1 917 300 1079</div>
                                <img src={mail} /><div className='navtext'> bluebookestimators@gmail.com </div>
                                <img src={wa} />
                                <img src={li} />
                                <img src={ins} />
                                <img src={fcb} />
                            </div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbartext