import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

/**
 * Default implementation of attribute rendering on product detail pages.
 *
 * You will most probably want to replace this by a custom rendering for your product model.
 */
const OrganismsDetailsDesktop = ({ attributes: { style, matrixId } }) => {
    return (
        <div>
            <dl className='o-detaillist'>
                <dt className='u-text-color-quiet u-text-s'><FormattedMessage id='product.materialOuterFabric' /></dt>
                <dd className='u-text-strong u-text-s'>100% <FormattedMessage id='product.viscose' /></dd>
                <dt className='u-text-color-quiet u-text-s'><FormattedMessage id='product.lining' /></dt>
                <dd className='u-text-strong u-text-s'>100% <FormattedMessage id='product.viscose' /></dd>
            </dl>
            <h3 className='c-title-level-3 o-distance-l'><FormattedMessage id='product.moreAboutThisProduct' /></h3>
            <dl className='o-detaillist o-distance-m'>
                <dt className='u-text-color-quiet u-text-s'><FormattedMessage id='product.cut' /></dt>
                <dd className='u-text-strong u-text-s'>100% <FormattedMessage id='product.viscose' /></dd>
                <dt className='u-text-color-quiet u-text-s'><FormattedMessage id='product.clasp' /></dt>
                <dd className='u-text-strong u-text-s'><FormattedMessage id='product.lacing' /></dd>
                {(style && style.label) && <><dt className='u-text-color-quiet u-text-s'><FormattedMessage id='product.style' /></dt> <dd className='u-text-strong u-text-s'>{style.label}</dd></> }
                {matrixId && <><dt className='u-text-color-quiet u-text-s'><FormattedMessage id='product.itemNumber' /></dt> <dd className='u-text-strong u-text-s'>{matrixId} </dd></>}

            </dl>
        </div>
    )
}

OrganismsDetailsDesktop.propTypes = {
    attributes: PropTypes.object.isRequired,
}

export default ComponentInjector.return('OrganismsMoreInfoProductMobile.OrganismsDetailsDesktop', OrganismsDetailsDesktop)
