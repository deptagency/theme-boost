import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ProductTeaser from 'Molecules/product/productTeaser'

export function ProductListing ({ products, onAddToWishlist, showPercent, showStrikePrice }) {
    const [itemsPerPage, setItemsPerPage] = useState(6)

    const handleLoadMore = () => {
        // This is only temporary
        setItemsPerPage(itemsPerPage + 6)
    }

    return (
        <>
            <p className='text-gray-500 text-xs text-center my-4'>{products.length || 0} Products found</p>
            <div className='flex flex-wrap p-4 -mx-2'>
                {products.slice(0, itemsPerPage).map((product) => {
                    return (
                        <ProductTeaser
                            key={product.productId}
                            product={product}
                            showPercent={showPercent}
                            showStrikePrice={showStrikePrice}
                            onAddToWishlist={onAddToWishlist}
                        />
                    )
                })}
            </div>
            <p className='text-gray-500 text-xs text-center my-4'>{products.length || 0} Products found</p>

            {itemsPerPage < products.length && (
                <div className='flex justify-center'>
                    <button
                        onClick={handleLoadMore}
                        className='border border-solid border-gray-800 rounded leading-tight p-2'
                    >
                        Load more
                    </button>
                </div>
            )}
        </>
    )
}

ProductListing.propTypes = {
    products: PropTypes.array.isRequired,
    onAddToWishlist: PropTypes.func,
    showPercent: PropTypes.bool,
    showStrikePrice: PropTypes.bool,
}

ProductListing.defaultProps = {}
