import React from 'react'
import './Header.css'

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
                    <li className="nav-list-item"><a className='list-item-link' href="">Home</a></li>
                    <li className="nav-list-item"><a className='list-item-link' href="">3D Design</a></li>
                    <li className="nav-list-item"><a className='list-item-link' href="">Renovation</a></li>
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