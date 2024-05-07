import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Flip.css'



function Flip({ image, children, wishCount, addCount, setWishcount, setAddcount }) {
    const [wish, setWish] = useState(false)
    const [bag, setBag] = useState(false)


    function handleWishlist(e) {
        if (!wish) {
            setWish(true)
            wishCount++;
            setWishcount(wishCount)
        }
        else{
            setWish(false);
            wishCount--;
            setWishcount(wishCount)
        }
    }

    function handleBag(e) {
        if (!bag) {
            setBag(true)
            addCount++;
            setAddcount(addCount)
        }
        else{
            setBag(false);
            addCount--;
            setAddcount(addCount)
        }
    }

    return (
        <div className='flip'>
            <div className='flip-image'>
                <img src={image} alt="image" />
            </div>

            <div className='flipinfo-box'>
                <div className='flip-info'>
                    {children}
                </div>

                <div className='buttons'>
                    <div className='wishlist' onClick={handleWishlist}>
                        {wish ? <FavoriteIcon /> : <FavoriteBorderIcon />}

                    </div>
                    <div className='addbag' onClick={handleBag}>
                        {bag && <ShoppingCartIcon />}
                        {!bag && <AddShoppingCartIcon />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flip
