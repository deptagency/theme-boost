import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Popup from 'reactjs-popup'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import RangeFacet from './../Facets/RangeFacet'
import TermFacet from './../Facets/TermFacet'
import FacetService from './../FacetService'

import { ReactComponent as IconChevronUp } from '../../../../../../icons/tailwind-icons/icon-chevron-up.svg'
import { ReactComponent as IconChevronDown } from '../../../../../../icons/tailwind-icons/icon-cheveron-down.svg'

const FacetPopup = ({ intl, initialFacet, onChange }) => {
    const [facet, setFacet] = useState({ ...initialFacet })

    const onOpenPopup = () => {
        setFacet({ ...initialFacet })
    }

    const getFacetName = () => {
        return FacetService.getFacetName(initialFacet)
    }

    const getFacetLabel = () => {
        return FacetService.getFacetLabelValue(initialFacet)
    }

    const onApplyClick = (closeCallback) => {
        closeCallback()

        if (onChange) {
            onChange({ ...facet })
        }
    }

    const onClearClick = (closeCallback) => {
        FacetService.clearFacet(facet)

        closeCallback()

        if (onChange) {
            onChange({ ...facet })
        }
    }

    return (
        <Popup
            trigger={(open) => {
                return (
                    <div
                        className={classnames({
                            'mr-2 w-32 h-8 px-2 border rounded flex items-center justify-between cursor-pointer select-none': true,
                            'bg-gray-300': open,
                            'bg-white': !open,
                            'text-gray-600 border-gray-300': !getFacetLabel(),
                            'text-gray-900 border-gray-700': getFacetLabel(),
                        })}
                    >
                        <span className='text-sm capitalize'>
                            {getFacetName()}
                            {getFacetLabel() && <span className='ml-1 text-gray-600'>({getFacetLabel()})</span>}
                        </span>
                        {open ? (
                            <IconChevronUp className='ml-2 inline-block' />
                        ) : (
                            <IconChevronDown className='ml-2 inline-block' />
                        )}
                    </div>
                )
            }}
            arrow={false}
            position='bottom left'
            onOpen={onOpenPopup}
            contentStyle={{
                padding: '0px',
                border: 'none',
                width: '247px',
                marginTop: '5px',
                height: facet.type === 'term' ? '416px' : '238px',
                overflowY: 'hidden',
            }}
        >
            {(close) => {
                return (
                    <div className='z-10 pt-4 flex flex-col relative shadow'>
                        {facet.type === 'term' && (
                            <div className='px-4 overflow-y-scroll' style={{ height: '330px' }}>
                                <TermFacet facet={facet} />
                            </div>
                        )}

                        {facet.type === 'range' && (
                            <div className='px-4' style={{ height: '153px' }}>
                                <RangeFacet facet={facet} />
                            </div>
                        )}

                        <div className='p-4 w-full flex justify-around bg-white shadow'>
                            <button
                                aria-label={intl.formatMessage({ id: 'filters.clear' })}
                                className='text-gray-900 font-normal'
                                onClick={() => {
                                    onClearClick(close)
                                }}
                            >
                                <FormattedMessage id='filters.clear' />
                            </button>

                            <button
                                aria-label={intl.formatMessage({ id: 'filters.apply' })}
                                className='btn btn-primary'
                                onClick={() => {
                                    onApplyClick(close)
                                }}
                            >
                                <FormattedMessage id='filters.apply' />
                            </button>
                        </div>
                    </div>
                )
            }}
        </Popup>
    )
}

FacetPopup.propTypes = {
    intl: intlShape.isRequired,
    initialFacet: PropTypes.object.isRequired,
    onChange: PropTypes.func,
}

export default injectIntl(FacetPopup)
