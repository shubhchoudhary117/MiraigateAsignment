import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import { TokenService } from '../../services/TokenService'
import "./Navbar.css"

const Navbar = () => {

    const [logoutProcessing, setLogoutProcessing] = useState(false);
    const navigate = useNavigate()


    // doing logout the user
    const Logout = () => {
        setLogoutProcessing(true);
        setTimeout(() => {
            setLogoutProcessing(false);
            TokenService.removeToken();
            navigate("/miraigate/login")
        }, 2000);
    }
    return <>

        <header>
            <nav>
                <div className="buttons">
                    <button className='login'><Link className='link' to="/miraigate/login">Login</Link></button>
                    <button onClick={Logout} disabled={logoutProcessing ? true : false} className={logoutProcessing ? "logout disabled" : "logout"}>
                        {logoutProcessing ?
                            <ClipLoader size={25} color='#fff' /> : "logout"}
                    </button>
                </div>
                <div className="menu-links">
                    <ul>
                        <li><Link to="/" className='link'>home</Link></li>
                        <li><Link to="/miraigate/joinwithus" className='link'>join with us</Link></li>

                    </ul>
                </div>
            </nav>
        </header>

    </>
}

export default Navbar
