import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const HeaderRoute = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/Login')
  }

  return (
    <nav className="header_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="header_logo-image"
      />

      <ul className="home_job">
        <Link to="/">
          <li className="space">Home</li>
        </Link>
        <Link to="/Job">
          <li className="space">Jobs</li>
        </Link>
      </ul>

      <button type="button" className="header_button" onClick={onClickLogout}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(HeaderRoute)
