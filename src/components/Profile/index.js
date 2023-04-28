import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ProfileCard from '../ProfileCard'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Profile extends Component {
  state = {ProfileDetails: [], apistatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getProfileDetails()
  }

  getFormatedData = data => ({
    name: data.name,
    profileImageUrl: data.profile_image_url,
    shortBio: data.short_bio,
  })

  getProfileDetails = async () => {
    this.setState({apistatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer${jwtToken}`,
      },
      method: 'GET',
    }

    const response = fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = this.getFormatedData(fetchedData.profile_details)
      this.setState({
        ProfileDetails: updatedData,
        apistatus: apiStatusConstants.success,
      })
    }
    if (response.status === 401) {
      this.setState({apistatus: apiStatusConstants.failure})
    }
  }

  renderProfileSuccessView = () => {
    const {ProfileDetails} = this.state
    return (
      <div>
        <ul>
          <ProfileCard ProfileData={ProfileDetails} key={ProfileDetails.id} />
        </ul>
      </div>
    )
  }

  renderProfilefailureView = () => <button type="button">Retry</button>

  renderProfileLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  render() {
    const {apistatus} = this.state

    switch (apistatus) {
      case apiStatusConstants.success:
        return this.renderProfileSuccessView()

      case apiStatusConstants.failure:
        return this.renderProfilefailureView()

      case apiStatusConstants.inProgress:
        return this.renderProfileLoadingView()

      default:
        return null
    }
  }
}

export default Profile
