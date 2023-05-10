import React from 'react'

import { useState } from "react";

import { close, menu } from "../../assets";

import { logo } from '../../assets'
import { navLinks } from '../../constants'
import styles from '../../style'
import './Navbar.css'

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(true);

  return (
    <header className='w-full fixed h-[72px] sm:h-[120px] z-[6] bg-white'>
        <nav className={`${styles.container} flex w-full items-center justify-between navbar py-5`}>
            <img src={logo} alt="rebank logo" className='w-[124px] h-[32px]' />
            <ul className='sm:flex hidden list-none nav-list items-center bg-black rounded-full gap-8'>
                {navLinks.map((links, index) => 
                    <li 
                        key={links.id}
                        className='navbar-item relative font-Inter font-normal text-white text-[16px] cursor-pointer'>
                            <a href="#" className='navbar-link'>{links.title}</a>
                    </li>)
                }
            </ul>

            <div className="moblie_navs sm:hidden ">
                <img 
                    src={toggle ? menu : close } alt="menu" 
                    className='bg-[grey] w-[35px] h-[35px] object-contain rounded-[50%] p-[5px]'
                    onClick={() => setToggle(!toggle)}
                    
                />

                <div 
                    className={`${!toggle ? "flex" : "hidden"} 
                        absolute top-[72px] sidebar bg-[#000000] rounded-b-[20px]
                        pl-[20px] left-[0px] w-full py-[20px] mobile_nav
                    `}
                >
                    <ul className=' flex flex-col gap-[50px]'>
                        {navLinks.map((links, index) =>
                            <li 
                                key={links.id} 
                                className='navbar-item relative w-[fit-content] font-Inter font-normal text-white text-[16px] cursor-pointer'
                            >
                                <a href="#" className='navbar-link' onClick={() => setToggle(!toggle)}>{links.title}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>


            {/* <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                    onClick={() => setActive(nav.title)}
                >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
                />

                <div
                className={`${
                    !toggle ? "hidden" : "flex"
                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                    {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-white" : "text-dimWhite"
                        } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                    ))}
                </ul>
                </div>
            </div> */}
        </nav>
    </header>
  )
}

export default Navbar