import React from 'react'
import styles from '../../style'
import { get_arrow, hero_cards, hero_img, icon_arrow_down } from '../../assets'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero pt-[250px] pb-[50px]'>
        <div className={`${styles.container} hero-conts relative grid grid-cols-2 gap-16 items-center`}>
            <div className="text-cont flex flex-col gap-6">
                <h1>Welcome to personalised banking</h1>
                <p>More than a debit card, we've redesigned and reimagined the entire idea of banking.</p>
                <div className="arrow-btn-conts grid place-content-center rounded-full my-10">
                    <div className="arrow-btn flex gap-2">
                        <p>Get</p>
                        <img src={get_arrow} alt="arrow img" className='w-[29px]'/>
                    </div>
                    <p>Started</p>
                </div>
                <div className="arrow-btn-conts-2 flex items-center gap-2.5">
                    <p>Find out more</p>
                    <img src={icon_arrow_down} alt="" srcset="" />
                </div>
            </div>
            <div className="hero_img_conts relative flex gap-5 flex-wrap xl:flex-nowrap">
                <img src={hero_img} alt="" className="mockup max-h-[700px]" />
                <div className="hero-add-text xl:py-20">
                    <p>+ Spend securely. </p>
                    <p>+ Pay anyway you want.</p>
                    <p>+ Get insights about your money.</p>
                </div>
                <div className="text-col-grad"></div>
                <div className="atm-cards w-[120%] bottom-[50%] absolute ml-[10px] translate-y-[50%]">
                    <img src={hero_cards} alt="" srcset="" />
                    <div className="text-col-grad_2"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero