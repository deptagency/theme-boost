import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import { useInView } from 'react-intersection-observer'

import ProductTeaser from 'Molecules/Product/productTeaser'

import FacetPopup from './Popups/FacetPopup'
import SortMobilePopup from './Popups/SortMobilePopup'
import SortDesktopPopup from './Popups/SortDesktopPopup'

import FiltersWizard from './Modals/FiltersWizard'

const ProductListing = ({ data, sortState, onFacetsChanged, onLoadNextPage, onSortChange, onAddToWishlist, showPercent, isFullWidth, showStrikePrice, showFacets, showInfinityScroll }) => {
    const [, useForceUpdate] = useState()

    const { ref, inView } = useInView({
        threshold: [0.25, 0.5, 0.75],
    })

    useEffect(() => {
        if (inView) {
            onLoadNextPage()
        }
    }, [ inView ])

    const onFacetChange = () => {
        useForceUpdate({})

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

                    <div className='hidden md:block mt-10 border-b pb-6'>
                        <div className='flex flex-wrap'>
                            <SortDesktopPopup sortState={sortState} onChange={onSortChange} />

                            {data.stream.facets.map((facet, index) => {
                                return (
                                    <FacetPopup
                                        key={index}
                                        facet={facet}
                                        onChange={onFacetChange}
                                        onClear={onFacetChange}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </>
            )}

            <p className='mt-4 text-xs text-neutral-700 text-center'>
                {data.stream.total || 0} <FormattedMessage id='filters.productsFound' />
            </p>

            {data.stream.total > 0 && (
                <div className='flex flex-wrap p-4 -mx-2'>
                    {data.stream.items.map((product) => {
                        return (
                            <ProductTeaser
                                key={product.productId}
                                classNames={classnames({
                                    'w-1/2 md:w-1/3 lg:w-1/4': isFullWidth,
                                    'w-1/2 md:w-1/3': !isFullWidth,
                                })}
                                product={product}
                                showPercent={showPercent}
                                showStrikePrice={showStrikePrice}
                                onAddToWishlist={onAddToWishlist}
                            />
                        )
                    })}
                </div>
            )}

            {showInfinityScroll && data.stream.count < data.stream.total && (
                <div ref={ref} className='w-full h-1' />
            )}

            {!showInfinityScroll && data.stream.count < data.stream.total && (
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
    showInfinityScroll: PropTypes.bool,
    showPercent: PropTypes.bool,
    showStrikePrice: PropTypes.bool,
}

export default ProductListing
