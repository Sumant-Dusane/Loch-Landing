import React from 'react';
import "./landing.scss";
import spriteIcon from '../../assets/sprite.svg';
import productSnapshot from "../../assets/images/product-preview.jpeg";
import Testimonals from '../Testimonals/Testimonals';

export default function Landing() {
  return (
    <div className='landing'>
      <div className="landing__left">
        <div className='row row--title'>
          <div className="text-box">
            <svg width={32} height={32}><use href={spriteIcon + '#icon-bell'}></use></svg>
            <div className='title'>Get notified when a highly correlated whale makes a move</div>
            <p>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
          </div>
          <div className="carousel">
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
          </div>
        </div>
        <div className="row row--product">
          <img src={productSnapshot} alt="Loco" />
          <div className="text-box">
            <svg width={32} height={32}><use href={spriteIcon + '#icon-eye'}></use></svg>
            <div className='title'>Watch what the whales are doing</div>
            <p>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
          </div>
        </div>
        <div className="row row--testimonals">
          <Testimonals />
        </div>
      </div>
      <form className="landing__right">
        <div className="landing__right__wrapper">
          <div className="title">Sign up for <br /> exclusive access.</div>
          <input className='input' type="email" placeholder='Your email address' />
          <input className='button' type='submit' value="Get Started" />
          <p className='tagline'>You'll receive an email with an invite link to join.</p>
        </div>
      </form>
    </div>
  )
}
