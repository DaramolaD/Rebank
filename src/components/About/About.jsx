import React from 'react'
import styles from '../../style'
import './About.css'
import { arrow_slant, card_3, card_hero_back_map, card_hero_image_wrapper } from '../../assets'

const About = () => {
  return (
    <section className='about bg-[#111111] mt-[100px] rounded-[50px]'>
        <div className={`${styles.container} grid gap-[60px] pt-[100px] relative justify-items-center rounded-[50px]`}>
            <div className="about-title text-center">
                <h3 className='font-bold color-[#FFFFFF] text-[64px] text-[#FFFFFF] font-roc'>Welcome to banking <br/> revolving around you.</h3>
            </div>
            <div className="cards-conts grid grid-cols-2 gap-[50px] w-[80%]">
                <div
                    className={`card-cont h-[900px] bg-no-repeat
                         bg-[#fff] p-[30px] rounded-[20px]
                         bg-center-bottom grid content-between justify-items-start
                         `}>
                    <div className="text-cont">
                        <h2 className="text-[#000000] text-[16px] font-semibold font-roboto">Physical Card</h2>
                        <h3 className="my-[20px] text-[30px] font-bold font-roc xl:text-[48px] md:text-[40px]">Spend anywhere with a physical debit card</h3>
                        <p className='text-[#000000] text-[18px] font-regular font-roboto'>The debit card is designed to spend everywhere and 
                            everywhere with simplicity and transparency built in. 
                            An RFID transponder embedded in its core enables 
                            you to pay with a quick touch-free wave.
                        </p>
                    </div>
                    <div className='btn-cont px-[25px] gap-[10px] py-[10px] 
                            flex items-center max-w-[fit-content] border-[#000000] 
                            border-solid border-[1px] rounded-full bg-[#ffff]
                        '>
                        <p>Find out more</p>
                        <img src={arrow_slant} alt="" srcset="" />
                    </div>
                </div>
                <div
                    className={`card-cont card-cont_2 h-[900px] bg-no-repeat
                         bg-[#fff] p-[30px] rounded-[20px] bg-[url(${card_hero_back_map})]
                         bg-center-bottom grid content-between justify-items-start
                         `}>
                    <div className="text-cont">
                        <h2 className="text-[#000000] text-[16px] font-semibold font-roboto">Physical Card</h2>
                        <h3 className="my-[20px] text-[30px] font-bold font-roc xl:text-[48px] md:text-[40px]">Spend anywhere with a physical debit card</h3>
                        <p className='text-[#000000] text-[18px] font-regular font-roboto'>
                            The debit card is designed to spend everywhere and everywhere with simplicity 
                            and transparency built in. 
                            An RFID transponder embedded in its core enables you to pay with a quick touch-free wave.
                        </p>
                    </div>
                    <div className='btn-cont px-[25px] gap-[10px] py-[10px] 
                            flex items-center max-w-[fit-content] border-[#000000] 
                            border-solid border-[1px] rounded-full bg-[#ffff]
                        '>
                        <p>Find out more</p>
                        <img src={arrow_slant} alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div className="cards-img flex justify-center w-[80%]">
                <img src={card_3} alt="" />
            </div>
            <div className="yellow-conts"></div>
            <div className="brown-conts"></div>
        </div>
    </section>
  )
}

export default About