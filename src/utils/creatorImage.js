import { useEffect, useState } from 'react'

export function placeholderSrc(creator) {
  return `https://picsum.photos/seed/creator-${creator.id}/480/640`
}

/** Resolves creator.imageURL or fallback; validates primary URL with Image(). */
export function useResolvedCreatorImageUrl(creator) {
  const fallback = placeholderSrc(creator)
  const [src, setSrc] = useState(() => creator.imageURL?.trim() || fallback)

  useEffect(() => {
    const primary = creator.imageURL?.trim()
    const fb = placeholderSrc(creator)
    if (!primary) {
      setSrc(fb)
      return
    }
    setSrc(primary)
    const img = new Image()
    img.onload = () => setSrc(primary)
    img.onerror = () => setSrc(fb)
    img.src = primary
  }, [creator.id, creator.imageURL])

  return src
}
