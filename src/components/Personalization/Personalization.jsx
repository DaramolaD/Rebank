import React from 'react'
import { arrow_slant, atm_frame, hero_column_right } from '../../assets';
import styles from '../../style';
import './Personalization.css'

const Personalization = () => {
  return (
    <section className='personalization pt-[100px] pb-[20px]'>
        <div className={`${styles.container} per-conts grid grid-cols-2 gap-[200px]`}>
            <div className="per-text-conts  grid gap-[50px] h-max">
                <h2 className='text-[#000000] text-[16px] font-semibold font-roboto'>Personalisation</h2>
                <h3 className='text-[#111111] text-[48px] font-roc font-bold'>Stand out from the crowd with a card and app to match your style</h3>
                <p className='text-[#111111] text-[18px] font-regular font-roboto'>Don't blend into the crowd with a boring bank card, stand out! Choose a card colour to suit your style and the app will change to match.</p>
                
                <div className='btn-cont px-[25px] gap-[10px] py-[10px] 
                        flex items-center max-w-[fit-content] border-[#000000] 
                        border-solid border-[1px] rounded-full bg-[#ffff]
                    '>
                    <p>Find out more</p>
                    <img src={arrow_slant} alt=""/>
                </div>
            </div>
            <div className="pre-img-cont relative">
                <img src={hero_column_right} alt="lady with atm"/>
                <img src={atm_frame} alt="" className='card_atm' />
            </div>
        </div>
    </section>
  )
}

export default Personalization;