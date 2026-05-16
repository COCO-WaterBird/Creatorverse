function IconYouTubeSmall() {
  return (
    <svg className="social-field-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden>
      <path
        fill="currentColor"
        d="M23.5 6.2S23 4 21.3 3.2C19.8 2.5 12 2.5 12 2.5s-7.8 0-9.3.7C2 4 1.5 6.2 1.5 6.2S1 8.7 1 11.3v1.4c0 2.5.5 5.1.5 5.1s.5 2.2 2.2 2.9c1.5.7 9.3.7 9.3.7s7.8 0 9.3-.7c1.7-.8 1.8-2.9 1.8-2.9S23 15.2 23 12.7v-1.4C23 8.7 22.5 6.2 22.5 6.2zM9.8 15V9l6.2 3-6.2 3z"
      />
    </svg>
  )
}

function IconTwitterSmall() {
  return (
    <svg className="social-field-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  )
}

function IconInstagramSmall() {
  return (
    <svg className="social-field-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden>
      <path
        fill="currentColor"
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
      />
    </svg>
  )
}

export default function SocialMediaFields({
  youtubeHandle,
  twitterHandle,
  instagramHandle,
  onYoutubeChange,
  onTwitterChange,
  onInstagramChange,
}) {
  return (
    <fieldset className="social-links-fieldset">
      <legend className="social-links-legend">Social media links</legend>
      <p className="social-links-intro">
        <em>Provide at least one of the creator&apos;s social handles (without @).</em>
      </p>

      <div className="social-row">
        <label className="social-field-label">
          <span className="social-label-title">
            <IconYouTubeSmall />
            YouTube
          </span>
          <small className="social-handle-hint">The creator&apos;s YouTube handle (without the @)</small>
          <input
            type="text"
            autoComplete="off"
            spellCheck="false"
            placeholder="MrBeast"
            value={youtubeHandle}
            onChange={(e) => onYoutubeChange(e.target.value)}
          />
        </label>
      </div>

      <div className="social-row">
        <label className="social-field-label">
          <span className="social-label-title">
            <IconTwitterSmall />
            Twitter / X
          </span>
          <small className="social-handle-hint">The creator&apos;s Twitter handle (without the @)</small>
          <input
            type="text"
            autoComplete="off"
            spellCheck="false"
            placeholder="username"
            value={twitterHandle}
            onChange={(e) => onTwitterChange(e.target.value)}
          />
        </label>
      </div>

      <div className="social-row">
        <label className="social-field-label">
          <span className="social-label-title">
            <IconInstagramSmall />
            Instagram
          </span>
          <small className="social-handle-hint">The creator&apos;s Instagram handle (without the @)</small>
          <input
            type="text"
            autoComplete="off"
            spellCheck="false"
            placeholder="username"
            value={instagramHandle}
            onChange={(e) => onInstagramChange(e.target.value)}
          />
        </label>
      </div>
    </fieldset>
  )
}
