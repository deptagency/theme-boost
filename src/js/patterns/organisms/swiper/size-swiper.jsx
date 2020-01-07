import React from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import Slider from '../../../patterns/templates/slider'

const SizeSwiper = ({ sizes }) => {
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

SizeSwiper.propTypes = {
    sizes: PropTypes.array.isRequired,
}

SizeSwiper.defaultProps = {
    sizes: ['36', '38', '40', '42', '44', '46', '48', '50', '52', '54', '56'],
}

export default ComponentInjector.return('SizeSwiper', SizeSwiper)
