import { Link } from 'react-router-dom'
import { useResolvedCreatorImageUrl } from '../utils/creatorImage'
import {
  instagramProfileUrl,
  twitterProfileUrl,
  youtubeProfileUrl,
} from '../utils/socialLinks'

function IconYouTube({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="22" height="22" aria-hidden>
      <path
        fill="currentColor"
        d="M23.5 6.2S23 4 21.3 3.2C19.8 2.5 12 2.5 12 2.5s-7.8 0-9.3.7C2 4 1.5 6.2 1.5 6.2S1 8.7 1 11.3v1.4c0 2.5.5 5.1.5 5.1s.5 2.2 2.2 2.9c1.5.7 9.3.7 9.3.7s7.8 0 9.3-.7c1.7-.8 1.8-2.9 1.8-2.9S23 15.2 23 12.7v-1.4C23 8.7 22.5 6.2 22.5 6.2zM9.8 15V9l6.2 3-6.2 3z"
      />
    </svg>
  )
}

function IconInstagram({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="22" height="22" aria-hidden>
      <path
        fill="currentColor"
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
      />
    </svg>
  )
}

function IconX({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden>
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  )
}

function IconInfo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="22" height="22" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        d="M12 16v-5h-.5M12 8.5h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z"
      />
    </svg>
  )
}

function IconEdit({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 20h4l10.5-10.5a2 2 0 0 0-2.8-2.8L5 16.2V20Zm13.5-11.5 2 2"
      />
    </svg>
  )
}

export default function Card({ creator }) {
  const bgSrc = useResolvedCreatorImageUrl(creator)
  const fallback = creator.url
  const ytHref = youtubeProfileUrl(creator.youtube_handle) || fallback
  const twHref = twitterProfileUrl(creator.twitter_handle) || fallback
  const igHref = instagramProfileUrl(creator.instagram_handle) || fallback

  return (
    <article className="creator-card creator-card-hero">
      <div
        className="creator-card-bg"
        style={{ backgroundImage: `url(${bgSrc})` }}
        aria-hidden
      />
      <div className="creator-card-overlay" aria-hidden />
      <div className="creator-card-inner">
        <div className="creator-card-top">
          <div className="creator-card-heading">
            <h3>{creator.name}</h3>
            <div className="creator-card-social">
              <a
                href={ytHref}
                target="_blank"
                rel="noreferrer"
                className="creator-card-social-link"
                title="YouTube"
                aria-label={`${creator.name} on YouTube`}
              >
                <IconYouTube />
              </a>
              <a
                href={twHref}
                target="_blank"
                rel="noreferrer"
                className="creator-card-social-link"
                title="Twitter / X"
                aria-label={`${creator.name} on X`}
              >
                <IconX />
              </a>
              <a
                href={igHref}
                target="_blank"
                rel="noreferrer"
                className="creator-card-social-link"
                title="Instagram"
                aria-label={`${creator.name} on Instagram`}
              >
                <IconInstagram />
              </a>
            </div>
          </div>
          <div className="creator-card-tools">
            <Link
              to={`/creator/${creator.id}`}
              className="creator-card-icon-btn"
              title="View details"
              aria-label={`View ${creator.name}`}
            >
              <IconInfo />
            </Link>
            <Link
              to={`/edit/${creator.id}`}
              className="creator-card-icon-btn"
              title="Edit"
              aria-label={`Edit ${creator.name}`}
            >
              <IconEdit />
            </Link>
          </div>
        </div>
        <p className="creator-card-bio">{creator.description}</p>
      </div>
    </article>
  )
}
