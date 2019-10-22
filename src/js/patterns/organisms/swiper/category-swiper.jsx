import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

const OrganismsCategorySwiper = ({ categories }) => {
    return (
        <div className='o-swiper'>
            <div className='o-swiper__holder'>
                {categories.map((c) => {
                  return <button className='o-swiper__item c-chip'>{c}</button>
              })}
            </div>
        </div >
    )
}

OrganismsCategorySwiper.propTypes = {
    categories: PropTypes.array.isRequired,
}

OrganismsCategorySwiper.defaultProps = {
    categories: ['Freizeitkleider', 'Ballkleider', 'Abendkleider', 'Blusenkleider', 'Jerseykleider'],
}

export default ComponentInjector.return('OrganismsCategorySwiper', OrganismsCategorySwiper)
