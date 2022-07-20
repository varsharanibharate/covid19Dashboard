import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-main-container">
    <div className="not-found-data">
      <img
        src="https://res.cloudinary.com/amst/image/upload/v1639762911/notfnd_e79uve.jpg"
        alt="not-found-pic"
        className="not-found-image"
      />

      <h1 className="not-found-title">PAGE NOT FOUND</h1>
      <p className="not-found-para">
        we are sorry, the page you requested could not be found
      </p>

      <div className="button-container">
        <Link to="/">
          <button type="button" className="home-button">
            Home
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default NotFound
