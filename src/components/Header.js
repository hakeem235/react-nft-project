import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={punkLogo} className="punkLogo"  alt='logo'/>
                <div className='searchBar'>
                    <div className='searchIconContainer'>
                        <img src={searchIcon} alt='searchIcon' />
                    </div>
                    <input type='text' placeholder='Search' className='searchInput'/>
                </div>
            </div>
        </div>
    )
}

export default Header
