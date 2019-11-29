import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import OrganismsProductStage from '../stages/stage-product'
import OrganismsSizeSwiper from '../swiper/size-swiper'
// eslint-disable-next-line no-unused-vars
import OrganismsImageColorSwiper from '../swiper/image-color-swiper'
import Button from '../../atoms/buttons/button'
import app from 'frontastic-catwalk/src/js/app/app'

const OrganismsProductView = ({ images, name, variant, sizes }) => {
    return (
        <div className='o-grid'>
            <OrganismsProductStage
                images={images}
                name={name}
                price={variant.price}
                dicountedPrice={variant.discountedPrice}
            />
            <h3 className='c-title-level-3 o-distance-m o-prevent-space'><FormattedMessage id='sizeProduct'/></h3>
            <div className='o-distance-s display-grid'>
                <OrganismsSizeSwiper sizes={sizes} />
            </div>
            {/* Commenting out colors for now */}
            {/* <h3 className='c-title-level-3 o-distance-m o-prevent-space'>Farbe: Olive</h3>
            <div className='o-distance-s display-grid'>
                <OrganismsImageColorSwiper />
            </div> */}
            <div className='o-distance-l o-prevent-space'>
                <Button
                    type='primary'
                    size='boss'
                    onClick={() => {
                        app.getLoader('cart').add(null, variant, 1, null)
                    }}
                >
                    <FormattedMessage id='inCartProduct'/>
                </Button>
            </div>
        </div>
    )
}

OrganismsProductView.propTypes = {
    images: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    variant: PropTypes.object.isRequired,
}

OrganismsProductView.defaultProps = {
    images: [],
    sizes: [],
}

export default OrganismsProductView
