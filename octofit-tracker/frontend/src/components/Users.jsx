import { useEffect, useState } from 'react'
import { apiBaseUrl, fetchCollection } from '../api'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : `${apiBaseUrl}/api/users/`

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection(usersEndpoint).then(setUsers).catch((requestError) => setError(requestError.message))
  }, [])

  if (error) return <p className="alert alert-danger">{error}</p>

  return (
    <section aria-labelledby="users-title">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 id="users-title" className="h4 mb-0">Athletes</h2>
        <span className="badge text-bg-primary">{users.length}</span>
      </div>
      <div className="list-group">
        {users.map((user) => (
          <div className="list-group-item d-flex justify-content-between" key={user._id || user.email}>
            <span><strong>{user.name}</strong><small className="d-block text-body-secondary">{user.team}</small></span>
            <span className="fw-semibold">{user.points} pts</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Users