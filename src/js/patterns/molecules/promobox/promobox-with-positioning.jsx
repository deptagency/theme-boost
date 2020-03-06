import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Image from '@frontastic/catwalk/src/js/image'
import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import { ribbon, ribbonTopRight } from './promobox-with-positioning.module.scss'

// Deprecated - will be removed
// Use content/tiles/tile.jx

class PromoboxWithPositioning extends Component {
    render () {
        const { children, vertical, horizontal, image, childrenClassName } = this.props

        if (!image || !image.media) {
            return null
        }

        var showRibbon = false
        if (vertical === 'bottom' && horizontal === 'left') {
            showRibbon = true
        }

        return (
            <div className={`aspectRatioPromobox relative rounded-md ${childrenClassName}`}>
                <Image
                    media={image.media}
                    alt={<Translatable value={image.media.title} />}
                    className='aspectRatioPromoboxInside lock h-full w-full top-0 left-0 absolute opacity-75 rounded-md'
                />
                <div className='h-full w-full'>
                    {showRibbon && (
                        <div className={`${ribbonTopRight} ${ribbon}`}>
                            <span>BETA</span>
                        </div>
                    )}
                    <div className={`${vertical}-0 ${horizontal}-0 flex absolute rounded-lg p-4 md:p-8 ${(vertical === 'middle') ? 'items-center top-0 bottom-0' : ''} ${(horizontal === 'center') ? 'justify-center left-0 right-0' : ''}`}>
                        {/* <div style={customChildrenStyle}> */}
                        {children}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

PromoboxWithPositioning.defaultProps = {
    vertical: 'middle',
    horizontal: 'center',
    childrenClassName: '',
}

PromoboxWithPositioning.propTypes = {
    children: PropTypes.node.isRequired,
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
    image: PropTypes.object.isRequired,
    childrenClassName: PropTypes.object,
}

export default ComponentInjector.return('PromoboxWithPositioning', PromoboxWithPositioning)
