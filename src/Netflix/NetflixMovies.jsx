import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
  return (
    <div>
        <h1>MOVIES</h1>
        <ul>
            <li>
                <Link to ="/thrillermovies">Thrill</Link>
            </li>
            <li>
                <Link to ="/netflixmovies/comedy">Comedy 1</Link>
            </li>
            <li>
                <Link to ="comedy">Comedy 2</Link>
            </li>
            <li>
                <Link to ="/addemployee">Add Employee</Link>
            </li>
            <li>
                <Link to ="/regemployee">Registere</Link>
            </li>
            
        </ul>
    </div>
  )
}
