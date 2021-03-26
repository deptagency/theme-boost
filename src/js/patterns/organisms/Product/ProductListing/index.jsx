import React, { useEffect } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import { useInView } from 'react-intersection-observer'

import ProductTeaser from '../../../molecules/Product/productTeaser'

import FacetPopup from './Popups/FacetPopup'
import SortMobilePopup from './Popups/SortMobilePopup'
import SortDesktopPopup from './Popups/SortDesktopPopup'

import FiltersWizard from './Modals/FiltersWizard'

const ProductListing = ({
    data,
    sortState,
    onFacetsChanged,
    onLoadNextPage,
    onSortChange,
    onAddToWishlist,
    showPercent,
    isFullWidth,
    showFacets,
    showProductsCount,
    showNextPage,
    showStrikePrice,
}) => {
    const { ref, inView } = useInView({
        threshold: [0.25, 0.5, 0.75],
    })

    useEffect(() => {
        if (inView) {
            onLoadNextPage()
        }
    }, [inView, onLoadNextPage])

    const onFacetChange = (newFacet, index) => {
        data.stream.facets[index] = { ...newFacet }

        onFacetsChanged(data.stream.facets)
    }

    return (
        <>
            {showFacets && (
                <>
                    <div className='md:hidden mt-4 w-full h-10 flex items-center border-t border-b border-neutral-300'>
                        <SortMobilePopup sortState={sortState} onChange={onSortChange} />

                        <FiltersWizard data={data} onFacetsChanged={onFacetsChanged} />
                    </div>

                    <div className='hidden md:block mt-4 border-b pb-6'>
                        <div className='flex flex-wrap'>
                            <div className='mt-4'>
                                <SortDesktopPopup sortState={sortState} onChange={onSortChange} />
                            </div>

                            {data.stream.facets.map((facet, index) => {
                                if (!(facet.type === 'term' && facet.terms.length === 0)) {
                                    return (
                                        <div className='mt-4' key={index}>
                                            <FacetPopup
                                                initialFacet={facet}
                                                onChange={(newFacet) => {
                                                    onFacetChange(newFacet, index)
                                                }}
                                                onClear={(newFacet) => {
                                                    onFacetChange(newFacet, index)
                                                }}
                                            />
                                        </div>
                                    )
                                } else {
                                    return false
                                }
                            })}
                        </div>
                    </div>
                </>
            )}

            {showProductsCount && (
                <p className='mt-4 text-xs text-neutral-500 text-center'>
                    {data.stream.total || 0} <FormattedMessage id='filters.productsFound' />
                </p>
            )}

            {data.stream.total > 0 && (
                <div
                    className={classnames({
                        'grid gap-4 grid-cols-1 xsm:grid-cols-2 md:grid-cols-3': true,
                        'lg:grid-cols-4': isFullWidth,
                    })}
                >
                    {data.stream.items.map((product) => {
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
            )}

            {showNextPage === 'InfinityScroll' && data.stream.count < data.stream.total && (
                <div ref={ref} className='w-full h-1' />
            )}

            {showNextPage === 'LoadMore' && data.stream.count < data.stream.total && (
                <div className='flex justify-center'>
                    <div
                        onClick={onLoadNextPage}
                        className='btn btn-outline btn-outline-black select-none cursor-pointer'
                    >
                        <FormattedMessage id='filters.loadMore' />
                    </div>
                </div>
            )}
        </>
    )
}

ProductListing.propTypes = {
    data: PropTypes.object,
    sortState: PropTypes.object,
    onLoadNextPage: PropTypes.func,
    onSortChange: PropTypes.func,
    onFacetsChanged: PropTypes.func,
    onAddToWishlist: PropTypes.func,
    isFullWidth: PropTypes.bool,
    showFacets: PropTypes.bool,
    showNextPage: PropTypes.string,
    showProductsCount: PropTypes.bool,
    showPercent: PropTypes.bool,
    showStrikePrice: PropTypes.bool,
}

export default ProductListing
