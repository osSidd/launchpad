import * as React from 'react'
import heroImg from '../../../static/hero.jpg'
import * as styles from '../../styles/home.module.css'

export default function Hero(){
    return (
        <div className='bg-hero-bg min-h-screen flex items-center justify-center'>
            <div className='wrapper grid grid-cols-2 gap-4'>
                <div className="">
                    <h1 className='text-hero-title text-title font-extrabold leading-title'>Dummy Heading Text for the page</h1>
                    <p className="text-hero-secondary text-hero-desc leading-description pt-8">
                        Product description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='mt-8'>
                        <button className="btn">Sign up</button>
                        <button className="btn">Contact</button>
                    </div>            
                </div>
                <div className='hero-img'>
                    <img src={heroImg} alt = "hero image" />
                </div>
            </div>
        </div>
    )
}
