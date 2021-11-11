import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function Home() {
    return (
        <div className="Home__container">
        <Link className="link" to="/chimpanzee"><span>Chimpanzee Test</span></Link>
        <Link className="link" to="/number"><span>Number Test</span></Link>
        {/* <Link className="link" to="/visual"><span>Visual Test</span></Link> */}
        </div>
    )
}

export default Home
