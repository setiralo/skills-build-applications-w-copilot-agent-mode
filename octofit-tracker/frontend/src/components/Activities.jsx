import { useEffect, useState } from 'react'
import { apiBaseUrl, fetchCollection } from '../api'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : `${apiBaseUrl}/api/activities/`

function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection(activitiesEndpoint).then(setActivities).catch((requestError) => setError(requestError.message))
  }, [])

  if (error) return <p className="alert alert-danger">{error}</p>

  return (
    <section aria-labelledby="activities-title">
      <h2 id="activities-title" className="h4 mb-3">Recent activities</h2>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead><tr><th>Athlete</th><th>Activity</th><th>Duration</th><th>Calories</th></tr></thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity._id || `${activity.user}-${activity.completedAt}`}>
                <td>{activity.user}</td><td>{activity.type}</td><td>{activity.durationMinutes} min</td><td>{activity.calories} kcal</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Activities