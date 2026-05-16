/** Normalize handle: trim and strip leading @ */
export function stripSocialHandle(raw) {
  if (raw == null || typeof raw !== 'string') return ''
  return raw.trim().replace(/^@+/u, '')
}

export function youtubeProfileUrl(handle) {
  const h = stripSocialHandle(handle)
  if (!h) return ''
  return `https://www.youtube.com/@${encodeURIComponent(h)}`
}

export function twitterProfileUrl(handle) {
  const h = stripSocialHandle(handle)
  if (!h) return ''
  return `https://x.com/${encodeURIComponent(h)}`
}

export function instagramProfileUrl(handle) {
  const h = stripSocialHandle(handle)
  if (!h) return ''
  return `https://www.instagram.com/${encodeURIComponent(h)}/`
}
