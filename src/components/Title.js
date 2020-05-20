import { NavLink } from 'react-router-dom'
import React from 'react'
import './Title.css';

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>Famous Dogs in My Life</h1>
        <div className="Title-Subtitle">My Dogs and my Friend's Dogs</div>

        <div>
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/">List</NavLink>

        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          to="/about">About</NavLink>
          
        </div>

      </header>
    </div>
  )
}

export default Title