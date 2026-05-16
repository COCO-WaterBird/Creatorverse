import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../client'
import Card from '../components/Card'

export default function ShowCreators() {
  const [creators, setCreators] = useState([])
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from('creators').select('*').order('id')
      if (error) {
        console.error(error)
        setFetchError(error.message)
      } else {
        setCreators(data ?? [])
      }
      setLoading(false)
    }
    fetchCreators()
  }, [])

  return (
    <main>
      <header className="page-header">
        <div className="page-header-title">
          <Link to="/" className="back-subtle">
            Home
          </Link>
          <h1>💫 Creatorverse</h1>
        </div>
        <Link to="/new" role="button">+ Add Creator</Link>
      </header>

      {loading ? (
        <p>Loading…</p>
      ) : fetchError ? (
        <p className="error-banner">Could not load creators: {fetchError}</p>
      ) : creators.length === 0 ? (
        <>
          <p>No content creators yet. Add one!</p>
          <p className="hint-banner">
            Already added rows in Supabase? Turn off <strong>Row Level Security</strong> on the{' '}
            <code>creators</code> table, and confirm <code>.env.local</code> uses the same project URL
            as in Dashboard → Settings → API.
          </p>
        </>
      ) : (
        <section className="creator-grid">
          {creators.map((c) => <Card key={c.id} creator={c} />)}
        </section>
      )}
    </main>
  )
}
