import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import './index.css'

const HeaderRoute = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/Login')
  }

  return (
    <div className="header_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="header_logo-image"
      />
      <div className="home_job">
        <Link to="/">
          <li className="space">Home</li>
        </Link>
        <Link to="/">
          <li className="space">Jobs</li>
        </Link>
      </div>

      <button type="button" className="header_button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default HeaderRoute
