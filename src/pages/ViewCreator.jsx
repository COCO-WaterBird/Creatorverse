import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { supabase } from '../client'
import CreatorImage from '../components/CreatorImage'
import {
  instagramProfileUrl,
  twitterProfileUrl,
  youtubeProfileUrl,
} from '../utils/socialLinks'

export default function ViewCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single()
      if (error) console.error(error)
      else setCreator(data)
      setLoading(false)
    }
    fetchCreator()
  }, [id])

  if (loading) return <main><p>Loading…</p></main>
  if (!creator)
    return (
      <main>
        <p>Creator not found.</p>
        <Link to="/creators">Back</Link>
      </main>
    )

  const yt = youtubeProfileUrl(creator.youtube_handle)
  const tw = twitterProfileUrl(creator.twitter_handle)
  const ig = instagramProfileUrl(creator.instagram_handle)

  return (
    <main>
      <Link to="/creators">← Back</Link>
      <article>
        <CreatorImage creator={creator} className="creator-img-large" />
        <h1>{creator.name}</h1>
        <p>{creator.description}</p>
        <p>
          <a href={creator.url} target="_blank" rel="noreferrer">Visit channel</a>
        </p>
        {(yt || tw || ig) && (
          <section className="creator-detail-social" aria-label="Social profiles">
            <h2 className="visually-hidden">Social links</h2>
            <ul>
              {yt && (
                <li>
                  <a href={yt} target="_blank" rel="noreferrer">
                    YouTube (@{creator.youtube_handle})
                  </a>
                </li>
              )}
              {tw && (
                <li>
                  <a href={tw} target="_blank" rel="noreferrer">
                    X / Twitter (@{creator.twitter_handle})
                  </a>
                </li>
              )}
              {ig && (
                <li>
                  <a href={ig} target="_blank" rel="noreferrer">
                    Instagram (@{creator.instagram_handle})
                  </a>
                </li>
              )}
            </ul>
          </section>
        )}
        <Link to={`/edit/${creator.id}`} role="button">Edit</Link>
      </article>
    </main>
  )
}
