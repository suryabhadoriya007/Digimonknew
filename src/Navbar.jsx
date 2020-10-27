import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function Navbar() {
  return (
      <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img
                  src={require("../src/Images/digimonk logo.png")}
                  alt="facebook"
                  height="45"
                  width="180"
                />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <nav className="navbar navbar-light bg-light ml-auto">
  <form className="form-inline">
    <input className="form-control mr-sm-2 searchdd" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success sseerr my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
    </div>
</nav>
</>
  );
}
export default Navbar
