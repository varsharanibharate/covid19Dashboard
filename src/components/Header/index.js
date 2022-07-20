import {Component} from 'react'
import {Link} from 'react-router-dom'
import {ImMenu2} from 'react-icons/im'

import './index.css'

class Header extends Component {
  state = {isToggleActive: false}

  whenToggleButtonClick = () => {
    this.setState(prevState => ({isToggleActive: !prevState.isToggleActive}))
  }

  showDropDownMenu = () => (
    <>
      <ul className="navBar">
        <Link to="/" className="link">
          <li className="item">Home</li>
        </Link>
        <Link to="/about" className="link">
          <li className="item">About</li>
        </Link>
        <Link to="/vaccination" className="link">
          <li className="item">Vaccination</li>
        </Link>
      </ul>
    </>
  )

  render() {
    const {isToggleActive} = this.state
    console.log(isToggleActive)
    return (
      <>
        <div className="header-container">
          <Link to="/" className="link">
            <h1 className="logo">
              COVID19<span className="india">INDIA</span>
            </h1>
          </Link>
          <ul className="navBar">
            <Link to="/" className="link">
              <li className="item">Home</li>
            </Link>
            <Link to="/about" className="link">
              <li className="item">About</li>
            </Link>

            <Link to="/vaccination" className="link">
              <li className="item">Vaccination</li>
            </Link>
          </ul>
        </div>
        <div className="mobile-menu">
          <div className="mobile-header-container">
            <Link to="/" className="link">
              <h1 className="logo">
                COVID19<span className="india">INDIA</span>
              </h1>
            </Link>
            <button
              type="button"
              className="toggle-button"
              onClick={this.whenToggleButtonClick}
            >
              <ImMenu2 className="menuIcon" alt="menu" />
            </button>
          </div>
          <div className="menu">
            {isToggleActive ? this.showDropDownMenu() : null}
          </div>
        </div>
      </>
    )
  }
}

export default Header
