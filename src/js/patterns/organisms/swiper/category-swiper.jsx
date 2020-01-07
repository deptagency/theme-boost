import React from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

const CategorySwiper = ({ categories }) => {
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

CategorySwiper.propTypes = {
    categories: PropTypes.array.isRequired,
}

CategorySwiper.defaultProps = {
    categories: ['Freizeitkleider', 'Ballkleider', 'Abendkleider', 'Blusenkleider', 'Jerseykleider'],
}

export default ComponentInjector.return('CategorySwiper', CategorySwiper)
