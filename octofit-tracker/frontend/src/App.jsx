




import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import './App.css'

const navigation = [
  ['/', 'Overview'],
  ['/users', 'Athletes'],
  ['/teams', 'Teams'],
  ['/activities', 'Activities'],
  ['/leaderboard', 'Leaderboard'],
  ['/workouts', 'Workouts'],
]

function Overview() {
  return (
    <div className="row g-4">
      <div className="col-lg-7"><Activities /></div>
      <div className="col-lg-5"><Leaderboard /></div>
      <div className="col-12"><Workouts /></div>
    </div>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="app-header border-bottom">
        <div className="container py-4">
          <p className="eyebrow mb-2">OctoFit Tracker</p>
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3">
            <div><h1 className="display-6 mb-1">Train with purpose.</h1><p className="lead mb-0">Your team, your pace, your next win.</p></div>
            <span className="status-dot">API connected</span>
          </div>
        </div>
      </header>
      <nav className="container py-3" aria-label="Main navigation">
        <div className="nav nav-pills gap-2">
          {navigation.map(([path, label]) => <NavLink key={path} to={path} end={path === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{label}</NavLink>)}
        </div>
      </nav>
      <main className="container pb-5">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
