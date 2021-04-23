import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand">PlannerApp</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                <Link to="/addevent" class="nav-link">+ Add Event</Link>
                <Link to="/dashboard" class="nav-link">Dashboard</Link>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;