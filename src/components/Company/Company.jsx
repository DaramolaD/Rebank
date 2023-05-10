import React from 'react'

import './Company.css'
import { logo_item, logo_item_1, logo_item_2, logo_item_3, logo_item_4 } from '../../assets'
import styles from '../../style'

const Company = () => {
  return (
    <section className='mt-[100px]'>
        <div className= {`${styles.container} grid justify-items-center w-full gap-[20px]`}>
            <div className="company-title text-center">
                <h3>Used by the world's most amazing companies</h3>
            </div>
            <div className="images gap-[20px] flex items-center w-full flex-wrap justify-center">
                <img src={logo_item} alt="" srcset="" />
                <img src={logo_item_1} alt="" srcset="" />
                <img src={logo_item_2} alt="" srcset="" />
                <img src={logo_item_3} alt="" srcset="" />
                <img src={logo_item_4} alt="" srcset="" />
            </div>
        </div>
    </section>
  )
}

export default Company