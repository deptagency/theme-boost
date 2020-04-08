import React, { useState } from 'react'
import PropTypes from 'prop-types'

import app from '@frontastic/catwalk/src/js/app/app'

import ProductListing from '../../../patterns/organisms/product/ProductListing'
//import Filters from '../../patterns/organisms/filters/filters'

function Sidebar({ header = 'Sidebar' }) {
    return (
        <div>
            <h4 className='text-sm font-bold mb-4'>{header}</h4>
            <ul className='pl-4'>
                <CategoryLink>Rugs</CategoryLink>
                <CategoryLink>T-shirts</CategoryLink>
                <CategoryLink>Jeans</CategoryLink>
            </ul>
        </div>
    )
}

function CategoryLink({ children = 'Link' }) {
    return <li className='mb-1 leading-normal'>{children}</li>
}

function ProductListingPageTastic({ data, tastic }) {
    const [itemsPerPage, setItemsPerPage] = useState(6)
    let productList = data.stream.items
    if (!productList) {
        return null
    }

    const handleAddToWishlist = (product, variant) => {
        app.getLoader('wishlist').add(product, variant, 1, null)
    }

    const handleLoadMore = () => {
        // This is only temporary
        setItemsPerPage(itemsPerPage + 6)
    }

    return (
        <div className='flex flex-row'>
            <div className='hidden md:block md:w-1/4'>
                <Sidebar />
            </div>
            <div className='w-full md:w-3/4'>
                <div className='flex flex-col'>
                    <div className='h-24 border-b border-gray-300 '>Filters go here</div>

                    <div>
                        <ProductListing
                            products={productList}
                            onAddToWishlist={handleAddToWishlist}
                            showPercent={data.showPercent}
                            showStrikePrice={data.showStrikePrice}
                            onAddToWishlist={handleAddToWishlist}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductListingPageTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

ProductListingPageTastic.defaultProps = {}

export default ProductListingPageTastic
