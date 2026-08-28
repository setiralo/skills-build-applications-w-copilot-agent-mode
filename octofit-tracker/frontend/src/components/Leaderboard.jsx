import { useEffect, useState } from 'react'
import { apiBaseUrl, fetchCollection } from '../api'

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : `${apiBaseUrl}/api/leaderboard/`

function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection(leaderboardEndpoint).then(setEntries).catch((requestError) => setError(requestError.message))
  }, [])

  if (error) return <p className="alert alert-danger">{error}</p>

  return (
    <section aria-labelledby="leaderboard-title">
      <h2 id="leaderboard-title" className="h4 mb-3">Leaderboard</h2>
      <div className="list-group">
        {entries.map((entry) => (
          <div className="list-group-item d-flex align-items-center gap-3" key={entry._id || entry.user}>
            <span className="badge rounded-pill text-bg-dark">#{entry.rank}</span>
            <span className="flex-grow-1"><strong>{entry.user}</strong><small className="d-block text-body-secondary">{entry.team}</small></span>
            <span className="fw-semibold">{entry.points} pts</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Leaderboard