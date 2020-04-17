import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ProductImages from './ProductImages'
import ProductData from './ProductData'

const ProductDetails = ({ product }) => {
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0)
    const selectedVariant = product.variants[selectedVariantIndex]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 col-gap-8 mx-5'>
            <ProductImages images={selectedVariant.images} />
            <ProductData
                name={product.name}
                variants={product.variants}
                selectedVariant={selectedVariant}
                setSelectedVariantIndex={setSelectedVariantIndex}
            />
        </div>
    )
}

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductDetails
