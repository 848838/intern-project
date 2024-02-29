import React from 'react'

function Navbar() {
    return (
        // main navbar start from here
        <nav className="navbar navbar-expand-lg  bg-dark" data-bs-theme="dark">

            <div className="container-fluid">
                <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
              
                <form className="d-flex  " role="search" style={{ display: 'flex', justifyContent: 'center', marginLeft: '23%' }}>
                  
                    <input  className="form-control me-2" type="bi bi-search mx-auto" placeholder="Search" aria-label="Search" />
                </form>

                <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                        <li className="nav-item mx-3">
                            <a className="nav-link active" aria-current="page" href="#">Categories</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Website Builders</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Today's deals</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
