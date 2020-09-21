import React, { useState } from 'react'
import PropTypes from 'prop-types'

import FacetService from './../FacetService'
import { ReactComponent as IconCheck } from 'Icons/check.svg'

const TermFacet = ({ facet, onChange }) => {
    const [, useForceUpdate] = useState()

    const onTermClicked = (term) => {
        term.selected = !term.selected

        facet.selected = facet.terms.some(term => { return term.selected === true })

        useForceUpdate({})

        if (onChange) {
            onChange(facet)
        }
    }

    return (
        <div className='flex flex-col'>
            {facet.terms.map((term, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => { onTermClicked(term) }}
                        className='w-full h-10 mb-2 px-3 py-2 flex items-center cursor-pointer border border-gray-300 rounded box-border select-none'
                    >
                        {FacetService.isColorFacet(facet) && (
                            <span
                                style={FacetService.getColorStyle(term.value)}
                                className='w-4 h-4 mr-2 rounded-full border border-gray-300' />
                        )}

                        <span className='text-sm text-gray-900 leading-normal'>
                            {term.name}
                        </span>

                        {term.selected && (
                            <IconCheck className='ml-auto inline-block text-indigo-500 fill-current' />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

TermFacet.propTypes = {
    facet: PropTypes.object.isRequired,
    onChange: PropTypes.func,
}

export default TermFacet
