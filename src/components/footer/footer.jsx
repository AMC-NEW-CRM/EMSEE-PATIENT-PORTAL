import  { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer mt-auto py-3 bg-white text-center">
        <div className="container">
          <span className="text-muted"> Copyright © <span id="year"> 2025 </span>
            <Link to="#!"  className="text-dark fw-medium">Xintra</Link>. Designed with <span className="bi bi-heart-fill text-danger"></span> by <Link to="https://spruko.com/" target='_blank'>
              <span className="fw-medium text-primary">Spruko</span>
            </Link> All rights reserved </span>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer