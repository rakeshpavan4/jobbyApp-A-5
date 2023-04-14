import HeaderRoute from '../HeaderRoute'
import './index.css'

const HomeRoute = () => (
  <>
    <div className="home_container">
      <HeaderRoute />
      <div className="home_description">
        <h1>Find The Job That Fits Your Life</h1>
        <p>
          Millions of people searching for jobs,salary information ,company
          reviews find the job that fits your abilities and potential.
        </p>
        <button type="button" className="home_button">
          Find Job
        </button>
      </div>
    </div>
  </>
)
export default HomeRoute
