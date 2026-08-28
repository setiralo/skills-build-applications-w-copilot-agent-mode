import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('/api/teams/').then(setTeams).catch((requestError) => setError(requestError.message))
  }, [])

  if (error) return <p className="alert alert-danger">{error}</p>

  return (
    <section aria-labelledby="teams-title">
      <h2 id="teams-title" className="h4 mb-3">Teams</h2>
      <div className="row g-3">
        {teams.map((team) => (
          <div className="col-md-6" key={team._id || team.name}>
            <article className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5">{team.name}</h3>
                <p className="text-body-secondary mb-2">{team.members} members</p>
                <strong>{team.totalPoints} points</strong>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Teams