import React from 'react'
import PropTypes from 'prop-types'

import Popup from 'reactjs-popup'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import FacetModal from './FacetModal'
import FacetService from './../FacetService'

import { ReactComponent as IconX } from '../../../../../../icons/tailwind-icons/icon-x.svg'

const FiltersWizard = ({ intl, data, onFacetsChanged }) => {
    const anySelectedFacets = () => {
        return FacetService.anySelectedFacets(data.stream.facets)
    }

    const numberOfSelectedFacets = () => {
        return FacetService.numberOfSelectedFacets(data.stream.facets)
    }

    const onClearAllClicked = () => {
        FacetService.clearFacets(data.stream.facets)

        onFacetsChanged(data.stream.facets)
    }

    const onFacetChanged = () => {
        onFacetsChanged(data.stream.facets)
    }

    return (
        <Popup
            trigger={(open) => {
                return (
                    <div className='w-1/2 h-10 cursor-pointer select-none flex items-center justify-center'>
                        <span className='text-sm text-gray-900 leading-normal'>
                            <FormattedMessage id='filters.filter' />
                            {anySelectedFacets() && (
                                <span className='ml-1 text-gray-600 select-none'>({numberOfSelectedFacets()})</span>
                            )}
                        </span>
                    </div>
                )
            }}
            modal
            nested
            contentStyle={{
                padding: '0px',
                border: 'none',
                width: '100vw',
                height: '100vh',
                backgroundColor: '#e2e8f0',
            }}
        >
            {(close) => {
                return (
                    <>
                        <div className='h-8 mb-1 px-4 py-3 flex items-center shadow bg-white box-content'>
                            <span className='text-base text-gray-900 font-bold leading-tight'>
                                <FormattedMessage id='filters.filters' />
                            </span>

                            {anySelectedFacets() && (
                                <button
                                    aria-label={intl.formatMessage({ id: 'filters.clearAll' })}
                                    className='ml-auto px-6 h-full text-center text-base text-gray-900 leading-tight border border-gray-900 rounded'
                                    onClick={onClearAllClicked}
                                >
                                    <FormattedMessage id='filters.clearAll' />
                                </button>
                            )}

                            {!anySelectedFacets() && <IconX className='ml-auto w-8 h-8 inline-block' onClick={close} />}
                        </div>

                        <div className='px-4 pt-2 bg-white'>
                            {data.stream.facets.map((facet, index) => {
                                if (!(facet.type === 'term' && facet.terms.length === 0)) {
                                    return <FacetModal key={index} facet={facet} onChange={onFacetChanged} />
                                } else {
                                    return false
                                }
                            })}
                        </div>

                        <div className='fixed bottom-0 w-full h-10 bg-gray-900'>
                            <button
                                aria-label={intl.formatMessage({ id: 'filters.apply' })}
                                className='w-full h-full text-base text-white font-bold leading-normal'
                                onClick={close}
                            >
                                <FormattedMessage id='filters.apply' />
                            </button>
                        </div>
                    </>
                )
            }}
        </Popup>
    )
}

FiltersWizard.propTypes = {
    intl: intlShape.isRequired,
    data: PropTypes.object.isRequired,
    onFacetsChanged: PropTypes.func,
}

export default injectIntl(FiltersWizard)
