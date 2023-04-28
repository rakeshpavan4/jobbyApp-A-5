import HeaderRoute from '../HeaderRoute'
import Profile from '../Profile'
import JobItemDetails from '../JobItemDetails'
import './index.css'

const JobRoute = () => (
  <>
    <div className="jobRoute_container">
      <HeaderRoute />
      <div>
        <Profile />
        <JobItemDetails />
      </div>
    </div>
  </>
)
export default JobRoute
