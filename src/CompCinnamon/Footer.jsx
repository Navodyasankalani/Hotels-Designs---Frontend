import React from "react"
import { AiFillTwitterCircle,AiFillFacebook } from "react-icons/ai";
import Logo from '../img/logo.png'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className='about'>
        <h4>Content</h4>
        <p>Our Destinations from Cinnamon</p>
        <p>Experience Something New from Hilton</p>
        <p>Offers from Shangri-la</p>
        <p>Footer from Cinnamon</p>
        <p>© 2025 Navodya - Dreams Hotel.</p>
        </div>
        <div className='icon'>
            <h4>Follow us</h4>
            <AiFillTwitterCircle color="white" size="1.5rem"/>
            <AiFillFacebook color="white" size="1.5rem"/>
            <AiFillTwitterCircle color="white" size="1.5rem"/>
            <AiFillFacebook color="white" size="1.5rem"/>
            <img src={Logo} alt=""  width="100px"/>
        </div>

      </footer>
    </>
  )
}

export default Footer