import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
   
    const [showMenu, setShowMenu] = React.useState(false);

    const handleMenu = ()=> {
        setShowMenu((prevState) => {
            return (
                !prevState
            )
        })
    }

  return (
    <header className='header d-f jc-sa align-center'>
        <div className="menu">
            <button className="menu-btn" onClick={()=>handleMenu()} >
                <img src= {showMenu ? "images/close.png" : "images/mobile-menu.png" } alt="menu" />
            </button>
            <nav className= {showMenu ? 'header-nav' : 'd-n'}>
                <ul className="nav-list">
                    <li className="nav-list-item"><Link to='/' className='list-item-link'>Home</Link></li>
                    <li className="nav-list-item"><Link to='design' className='list-item-link'>3D Design</Link></li>
                    <li className="nav-list-item"><Link to='renovation' className='list-item-link'>Renovation</Link></li>
                    <li className="nav-list-item"><a className='list-item-link' href="">Construction</a></li>
                    <li className="nav-list-item"><a className='list-item-link' href="">Projects</a></li>
                    <li className="nav-list-item"><a className='list-item-link' href="">Landscape design</a></li>
                </ul>
            </nav>
        </div>
        <div className="header-logo"><img src="images/logo.svg" alt="logo" /></div>
        <div className="header-phone"><img src="images/phone.png" alt="phone" /></div>

    </header>
  )
}

export default Header