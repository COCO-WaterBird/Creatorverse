import { useResolvedCreatorImageUrl } from '../utils/creatorImage'

export default function CreatorImage({ creator, className }) {
  const src = useResolvedCreatorImageUrl(creator)
  return <img src={src} alt={creator.name} className={className} />
}
