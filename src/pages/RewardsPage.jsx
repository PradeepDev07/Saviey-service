import React from 'react'
import TicketCard from '../components/TicketCard'
import { RewardsData } from '../data/Data'
import style from './Rewards.module.css'
import { useState } from 'react'
import FilterBar from '../components/FilterBar'
import NavBar from '../components/NavBar'

const RewardsPage = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');
    
    const FilteredData =  activeCategory === 'ALL' ? RewardsData : RewardsData.filter(item => item.catagory.toUpperCase() === activeCategory);
   
    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
    
    }
    return (
        <div className={style.RewardsPageContainer}>
            <div className={`${style.RewardsHeader} ${style.flex} ${style.spaceBetween} ${style["p-x"]} ${style["m-x"]}`}>


                <h1 className={style.title}>Rewards </h1>
                <div className={`${style.flex} ${style.iconContainer}`}>
                    <div >
                        <img src="/notification.svg" alt="reward-icon" className={`${style.RewardIcon} ${style.icon}`} />
                    </div>
                    <div>
                        <img src="/profile.svg" alt="info-icon" className={`${style.InfoIcon} ${style.icon}`} />
                    </div>

                </div>
            </div>
            <FilterBar onCategoryChange={handleCategoryChange} activeCategory={activeCategory} />
            <section className={style.RewardsSection}>
                

                <div className={style.RewardsContainer}>
                    {
                        FilteredData.map((item) => {
                            return (
                                <TicketCard key={item.id} data={item} />
                            )
                        }
                        )

                    }

                </div>
                
            </section>
             <div className={style.NavBarWrapper}>
                 <NavBar />
               </div>

        </div>
    )
}

export default RewardsPage