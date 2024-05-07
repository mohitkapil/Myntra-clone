import React from 'react'
import Flip from './Flip'
import './Category.css'

function Category({wishCount, addCount, setWishcount, setAddcount}) {
    return (
        <div className='category'>
            <div className='heading'>
                <p>SHOP BY CATEGORY</p>
            </div>
            <div className='special'>
                <Flip image='/images/zaveri.jpg' wishCount={wishCount} addCount={addCount} setWishcount={setWishcount} setAddcount={setAddcount}>
                    <div className='info'>
                        <p>Zaveri Pearls</p>
                        <p>Rs. 999</p>
                    </div>
                </Flip>
                <Flip image='/images/puma.avif' wishCount={wishCount} addCount={addCount} setWishcount={setWishcount} setAddcount={setAddcount}>
                    <div className='info'>
                        <p>Puma</p>
                        <p>Rs. 1109</p>
                    </div>
                </Flip>
                <Flip image='/images/bag.jpeg' wishCount={wishCount} addCount={addCount} setWishcount={setWishcount} setAddcount={setAddcount}>
                    <div className='info'>
                        <p>Handbags</p>
                        <p>Rs. 1499</p>
                    </div>
                </Flip>
                <Flip image='/images/watch.jpg' wishCount={wishCount} addCount={addCount} setWishcount={setWishcount} setAddcount={setAddcount}>
                    <div className='info'>
                        <p>Danel Klen</p>
                        <p>Rs. 1999</p>
                    </div>
                </Flip>
                <Flip image='/images/perfume.jpg' wishCount={wishCount} addCount={addCount} setWishcount={setWishcount} setAddcount={setAddcount}>
                    <div className='info'>
                        <p>Luxury Perfumes</p>
                        <p>Rs. 2499</p>
                    </div>
                </Flip>
                <Flip image='/images/boat.webp' wishCount={wishCount} addCount={addCount} setWishcount={setWishcount} setAddcount={setAddcount}>
                    <div className='info'>
                        <p>boAt</p>
                        <p>Rs. 1199</p>
                    </div>
                </Flip>
                <Flip image='/images/shoes.jpg' wishCount={wishCount} addCount={addCount} setWishcount={setWishcount} setAddcount={setAddcount}>
                    <div className='info'>
                        <p>U.S. Polo Assn.</p>
                        <p>Rs. 2999</p>
                    </div>
                </Flip>
                <Flip image='/images/night.jpg' wishCount={wishCount} addCount={addCount} setWishcount={setWishcount} setAddcount={setAddcount}>
                    <div className='info'>
                        <p>Be You</p>
                        <p>Rs. 549</p>
                    </div>
                </Flip>
                <Flip image='/images/face.webp' wishCount={wishCount} addCount={addCount} setWishcount={setWishcount} setAddcount={setAddcount}>
                    <div className='info'>
                        <p>L'avenour</p>
                        <p>Rs. 499</p>
                    </div>
                </Flip>
                <Flip image='/images/lip.webp' wishCount={wishCount} addCount={addCount} setWishcount={setWishcount} setAddcount={setAddcount}>
                    <div className='info'>
                        <p>Lipstick</p>
                        <p>Rs. 249</p>
                    </div>
                </Flip>
                <Flip image='/images/lip.avif' wishCount={wishCount} addCount={addCount} setWishcount={setWishcount} setAddcount={setAddcount}>
                    <div className='info'>
                        <p>Lip Balm</p>
                        <p>Rs. 119</p>
                    </div>
                </Flip>
                <Flip image='/images/chanel.jpg' wishCount={wishCount} addCount={addCount} setWishcount={setWishcount} setAddcount={setAddcount}>
                    <div className='info'>
                        <p>Chanel</p>
                        <p>Rs. 999</p>
                    </div>
                </Flip>

            </div>
        </div>
    )
}

export default Category
