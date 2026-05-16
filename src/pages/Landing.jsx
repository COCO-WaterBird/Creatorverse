import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-overlay" aria-hidden />
      <div className="landing-inner">
        <h1 className="landing-title">CREATORVERSE</h1>
        <nav className="landing-actions" aria-label="Primary">
          <Link to="/creators" className="landing-btn">
            VIEW ALL CREATORS
          </Link>
          <Link to="/new" className="landing-btn">
            ADD A CREATOR
          </Link>
        </nav>
      </div>
    </div>
  )
}
