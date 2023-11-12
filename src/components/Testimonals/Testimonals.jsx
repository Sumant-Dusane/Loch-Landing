import React from 'react';
import "./testimonal.scss";
import spriteIcon from "../../assets/sprite.svg";

export default function Testimonals() {
    return (
        <div className='testimonal'>
            <div className="testimonal__title">Testimonals</div>
            <hr className='testimonal__divider' />
            <div className="testimonal__wrapper">
                <i className="logo"><svg width={60} height={60}><use href={spriteIcon + '#icon-logo'}></use></svg></i>
                <div className="carousel">
                    <div className="card">
                        <div className="title">Jack F <span>Ex Blackrock PM</span></div>
                        <p className="feedback">"Love how Loch integrates portfolio analytics and whale watching into one unified app."</p>
                    </div>
                    <div className="card">
                        <div className="title">Yash P <span>Research, 3poch Crypto Hedge Fund</span></div>
                        <p className="feedback">"I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!"</p>
                    </div>
                    <div className="card">
                        <div className="title">Yash P <span>Research, 3poch Crypto Hedge Fund</span></div>
                        <p className="feedback">"I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
