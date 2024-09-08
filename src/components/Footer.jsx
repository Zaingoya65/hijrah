import React from "react";
import "./Footer.css"; 
import {Link} from "react-router-dom";

import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF, FaSquareYoutube} from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ul>
              <h5>Media</h5>
              <li>
              <Link to="/news" as={Link} >News</Link>
              </li>
              <li>
                <Link to="/announcements"  as={Link}>Announcements</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <h5>Student Links</h5>
              <li>
                 <Link to="/articles" as={Link} > Articles </Link>
              </li>
              <li>
                 <Link to="/key-dates" as={Link} > Key dates </Link>
              </li>
              <li>
              <Link to="/class-timetable" as={Link}>
               Class timetables
              </Link> 
              </li>

            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <h5>About us</h5>
              <li>
                <Link as={Link} to="/why-alhijrah">Why Al-Hijrah?</Link>
              </li>
              <li>
                <Link as={Link} to="/impact-community">Impact on Community</Link>
              </li>
              <li>
               <Link as={Link} to="/core-values">Core Values </Link>
                
              </li>
             
              <li>
              <Link as={Link} to="/labortries"> Labortries</Link>
               
              </li>
              
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <h5>Connect</h5>
              <li>
                <Link as={Link} to="/contact-us" >Contact us </Link>
             
              </li>
             
              <li>
                <Link as={Link} to="/find-event">Find an event</Link>
            
              </li>
            </ul>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/p/Al-Hijrah-Residential-School-and-college-Ziarat-Balochistan-Pakistan-100081981336719/" target="_blank">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank">
             <FaXTwitter />
            </a>
            <a href="#" target="_blank">
           <FaInstagram />
            </a>            
            <a href="#" target="_blank">
             <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/@Al-HijrahResidentialSCZiarat" target="_blank">
              <FaSquareYoutube />
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-links">
           <Link as={Link} to="/ITTeam" > IT Team</Link>
           
           <Link as={Link} to="/developer">Developer </Link>
            
            <a href="#">Website feedback</a>
          </div>
          <div className="footer-info">
            <p>Mail us : info@alhijrah.pk</p>
            <p>Contact : 0345890144</p>
            <p>Alhijrah residental School and</p>
            <p> college Ziarat Balochistan Pakistan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
