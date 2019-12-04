import React from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import Slider from '../../../patterns/templates/slider'

const OrganismsSizeSwiper = ({ sizes }) => {
    return (
        <div className='o-swiper display-grid'>
            <Slider options={{ fixedWidth: '150px' }}>
                {sizes.map((c, i) => {
                  return <button key={i} className='o-swiper__item c-chip'>{c}</button>
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
