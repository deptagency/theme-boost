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

function ProductListingPageTastic ({ data, node, route, tastic, wishlist, urlHandler }) {
    if (!urlHandler) {
        return null
    }

    if (wishlist.isComplete()) {
        data.stream.items.map(product => {
            const wishlisted = wishlist.data.lineItems.find((item) => {
                return item.variant.sku === product.variants[0].sku
            })

            product.wishlisted = !!wishlisted
            product.wishlistItemId = wishlisted ? wishlisted.lineItemId : null

            return product
        })
    }

    const parameters = urlHandler.parameterReader(tastic.configuration.stream).getParameters()

    var sortState = {}

    if (parameters) {
        sortState = {
            attributeId: parameters.sortAttributeId,
            order: parameters.sortOrder,
        }
    }

    const onChangeStreamParameters = (parameters) => {
        const newParams = {
            ...route.parameters,
            ...parameters,
        }

        app.getRouter().push(route.route, newParams)
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

        onChangeStreamParameters(parameters)
    }

    const hanleSortChange = (sort) => {
        const parameters = urlHandler.deriveParameters((urlState) => {
            var stream = urlState.getStream(tastic.configuration.stream)

            stream.setOffset(0)
            stream.setLimit(24)

            stream.setSortOrder(sort.attributeId, sort.order)
        })

        onChangeStreamParameters(parameters)
    }

    const handleFacetsChanged = (facets) => {
        const parameters = urlHandler.deriveParameters((urlState) => {
            var stream = urlState.getStream(tastic.configuration.stream)

            stream.setOffset(0)
            stream.setLimit(24)

            facets.forEach((facet) => {
                if (facet.selected) {
                    if (facet.type === 'range') {
                        stream.setFilter(facet.handle, {
                            min: facet.value.min,
                            max: facet.value.max,
                        })
                    }

                    if (facet.type === 'term') {
                        var newTerms = facet.terms
                            .filter((facet) => {
                                return facet.selected === true
                            })
                            .map((facet) => {
                                return facet.value
                            })

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

        onChangeStreamParameters(parameters)
    }

    return (
        <div className='flex flex-row'>
            {data.showSidebar && (
                <div className='hidden md:block md:w-1/4 pt-4 pl-4'>
                    <CategoryNavigationTree title={data.sidebarHeader} navTree={data.tree} currentPage={node} />
                </div>
            )}

            <div className={classnames({
                    'flex flex-col w-full': true,
                    'md:w-3/4': data.showSidebar,
                })}
            >
                <ProductListing
                    data={data}
                    sortState={sortState}
                    onLoadNextPage={handleLoadNextPage}
                    onSortChange={hanleSortChange}
                    onFacetsChanged={handleFacetsChanged}
                    onAddToWishlist={handleAddToWishlist}
                    isFullWidth={!data.showSidebar}
                    showFacets={data.showFacets}
                    showNextPage={data.showNextPage}
                    showProductsCount={data.showProductsCount}
                    showPercent={data.showPercent}
                    showStrikePrice={data.showStrikePrice}
                />
            </div>
        </div>
    )
}

ProductListingPageTastic.propTypes = {
    data: PropTypes.object.isRequired,
    node: PropTypes.object.isRequired,

    tastic: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    wishlist: PropTypes.object.isRequired,
    urlHandler: PropTypes.instanceOf(UrlHandler),
}

export default tastify({ translate: true, connect: { node: true, tastic: true, route: true, wishlist: true, urlHandler: true } })(
    compose(
        connect(facetConnector),
        connect(categoryConnector),
        connect(urlHandlerConnector),
        connect((globalState) => {
            let streamParameters = globalState.app.route.parameters.s || {}

            return {
                route: globalState.app.route,
                streamParameters: streamParameters,
            }
        })
    )(ProductListingPageTastic)
)
