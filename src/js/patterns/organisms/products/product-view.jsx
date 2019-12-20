import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import OrganismsProductStage from '../stages/stage-product'
import OrganismsSizeSwiper from '../swiper/size-swiper'
// eslint-disable-next-line no-unused-vars
// import OrganismsImageColorSwiper from '../swiper/image-color-swiper'
import Button from '../../atoms/buttons/button'
import app from 'frontastic-catwalk/src/js/app/app'
import AtomsPrice from '../../atoms/prices/price'

const AddToCartButton = ({ variant }) => {
    return (
        <Button
            type='primary'
            size='boss'
            onClick={() => {
                app.getLoader('cart').add(null, variant, 1, null)
            }}
            >
            <FormattedMessage id='inCartProduct' />
        </Button>
    )
}

AddToCartButton.propTypes = {
    variant: PropTypes.object.isRequired,
}

const OrganismsProductView = ({ images, name, variant, sizes, addToWishlist }) => {
    return (
        <div>
            <OrganismsProductStage
                images={images}
                name={name}
                price={<AtomsPrice large='true' value={variant.price} old={variant.discountedPrice !== null} />}
                discountedPrice={variant.discountedPrice ? <AtomsPrice value={variant.discountedPrice} /> : null}
                addToWishlist={addToWishlist}
            />

            <div className='u-hidden-medium-up'>
                <h3 className='c-title-level-3 o-distance-m'>
                    <FormattedMessage id='sizeProduct' />
                </h3>
                <div className='o-distance-s'>
                    <OrganismsSizeSwiper sizes={sizes} />
                </div>
                <div className='o-distance-l'>
                    <AddToCartButton variant={variant} />
                </div>
            </div>

            {/* Commenting out colors for now */}
            {/* <h3 className='c-title-level-3 o-distance-m o-prevent-space'>Farbe: Olive</h3>
            <div className='o-distance-s display-grid'>
                <OrganismsImageColorSwiper />
            </div> */}

            {/* <div className='o-distance-l o-prevent-space'>
                <Button
                    type='primary'
                    size='boss'
                    onClick={() => {
                        app.getLoader('cart').add(null, variant, 1, null)
                    }}
                >
                    <FormattedMessage id='inCartProduct' />
                </Button>
            </div> */}
        </div>
    )
}

OrganismsProductView.propTypes = {
    images: PropTypes.array.isRequired,
    // TODO: Rename, because these are actually variants that can be selected
    sizes: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    variant: PropTypes.object.isRequired,
    addToWishlist: PropTypes.func,
}

OrganismsProductView.defaultProps = {
    images: [],
    sizes: [],
}

export default OrganismsProductView
