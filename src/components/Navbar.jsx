import React from 'react'
import './Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';


function Navbar({wishCount, addCount}) {
    return (
        <div className='navbar'>
            <div className='nav-list'>
                <img src="/images/myntra.png" alt="myntra-logo" />
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <input className='search-box' type="search" placeholder="Search for brands, products and more" />
            </div>

            <div className='side-list'>
                <li>
                    <FavoriteBorder/> <sup>{wishCount}</sup> 
                </li>
                <li>
                    <ShoppingCartIcon/><sup>{addCount}</sup> 
                </li>

            </div>
        </div>
    )
}

export default Navbar
