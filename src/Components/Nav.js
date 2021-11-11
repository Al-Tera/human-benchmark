import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link to="/" className="navlink">
                <p>DASHBOARD</p>
            </Link>
        </nav>
    )
}

export default Nav
