import { Link } from 'react-router-dom'
import '../styles/components/Navigation.css'

export default function Navigation({ left, right }) {
  return (
    <div className="arrows">
      {left && (
        <div className="left_arrow">
          <p>{left.label}</p>
          <Link to={left.path}>
            <img alt="left arrow" src="/images/left arrow.png" />
          </Link>
        </div>
      )}
      {right && (
        <div className="right_arrow">
          <p>{right.label}</p>
          <Link to={right.path}>
            <img alt="right arrow" src="/images/right arrow.png" />
          </Link>
        </div>
      )}
    </div>
  )
}
