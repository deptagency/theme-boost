import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

const OrganismsSizeSwiper = ({ sizes }) => {
    return (
        <div className='o-swiper'>
            <div className='o-swiper__holder'>
                {sizes.map((c) => {
                  return <button className='o-swiper__item c-chip'>{c}</button>
              })}
            </div>
        </div >
    )
}

OrganismsSizeSwiper.propTypes = {
    sizes: PropTypes.array.isRequired,
}

OrganismsSizeSwiper.defaultProps = {
    sizes: ['36', '38', '40', '42', '44', '46', '48', '50', '52', '54', '56'],
}

export default ComponentInjector.return('OrganismsSizeSwiper', OrganismsSizeSwiper)
