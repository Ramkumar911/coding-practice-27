// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-cont">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
      alt="website logo"
      className="logo"
    />
    <div className="nav-items-cont">
      <p className="home">Home</p>
      <p className="home">Products</p>
      <button type="button" className="home">
        Logout
      </button>
    </div>
  </nav>
)
export default Header
