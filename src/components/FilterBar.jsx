import React from 'react'
import { Categories } from "../data/Data"
import style from './FilterBar.module.css'

const FilterBar = ({ onCategoryChange, activeCategory }) => {
    console.log(activeCategory === Categories[0].id.toUpperCase() ? style.active : '')
    return (
        <div>
            <div className={style.container}>
                {Categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => onCategoryChange(category.id)}
                        className={`${style.con} ${activeCategory === category.id.toUpperCase() ? style.active : ''}`}

                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default FilterBar