import React from 'react'
import './Main.css'
import Card from './Card'
import Category from './Category'
import Footer from './Footer'

function Main({ wishCount, addCount, setWishcount, setAddcount }) {
    return (
        <div className='main'>
            <div className='fashion-fest'>
                <img src="/images/fashion-festival.jpg" alt="fashion festival" />
            </div>

            <div className='offer'>
                <img src="/images/offer.png" alt="coupon" />
                <div className='crazy-offer'>
                    <p className='first'>FASTIVE CRAZY OFFERS</p>
                    <p className='second'>Medal offers to bag</p>
                </div>
            </div>

            <div className='festive-offer'>
                <Card image='/images/tshirt.avif'>
                    <div className='info'>
                        <p>Shirts, Jeans & More</p>
                        <span>MIN. 50% OFF</span>
                    </div>
                </Card>
                <Card image='/images/gant.avif'>
                    <div className='info'>
                        <p>Top Casual Styles</p>
                        <span>MIN. 50% OFF</span>
                    </div>
                </Card>
                <Card image='/images/blazer.webp'>
                    <div className='info'>
                        <p>Office Outfits</p>
                        <span>FLAT 60% OFF</span>
                    </div>
                </Card>
                <Card image='/images/kurta.avif'>
                    <div className='info'>
                        <p>Best of Kurtas</p>
                        <span>UNDER Rs.499</span>
                    </div>
                </Card>
                <Card image='/images/kurta.jpg'>
                    <div className='info'>
                        <p>Kurta Sets for The Season</p>
                        <span>MIN 60-80% OFF</span>
                    </div>
                </Card>
                <Card image='/images/ethnic.jpg'>
                    <div className='info'>
                        <p>Stylish Ethnic Wear</p>
                        <span>Starting at Rs. 399</span>
                    </div>
                </Card>
                <Card image='/images/ethnic.webp'>
                    <div className='info'>
                        <p>Stylish Ethnic Wear</p>
                        <span>Starting at Rs. 499</span>
                    </div>
                </Card>
            </div>

            <Category wishCount={wishCount} addCount={addCount} setWishcount={setWishcount} setAddcount={setAddcount} />

            <div className='download'>
                <img src="/images/download.png" alt="image" />
            </div>

            <Footer/>

        </div>
    )
}

export default Main
