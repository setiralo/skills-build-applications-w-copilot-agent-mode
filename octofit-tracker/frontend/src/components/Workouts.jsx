import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('/api/workouts/').then(setWorkouts).catch((requestError) => setError(requestError.message))
  }, [])

  if (error) return <p className="alert alert-danger">{error}</p>

  return (
    <section aria-labelledby="workouts-title">
      <h2 id="workouts-title" className="h4 mb-3">Suggested workouts</h2>
      <div className="row g-3">
        {workouts.map((workout) => (
          <div className="col-md-6 col-xl-4" key={workout._id || workout.title}>
            <article className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <span className="badge text-bg-success mb-2">{workout.category}</span>
                <h3 className="h5">{workout.title}</h3>
                <p className="text-body-secondary">{workout.difficulty} · {workout.durationMinutes} min</p>
                <p className="mb-0">{workout.exercises?.join(' · ')}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Workouts