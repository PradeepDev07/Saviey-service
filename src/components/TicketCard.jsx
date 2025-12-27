import React from 'react'
import styles from './TicketCard.module.css'

const TicketCard = ({ data }) => {
    return (

        <div className={`${styles.box} ${styles[data.style]}`}>
            <img src={data.logo} alt={data.title} className={styles.logo} />
            <div className={styles.contentBox}>



                <div className={styles.GlassyboxButton}>
                    <div className={styles.Glassycontent}>
                        <h3 className={styles.title}>{data.title}</h3>
                        <p className={styles.description}>{data.description}</p>
                    </div>
                    <div className={styles['dashed-line']}></div>
                    <div className={styles.buttonSection}>

                        <button className={styles.claimButton}>claim Now</button>
                    </div>


                </div>
            </div>
            <div className={styles.starOne}>
                <img src="/yellow-star.svg" alt="star" />
            </div>
            <div className={styles.starTwo}>
                <img src="/yellow-star.svg" alt="star" />
            </div>
            <div className={styles.starThree}>
                <img src="/white-star.svg" alt="star" />
            </div>




        </div>


    )
}

export default TicketCard
