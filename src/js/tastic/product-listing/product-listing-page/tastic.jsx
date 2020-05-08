import React from 'react'
import PropTypes from 'prop-types'

import app from '@frontastic/catwalk/src/js/app/app'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import withTranslatedTasticData from '@frontastic/catwalk/src/js/component/withTranslatedTasticData'

import ProductListing from 'Organisms/product/ProductListing'
// import Filters from '../../patterns/organisms/filters/filters'
import CategoryNavigationTree from 'Molecules/product/CategoryNavigationTree'

// Ideally this is 3 tastics using the layout facilities
// in backstage, but that's currently not possible, so
// that's the reason this tastic exists. *marcel
function ProductListingPageTastic ({ data, node }) {
    let productList = data.stream.items
    if (!productList) {
        return null
    }

    const handleAddToWishlist = (product, variant) => {
        app.getLoader('wishlist').add(product, variant, 1, null)
    }

    // const handleLoadMore = () => {
    //    // This is only temporary and shall soon be replaced by async product loading
    // }

    return (
        <div className='flex flex-row mx-5'>
            <div className='hidden md:block md:w-1/4 pt-4 pl-4'>
                <CategoryNavigationTree title={data.sidebarHeader} navTree={data.tree} currentPage={node} />
            </div>
            <div className='w-full md:w-3/4'>
                <div className='flex flex-col'>
                    <div className='h-24 border-b border-gray-300 '>{/* Filters go here */}</div>

                    <div>
                        <ProductListing
                            products={productList}
                            onAddToWishlist={handleAddToWishlist}
                            showPercent={data.showPercent}
                            showStrikePrice={data.showStrikePrice}
                        />
                        {/* onLoadMoore={handleLoadMore} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductListingPageTastic.propTypes = {
    data: PropTypes.object.isRequired,
    node: PropTypes.object.isRequired,
}

ProductListingPageTastic.defaultProps = {}

export default withTranslatedTasticData(tastify({ connect: { node: true } })(ProductListingPageTastic))
