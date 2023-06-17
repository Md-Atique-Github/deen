import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {


  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white", // corrected spelling here
      });
      setBtnText('Enable light  mood');
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black", // corrected spelling here
      });
      setBtnText('Enable dark mood');
    }
  }

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white"
  })
  const [btnText, setBtnText] = useState("Enable dark mood")



  return (
    // <div className='container my-3' style={myStyle}>
    <div>
      <div><nav className="navbar navbar-expand-lg" style={myStyle}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="https://getbootstrap.com/docs/5.0/components/navbar/">Navbar</Link>
          <button className="navbar-toggler" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="https://getbootstrap.com/docs/5.0/components/navbar/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/scrool">SCROLL</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="https://getbootstrap.com/docs/5.0/components/navbar/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="https://getbootstrap.com/docs/5.0/components/navbar/">Action</Link></li>
                  <li><Link className="dropdown-item" to="https://getbootstrap.com/docs/5.0/components/navbar/">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="https://getbootstrap.com/docs/5.0/components/navbar/">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="https://getbootstrap.com/docs/5.0/components/navbar/" tabIndex="-1" aria-disabled="true">Disabled</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" style={myStyle}>Search</button>
            </form>
          </div>
        </div>
      </nav></div>
      <button className="btn1 btn-primary mx-2" onClick={toggleStyle}>{btnText}</button>
    </div>
  )
}
