import React from 'react';

const Navbar = () => {
  return (
    <div className='justify-content-center'>
    <nav className=" navbar navbar-expand-lg navbar-light bg-success">
    <div className=" container-fluid">
      <a className="fs-1 text navbar-brand" href="#">WALCART</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="fs-3 text nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="fs-3 text nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="fs-3 text nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item dropdown">
            <a className="fs-3 text nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              All Peoduct
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  );
};

export default Navbar;