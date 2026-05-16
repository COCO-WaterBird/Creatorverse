import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../client'
import SocialMediaFields from '../components/SocialMediaFields'
import { stripSocialHandle } from '../utils/socialLinks'

export default function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [youtubeHandle, setYoutubeHandle] = useState('')
  const [twitterHandle, setTwitterHandle] = useState('')
  const [instagramHandle, setInstagramHandle] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single()
      if (error) {
        console.error(error)
      } else if (data) {
        setName(data.name)
        setUrl(data.url)
        setDescription(data.description)
        setImageURL(data.imageURL ?? '')
        setYoutubeHandle(data.youtube_handle ?? '')
        setTwitterHandle(data.twitter_handle ?? '')
        setInstagramHandle(data.instagram_handle ?? '')
      }
      setLoading(false)
    }
    fetchCreator()
  }, [id])

  const handleUpdate = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    const { error } = await supabase
      .from('creators')
      .update({
        name,
        url,
        description,
        imageURL: imageURL || null,
        youtube_handle: stripSocialHandle(youtubeHandle) || null,
        twitter_handle: stripSocialHandle(twitterHandle) || null,
        instagram_handle: stripSocialHandle(instagramHandle) || null,
      })
      .eq('id', id)
    setSubmitting(false)
    if (error) {
      console.error(error)
      alert(`Failed to update: ${error.message}`)
      return
    }
    navigate(`/creator/${id}`)
  }

  const handleDelete = async () => {
    if (!confirm('Delete this creator? This cannot be undone.')) return
    const { error } = await supabase.from('creators').delete().eq('id', id)
    if (error) {
      console.error(error)
      alert(`Failed to delete: ${error.message}`)
      return
    }
    navigate('/creators')
  }

  if (loading) return <main><p>Loading…</p></main>

  return (
    <main>
      <Link to="/creators">← Back</Link>
      <h1>Edit Creator</h1>
      <form onSubmit={handleUpdate}>
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          URL
          <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} required />
        </label>
        <label>
          Description
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          Image URL (optional)
          <input
            type="text"
            inputMode="url"
            autoComplete="off"
            placeholder="https://… or /creators/photo.png"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </label>

        <SocialMediaFields
          youtubeHandle={youtubeHandle}
          twitterHandle={twitterHandle}
          instagramHandle={instagramHandle}
          onYoutubeChange={setYoutubeHandle}
          onTwitterChange={setTwitterHandle}
          onInstagramChange={setInstagramHandle}
        />

        <div className="form-actions">
          <button type="submit" disabled={submitting}>
            {submitting ? 'Saving…' : 'Save Changes'}
          </button>
          <button type="button" className="contrast" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </form>
    </main>
  )
}
