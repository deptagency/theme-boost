import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import app from '@frontastic/catwalk/src/js/app/app'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import UrlHandler from '@frontastic/catwalk/src/js/app/urlHandler'
import facetConnector from '@frontastic/catwalk/src/js/app/connector/facet'
import categoryConnector from '@frontastic/catwalk/src/js/app/connector/category'
import urlHandlerConnector from '@frontastic/catwalk/src/js/app/connector/urlHandler'

import ProductListing from 'Organisms/Product/ProductListing'
import CategoryNavigationTree from 'Molecules/Product/CategoryNavigationTree'

function ProductListingPageTastic ({ data, node, route, tastic, urlHandler}) {
    if (!urlHandler) {
        return null
    }

    const parameters = urlHandler.parameterReader(tastic.configuration.stream).getParameters()

    var sortState = {}

    if (parameters) {
        sortState = {
            attributeId: parameters.sortAttributeId,
            order: parameters.sortOrder,
        }
    }

    const handleAddToWishlist = (product, variant) => {
        app.getLoader('wishlist').add(product, variant, 1, null)
    }

    const handleLoadNextPage = () => {
        const parameters = urlHandler.deriveParameters((urlState) => {
            var stream = urlState.getStream(tastic.configuration.stream)

            stream.setOffset(0)

            if (data.stream.count + 24 > data.stream.total) {
                stream.setLimit(data.stream.total)
            } else {
                stream.setLimit(data.stream.count + 24)
            }
        })

        app.getRouter().push(route.route, parameters)
    }

    const hanleSortChange = (sort) => {
        const parameters = urlHandler.deriveParameters((urlState) => {
            var stream = urlState.getStream(tastic.configuration.stream)

            stream.setOffset(0)
            stream.setLimit(24)

            stream.setSortOrder(sort.attributeId, sort.order)
        })

        app.getRouter().push(route.route, parameters)
    }

    const handleFacetsChanged = (facets) => {
        const parameters = urlHandler.deriveParameters((urlState) => {
            var stream = urlState.getStream(tastic.configuration.stream)

            stream.setOffset(0)
            stream.setLimit(24)

            facets.forEach(facet => {
                if (facet.selected) {
                    if (facet.type === 'range') {
                        stream.setFilter(facet.handle, {
                            min: facet.value.min,
                            max: facet.value.max,
                        })
                    }

                    if (facet.type === 'term') {
                        var newTerms = facet.terms.filter(facet => { return facet.selected === true }).map(facet => { return facet.value })

                        if (newTerms) {
                            stream.setFilter(facet.handle, {
                                terms: newTerms,
                            })
                        }
                    }
                } else {
                    stream.removeFilter(facet.handle)
                }
            })
        })

        app.getRouter().push(route.route, parameters)
    }

    return (
        <div className='flex flex-row'>
            {data.showSidebar && (
                <div className='hidden md:block md:w-1/4 pt-4 pl-4'>
                    <CategoryNavigationTree title={data.sidebarHeader} navTree={data.tree} currentPage={node} />
                </div>
            )}
            <div className={classnames({
                    'w-full': true,
                    'md:w-3/4': data.showSidebar,
                })}>
                <div className='flex flex-col'>
                    <div className='md:hidden mt-10 text-sm text-center text-gray-900'>
                        {data.sidebarHeader}
                    </div>

                    <div className='md:hidden text-2xl font-bold text-center text-gray-900'>
                        {node.name}
                    </div>

                    <ProductListing
                        data={data}
                        sortState={sortState}
                        onLoadNextPage={handleLoadNextPage}
                        onSortChange={hanleSortChange}
                        onFacetsChanged={handleFacetsChanged}
                        onAddToWishlist={handleAddToWishlist}
                        isFullWidth={!data.showSidebar}
                        showFacets={data.showFacets}
                        showInfinityScroll={data.showInfinityScroll}
                        showPercent={data.showPercent}
                        showStrikePrice={data.showStrikePrice}
                    />
                </div>
            </div>
        </div>
    )
}

ProductListingPageTastic.propTypes = {
    data: PropTypes.object.isRequired,
    node: PropTypes.object.isRequired,

    tastic: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    urlHandler: PropTypes.instanceOf(UrlHandler),
}

export default tastify({ translate: true, connect: { node: true, tastic: true, route: true, urlHandler: true } })(compose(
    connect(facetConnector),
    connect(categoryConnector),
    connect(urlHandlerConnector),
    connect((globalState) => {
        let streamParameters = globalState.app.route.parameters.s || {}

        return {
            route: globalState.app.route,
            streamParameters: streamParameters,
        }
    }),
)(ProductListingPageTastic))
