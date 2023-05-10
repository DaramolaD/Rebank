import React from 'react'
import styles from '../../style'

const Faq = () => {
  return (
    <section>
        <div className={`${styles.container} flex justify-center text-center`}>
            <div className="faq_titles">
                <h2 className='text-[#000000] text-[48px] font-bold font-roc'>FAQs</h2>
                <p className='text-[#000000] text-[18px] font-regular font-roboto'>Don't see your question here? Get in touch</p>
            </div>
            <details>
                <div className="tesdt">THSLJNXKJ KJ</div>
                <summary>
                    How to check
                </summary>
            </details>
        </div>
    </section>
  )
}

export default Faq