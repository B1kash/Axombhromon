import React from 'react'
import '../App.css';

const Header = () => {
    return (
        <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light p-md-3 ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ASSAM ভ্রমণ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Discover</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Places</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
    )
}

export default Header
