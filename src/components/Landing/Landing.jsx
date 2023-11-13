import React, { useState } from 'react';
import "./landing.scss";
import spriteIcon from '../../assets/sprite.svg';
import productSnapshot from "../../assets/images/product-preview.jpeg";
import Testimonals from '../Testimonals/Testimonals';
import AutoSlider from '../Slider/AutoSlider';

export default function Landing() {
  const [isFormValid, setFormValidStatus] = useState(true);
  const registerEmail = (e) => {
    e.preventDefault();
    console.log(e);
    let emailAdd = e.target[0].value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAdd)) {
      setFormValidStatus(false);
      return
    }
    setFormValidStatus(true);
    e.target[0].value = '';
    setTimeout(() => {
      window.location.href = 'https://app.loch.one/welcome';
    }, 300);
    e.target[1].disabled = true;
  }
  return (
    <div className='landing'>
      <div className="landing__left">
        <div className='row row--title'>
          <div className="text-box">
            <svg width={32} height={32}><use href={spriteIcon + '#icon-bell'}></use></svg>
            <div className='title'>Get notified when a highly correlated whale makes a move</div>
            <p>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
          </div>
          <AutoSlider />
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
      <form className="landing__right" onSubmit={registerEmail}>
        <div className="landing__right__wrapper">
          <div className="title">Sign up for <br /> exclusive access.</div>
          <div>
            <input className='input' type="text" placeholder='Your email address' />
            <small className={isFormValid ? 'input--error' : 'input--error show'}>Please enter a valid email</small>
          </div>
          <input className='button' type='submit' value="Get Started" />
          <p className='tagline'>You'll receive an email with an invite link to join.</p>
        </div>
      </form>
    </div>
  )
}
