import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import Slider from '../../../patterns/templates/slider'

class ImageColorSwiper extends Component {
    render () {
        const { colors } = this.props

        return (
            <div className='o-swiper display-grid'>
                <Slider options={{ fixedWidth: 108 }} className='o-swiper__holder'>
                    {colors.map((src) => {
                        return (
                            <div className='o-swiper__item'>
                                <div className='c-image-thumb'>
                                    <img className='o-swiper__image' src={src} width='100px' alt='' />
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

ImageColorSwiper.propTypes = {
    colors: PropTypes.array.isRequired,
}

ImageColorSwiper.defaultProps = {
    colors: [
        'http://res.cloudinary.com/dlwdq84ig/image/upload/c_fill,f_auto,g_faces:auto,h_235,q_auto,w_235/jdlzhpumcn6hadthiiiv',
        'http://res.cloudinary.com/dlwdq84ig/image/upload/c_fill,f_auto,g_faces:auto,h_235,q_auto,w_235/pdqq6pyi9b3httcdfekk',
    ],

}

export default ComponentInjector.return('ImageColorSwiper', ImageColorSwiper)
