import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="footer-bg-container">
    <div className="footer-responsive-container">
      <h1 className="footer-heading">
        COVID19<span className="footer-span-heading">INDIA</span>
      </h1>
      <p className="footer-description">
        we stand with everyone fighting on the front lines
      </p>
      <div className="footer-icons-container">
        <VscGithubAlt fontSize="48" color="#CBD5E1" />
        <FiInstagram fontSize="48" color="#CBD5E1" />
        <FaTwitter fontSize="48" color="#CBD5E1" />
      </div>
    </div>
  </div>
)

export default Footer
