import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ProductImages from './ProductImages'
import ProductData from './ProductData'

const ProductDetails = ({ product, handleAddToCart, handleAddToWishlist, handleRemoveFromWishlist, wishlisted }) => {
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0)
    const selectedVariant = product.variants[selectedVariantIndex]

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 col-gap-8'>
            <div className='mt-0 sm:mt-6 w-screen sm:w-screen-none'>
                <ProductImages images={selectedVariant.images} />
            </div>

            <div className='my-4 sm:mt-6'>
                <ProductData
                    name={product.name}
                    variants={product.variants}
                    selectedVariant={selectedVariant}
                    onChange={setSelectedVariantIndex}
                    handleAddToCart={handleAddToCart}
                    handleAddToWishlist={handleAddToWishlist}
                    handleRemoveFromWishlist={handleRemoveFromWishlist}
                    wishlisted={wishlisted}
                />
            </div>
        </div>
    )
}

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
    handleAddToWishlist: PropTypes.func.isRequired,
    handleRemoveFromWishlist: PropTypes.func.isRequired,
    wishlisted: PropTypes.bool,
}

export default ProductDetails
