import React from 'react'
import './footer.css'
import location from '../assets/pics/location.jpg'
import phone from '../assets/pics/phone.jpg'
import email from '../assets/pics/email.jpg'
import linkedin from '../assets/pics/linkedin.jpg'
import whatsapp from '../assets/pics/whatsapp.jpg'
import insta from '../assets/pics/insta.JPG'
import fb from '../assets/pics/fb.JPG'


const Footer = () => {
  return (<>
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
          <div className='sb_footer-links_div'>
            <hr /><h2 className='blb'>Blue Book Estimator</h2><hr />
            <a href='/#'>
              <p> The Blue Book Estimator  ®, is a professional cost estimation consultancy specializing in providing detailed construction cost estimates. Our cost consultants provide our clients, both public and private institutions with different office locations throughout the United States with expert, data-driven guidance on their construction projects.</p>
            </a>
          </div>
          <div className='sb_footer-links_div'>
            <hr />
            <h2>Navigation</h2><hr />
            <a href='/#'>
              <h3> Services</h3>
              <h3> Project</h3>
              <h3> Contact Us</h3>
              <h3> About Us</h3>
            </a>
          </div>
          <div className='sb_footer-links_div'>
            <hr /> <h2>Contact</h2><hr />

            <div className='socialmedia'>
              <div className="location-div"><img src={location} /> <div style={{ "text-align": "end" }}> Head Office: 102-12, <br />Arlington, VA 22201 United States</div></div>
              <div className="location-div"><img src={phone} /> <div className='phone-div'>  +1 917 300 1079</div></div>
              <div className="location-div"><img src={email} /> <div className='phone-div'> bluebookestimator@gmail.com </div></div>
              <div className="socialmedia-div"><img src={linkedin}  /><img src={whatsapp} /><img src={insta} /><img src={fb} /> </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default Footer