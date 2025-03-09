import './index.css'

function NotFound() {
  return (
    <div className="page-not-found-container">
      <img src="" className="not-found" alt="not found" />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="page-not-found-about">
        We are sorry, the page you requested could not be found. Please go back
        to the homepage
      </p>
    </div>
  )
}

export default NotFound
