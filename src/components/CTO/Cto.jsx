import React from 'react'
import styles from '../../style'
import './Cto.css'
import { hand_atm_card } from '../../assets'

const Cto = () => {
  return (
    <section className='cto bg-[#090402] py-[50px]'>
        <div className={`${styles.container} cto-conts py-[100px] cto-conts flex items-center h-[500px] relative z-[1]`}>
            <div className="cto_text  grid gap-[30px] h-[fit-content] max-w-[600px]">
                <h2 className='text-[#FFFFFF] font-roc text-[48px] text-medium'>Take your savings to the next level today</h2>
                <p className='text-[#FFFFFF] font-roboto text-[18px] text-regular max-w[300px]'>Get started today and take your financial control into the future.</p>
                <div className="btn bg-[#F2FF37] text-[#090402] rounded-[30px] w-max px-[12px] py-[10px]">Get Started</div>
                <img src={hand_atm_card} alt="" className="absolute b-[-90px] z-[-1]" />
            </div>
        </div>
    </section>
  )
}

export default Cto