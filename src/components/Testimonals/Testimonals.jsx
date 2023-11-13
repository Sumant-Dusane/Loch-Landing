import React, { useEffect, useRef, useState } from 'react';
import "./testimonal.scss";
import spriteIcon from "../../assets/sprite.svg";
import { motion } from "framer-motion"

export default function Testimonals() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div className='testimonal'>
            <div className="testimonal__title">Testimonals</div>
            <hr className='testimonal__divider' />
            <div className="testimonal__wrapper">
                <i className="logo"><svg width={60} height={60}><use href={spriteIcon + '#icon-logo'}></use></svg></i>
                <motion.div className="carousel__wrapper" ref={carousel}>
                    <motion.div className="carousel" drag="x" dragConstraints={{ left: -width, right: 50 }}>
                        <motion.div className="card">
                            <div className="title">Jack F <span>Ex Blackrock PM</span></div>
                            <p className="feedback">"Love how Loch integrates portfolio analytics and whale watching into one unified app."</p>
                        </motion.div>
                        <motion.div className="card">
                            <div className="title">Yash P <span>Research, 3poch Crypto Hedge Fund</span></div>
                            <p className="feedback">"I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!"</p>
                        </motion.div>
                        <motion.div className="card">
                            <div className="title">Yash P <span>Research, 3poch Crypto Hedge Fund</span></div>
                            <p className="feedback">"I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!"</p>
                        </motion.div>
                        <motion.div className="card">
                            <div className="title">Yash P <span>Research, 3poch Crypto Hedge Fund</span></div>
                            <p className="feedback">"I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!"</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
