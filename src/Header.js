import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(props){
    
    function logOut(){
        alert('Log Out successfull')
        localStorage.removeItem('access')
        props.setAccessToken(null)
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to='/'><img src={localStorage.getItem('picture')} alt="profile_picture"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">{'Welcome ' + localStorage.getItem('name')}</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-danger my-2 my-sm-0" onClick={logOut}>Log Out</button>
                </form>
            </div>
            </nav>
    )
}