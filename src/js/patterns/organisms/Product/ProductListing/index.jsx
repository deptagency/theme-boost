import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import ProductTeaser from 'Molecules/Product/productTeaser'

const ProductListing = ({ products, intl, onAddToWishlist, showPercent, showStrikePrice }) => {
    const [itemsPerPage, setItemsPerPage] = useState(6)

    const handleLoadMore = () => {
        // This is only temporary
        setItemsPerPage(itemsPerPage + 6)
    }

    return (
        <>
            <p className='text-neutral-600 text-xs text-center my-4'>{products.length || 0} Products found</p>
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
            <p className='text-neutral-600 text-xs text-center my-4'>{products.length || 0} Products found</p>

            {itemsPerPage < products.length && (
                <div className='flex justify-center'>
                    <button
                        onClick={handleLoadMore}
                        className='border border-solid border-neutral-900 rounded leading-tight p-2'
                    >
                        <FormattedMessage id='product.list.loadMore' />
                    </button>
                </div>
            )}
        </>
    )
}

ProductListing.propTypes = {
    products: PropTypes.array.isRequired,
    intl: intlShape.isRequired,
    onAddToWishlist: PropTypes.func,
    showPercent: PropTypes.bool,
    showStrikePrice: PropTypes.bool,
}

ProductListing.defaultProps = {}

export default injectIntl(ProductListing)
