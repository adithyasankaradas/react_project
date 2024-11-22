// src/Layout.js
import React from 'react';
import './App.css';

const Nav = () => {
    return (
        <div className="container">
            <nav className='navbar'>
                <ul>
                    <li className='li'>Home</li>
                    <li className='li'>Contact</li>
                    <li className='li'>Services</li>
                </ul>
            </nav>
        </div>
    );
};

const Carousel = () => {
    return(
        <div id='carouselExampleIndicators' className='carousel slide'>
            <div className="carousel-indicators">
                <button type="button" data-target="#carouselExampleIndicators" data-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-target="#carouselExampleIndicators" data-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-target="#carouselExampleIndicators" data-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.Ow9BhjDQp2ubtUMmfh7t1AHaCs&pid=Api&P=0&h=180" className="d-block w-100" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/800x400?text=Second slide" className="d-block w-100" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/800x400?text=Third slide" className="d-block w-100" alt="Third slide" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

const Layout = () => {
    return (
        <div>
            <Nav />
            <Carousel />
        </div>
    );
};

export default Layout;
