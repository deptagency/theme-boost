import React from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import Slider from '../../../patterns/templates/slider'

const OrganismsSizeSwiper = ({ sizes }) => {
    return (
        <div className='o-swiper'>
            <Slider options={{ fixedWidth: '150px' }}>
                {sizes.map((c, i) => {
                  return <div className='o-swiper__item'><button key={i} className='c-chip'>{c}</button></div>
              })}
            </Slider>
        </div>
    )
}

OrganismsSizeSwiper.propTypes = {
    sizes: PropTypes.array.isRequired,
}

OrganismsSizeSwiper.defaultProps = {
    sizes: ['36', '38', '40', '42', '44', '46', '48', '50', '52', '54', '56'],
}

export default ComponentInjector.return('OrganismsSizeSwiper', OrganismsSizeSwiper)
