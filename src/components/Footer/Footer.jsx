import React from 'react'
import styles from '../../style'
import { logo } from '../../assets'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='pt-[100px] pb-[50px]'>
        <div className={`${styles.container} footer_conts grid grid-cols-2 gap-[100px]`}>
            <div className="brand-conts grid grid-cols-3 gap-[50px]">
                <div className="logo max-w-[100px]">
                    <img src={logo} alt="" srcset="" />
                </div>
                <div className="about_conts grid gap-[20px]">
                    <h5>
                        <a href="#" className='text-[#000000] text-[16px] font-roboto font-semibold'>About</a>
                    </h5>
                    <ul className="about_list grid gap-[15px]">
                        <li className="about_items">
                            <a href="#" className='text-[#000000] text-[14px] font-roboto font-regular'>Pricing</a>
                        </li>
                        <li className="about_items">
                            <a href="#" className='text-[#000000] text-[14px] font-roboto font-regular'>FAQ</a>
                        </li>
                        <li className="about_items">
                            <a href="#" className='text-[#000000] text-[14px] font-roboto font-regular'>Contact</a>
                        </li>
                        <li className="about_items">
                            <a href="#" className='text-[#000000] text-[14px] font-roboto font-regular'>Name</a>
                        </li>
                </ul>
                </div>
                <div className="about_conts grid gap-[20px]">
                    <h5><a href="#" className='text-[#000000] text-[16px] font-roboto font-semibold'>App</a></h5>
                    <ul className="about_list grid gap-[15px]">
                        <li className="about_items">
                            <a href="#" className='text-[#000000] text-[14px] font-roboto font-regular'>Download</a>
                        </li>
                        <li className="about_items">
                            <a href="#" className='text-[#000000] text-[14px] font-roboto font-regular'>Virtual Card</a>
                        </li>
                        <li className="about_items">
                            <a href="#" className='text-[#000000] text-[14px] font-roboto font-regular'>Transfer</a>
                        </li>
                        <li className="about_items">
                            <a href="#" className='text-[#000000] text-[14px] font-roboto font-regular'>Loack Cards</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="brand-sub grid gap-[25px]">
                <h5>
                    <a href="#" className='text-[#000000] text-[16px] font-roboto font-semibold'>Subscribe</a>
                </h5>
                <p>Join our newsletter to stay up to date on features and releases.</p>
                <div className="input-conts bg-[#E6E6E6] pl-[20px] pl-[25px] rounded-[30px] max-w-max">
                    <input type="text" placeholder='Enter your email' className='bg-[transparent] text-[#505050]'/>
                    <button className='bg-[#111111] rounded-[30px] text-[#FFFFFF] px-[18px] py-[10px]'>Subscribe</button>
                </div>
                <p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer