import React from 'react';
import { Link } from 'react-router-dom';
import "./Translation.css";
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{ color:"white",marginRight:"30px"}}><h3>Pedagogic Hadith Ebook</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-">
          <a className="nav-link active" aria-current="page" href="/"><h6><Link to="/" style={{ color:"white"}}>Home</Link></h6></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><h6><Link to="/About" style={{ color:"white"}}>About</Link></h6></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><h6><Link to="/WordToWordTranslationChapters" style={{ color:"white"}}>Word-By-Word Grammar</Link></h6></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><h6><Link to="/UrduTranslationChapters" style={{ color:"white"}}>Urdu Translation</Link></h6></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><h6><Link to="/EnglishTranslationChapters" style={{ color:"white"}}>English Translation</Link></h6></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><h6><Link to="/Help" style={{ color:"white"}}>Help & Support</Link></h6></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><h6><Link to="/Feedback" style={{ color:"white"}}>Feedback</Link></h6></a>
        </li>
      </ul>
      
      {/* <form className="d-flex" role="search" >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn" type="submit" style={{ color:"white"}}>Search</button>
      </form> */}
    </div>
  </div>
  </nav>
</>
  )
}
