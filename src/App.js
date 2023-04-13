import {Switch, Route} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import JobItemDetailsRoute from './components/JobItemDetailsRoute'
import JobsRoute from './components/JobsRoute'
import NotFoundRoute from './components/NotFoundRoute'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
// eslint-disable-next-line
const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]
// eslint-disable-next-line
const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <Route exact path="/" component={HomeRoute} />
    <Route exact path="/JobItem" component={JobItemDetailsRoute} />

    <Route exact path="/" component={JobsRoute} />

    <Route component={NotFoundRoute} />
  </Switch>
)
export default App