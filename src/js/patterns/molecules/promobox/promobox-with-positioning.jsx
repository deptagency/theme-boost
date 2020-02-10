import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Image from '@frontastic/catwalk/src/js/image'
import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import { ribbon, ribbonTopRight } from './promobox-with-positioning.module.scss'

class PromoboxWithPositioning extends Component {
    render () {
        const { children, vertical, horizontal, height, image, customChildrenStyle } = this.props
        let style = {}
        if (typeof height !== 'undefined') {
            style = { ...style, height }
        }

        if (!image || !image.media) {
            return null
        }

        var showRibbon = false
        if (vertical === 'bottom' && horizontal === 'left') {
            showRibbon = true
        }

        return (
            <div className='c-promobox t-spotlight u-aspect-ratio-16x9 u-aspect-ratio-21x9-large' style={style}>
                <Image
                    media={image.media}
                    alt={<Translatable value={image.media.title} />}
                    className='c-promobox__backdrop tns-lazy' />
                <div className={`c-promobox__overlay c-promobox__overlay--${vertical}-${horizontal}`}>
                    {showRibbon && (
                        <div className={`${ribbonTopRight} ${ribbon}`}>
                            <span>BETA</span>
                        </div>
                    )}
                    <div className={`c-promobox__overlay__inner`}>
                        <div style={customChildrenStyle}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

PromoboxWithPositioning.defaultProps = {
    vertical: 'middle',
    horizontal: 'center',
    customChildrenStyle: {},
}

PromoboxWithPositioning.propTypes = {
    children: PropTypes.node.isRequired,
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
    height: PropTypes.string,
    image: PropTypes.object.isRequired,
    customChildrenStyle: PropTypes.object,
}

export default ComponentInjector.return('PromoboxWithPositioning', PromoboxWithPositioning)
