import React from 'react'
import PropTypes from 'prop-types'

import Popup from 'reactjs-popup'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import RangeFacet from './../Facets/RangeFacet'
import TermFacet from './../Facets/TermFacet'
import FacetService from './../FacetService'

import { ReactComponent as IconChevronLeft } from '../../../../../../icons/tailwind-icons/icon-cheveron-left.svg'
import { ReactComponent as IconChevronRight } from '../../../../../../icons/tailwind-icons/icon-cheveron-right.svg'

const FacetModal = ({ intl, facet, onChange }) => {
    const getFacetName = () => {
        return FacetService.getFacetName(facet)
    }

    const onClearClicked = () => {
        FacetService.clearFacet(facet)
    }

    const onFacetChanged = () => {}

    const onApplyClicked = (closeCallback) => {
        onChange(facet)

        closeCallback()
    }

    return (
        <Popup
            trigger={(open) => {
                return (
                    <div className='py-3 flex items-center border-b border-gray-300'>
                        <span className='mr-auto text-base text-gray-900 capitalize leading-normal'>
                            {getFacetName()}
                        </span>

                        {facet.selected && (
                            <span className='w-40 truncate text-sm text-gray-600 text-right leading-normal'>
                                {facet.type === 'range' && (
                                    <>
                                        {(facet.value.min / 100).toFixed(2)} € - {(facet.value.max / 100).toFixed(2)} €
                                    </>
                                )}

                                {facet.type === 'term' && (
                                    <>
                                        {facet.terms
                                            .filter((term) => {
                                                return term.selected
                                            })
                                            .map((term, index) => {
                                                return (
                                                    <span key={index}>
                                                        {index > 0 ? ', ' : ''} {term.name}
                                                    </span>
                                                )
                                            })}
                                    </>
                                )}
                            </span>
                        )}

                        <IconChevronRight className='ml-4 w-4 h-4 inline-block' />
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
                backgroundColor: '#E5E5E5',
            }}
        >
            {(close) => {
                return (
                    <>
                        <div className='h-8 mb-1 px-4 py-3 flex items-center shadow bg-white box-content'>
                            <button
                                aria-label={intl.formatMessage({ id: 'filters.filters' })}
                                className='h-8 text-base text-gray-900 font-bold leading-tight'
                                onClick={close}
                            >
                                <IconChevronLeft className='w-6 h-6 mr-1 inline-block' />

                                <FormattedMessage id='filters.filters' />
                            </button>

                            {facet.selected && (
                                <button
                                    aria-label={intl.formatMessage({ id: 'filters.clear' })}
                                    className='ml-auto px-6 h-full text-center text-base text-gray-900 leading-tight border border-gray-900 rounded'
                                    onClick={onClearClicked}
                                >
                                    <FormattedMessage id='filters.clear' />
                                </button>
                            )}
                        </div>

                        <div className='px-4 pt-2 bg-white'>
                            {facet.type === 'term' && (
                                <div className='overflow-y-scroll' style={{ height: 'calc(100vh - 105px)' }}>
                                    <TermFacet facet={facet} onChange={onFacetChanged} />
                                </div>
                            )}

                            {facet.type === 'range' && <RangeFacet facet={facet} onChange={onFacetChanged} />}
                        </div>

                        <div className='fixed bottom-0 w-full h-10 bg-gray-900'>
                            <button
                                aria-label={intl.formatMessage({ id: 'filters.apply' })}
                                className='w-full h-full text-base text-white font-bold leading-normal'
                                onClick={() => {
                                    onApplyClicked(close)
                                }}
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

FacetModal.propTypes = {
    intl: intlShape.isRequired,
    facet: PropTypes.object.isRequired,
    onChange: PropTypes.func,
}

export default injectIntl(FacetModal)
