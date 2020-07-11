import React from 'react';  
import {Link} from  "react-router-dom"
function Nav() {

    const navStyle={
        color: "white" 
    }

  return (
    <nav>
        <h3 className="nav-logo">NG</h3>
        <ul className="nav-links">
            <Link style={navStyle} to="/">
                <li>📖 Blog</li> 
            </Link>
            <Link style={navStyle} to="/about"> 
                <li>🙍‍♂️ About</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
