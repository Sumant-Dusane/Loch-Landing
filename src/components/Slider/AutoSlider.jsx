import React from 'react';
import "./auto-slider.scss";
import spriteIcon from '../../assets/sprite.svg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function AutoSlider() {
    const slickSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1.7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 0.8,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 0.75,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <Slider className='slider' {...slickSettings}>
            <div className="card">
                <i className="icon"><svg width={32} height={32}><use href={spriteIcon + '#icon-bell--outline-dark'}></use></svg></i>
                <button className="button">save</button>
                <div className="title">We'll be sending notifications to you here</div>
                <input className='footer' type="text" name="" id="" />
            </div>
            <div className="card">
                <i className="icon"><svg width={29} height={28}><use href={spriteIcon + '#icon-bar-dark'}></use></svg></i>
                <input className='button' type="checkbox" />
                <div className="title">Notify me when any wallets move more than</div>
                <select className="footer">
                    <option value="1000.00">$1,000.00</option>
                    <option value="2000.00">$2,000.00</option>
                </select>
            </div>
            <div className="card">
                <i className="icon"><svg width={29} height={28}><use href={spriteIcon + '#icon-clock-dark'}></use></svg></i>
                <input className='button' type="checkbox" />
                <div className="title">Notify me when any wallets move more than</div>
                <select className="footer">
                    <option value="1000.00">$1,000.00</option>
                    <option value="2000.00">$2,000.00</option>
                </select>
            </div>
        </Slider>
    )
}