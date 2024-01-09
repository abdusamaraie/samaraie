import "../styles/Footer.css"

import x from "../assets/icons/X → twitter.png.png"
import linkedin from "../assets/icons/LinkedIn → linkedin.png.png"
import instagram from "../assets/icons/InstaLink → instagramlogo.png.png"

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="line blueline">
        <a href="mailto:abdu@samaraie.com"> 👋 Let's Get In Touch!</a>
      </h4>
      <div className="social flex justify-center">
        <a
          href="https://www.linkedin.com/in/abdu-samaraie/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="icon" src={linkedin} alt="linkedin" />{" "}
        </a>
        <a
          href="https://twitter.com/abdsamaraie"
          target="_blank"
          rel="noreferrer"
        >
          <img className="icon" src={x} alt="twitter" />{" "}
        </a>
        <a
          href="https://www.instagram.com/abd0pro/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="icon" src={instagram} alt="instagram" />
        </a>
      </div>
      <h6 className="name h6">
        <span id="blueStar">★</span> DESIGNED AND CODED WITH{" "}
        <span className="love">LOVE</span> BY ABDU SAMARAIE{" "}
        <span id="blueStar">★</span>
      </h6>
    </div>
  )
}

export default Footer
