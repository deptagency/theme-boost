import React, { useState } from 'react'
import PropTypes from 'prop-types'

import app from '@frontastic/catwalk/src/js/app/app'
import withTranslatedTasticData from '@frontastic/catwalk/src/js/component/withTranslatedTasticData'

import ProductListing from '../../../patterns/organisms/product/ProductListing'
//import Filters from '../../patterns/organisms/filters/filters'
import CategoryNavigation from '../../../patterns/molecules/product/CategoryNavigation'

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
                <CategoryNavigation title={data.sidebarHeader} navTree={data.tree} />
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

export default withTranslatedTasticData(ProductListingPageTastic)
