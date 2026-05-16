import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client'
import SocialMediaFields from '../components/SocialMediaFields'
import { stripSocialHandle } from '../utils/socialLinks'

export default function AddCreator() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [youtubeHandle, setYoutubeHandle] = useState('')
  const [twitterHandle, setTwitterHandle] = useState('')
  const [instagramHandle, setInstagramHandle] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    const { error } = await supabase.from('creators').insert({
      name,
      url,
      description,
      imageURL: imageURL || null,
      youtube_handle: stripSocialHandle(youtubeHandle) || null,
      twitter_handle: stripSocialHandle(twitterHandle) || null,
      instagram_handle: stripSocialHandle(instagramHandle) || null,
    })
    setSubmitting(false)
    if (error) {
      console.error(error)
      alert(`Failed to add: ${error.message}`)
      return
    }
    navigate('/creators')
  }

  return (
    <main>
      <Link to="/creators">← Back</Link>
      <h1>Add a Creator</h1>
      <form onSubmit={handleSubmit}>
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

        <button type="submit" disabled={submitting}>
          {submitting ? 'Adding…' : 'Add Creator'}
        </button>
      </form>
    </main>
  )
}
