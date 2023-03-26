/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{cursor:"no"}}><span style={{color:"blue",cursor:"not-allowed"}}>MERN-CURD-OPERATION</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse data" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-6  mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link active span" aria-current="page" onClick={()=>{navigate("/")}} >ADD-DATA</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link active span" onClick={()=>{navigate("/view")}}>VIEW-DATA</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Navbar