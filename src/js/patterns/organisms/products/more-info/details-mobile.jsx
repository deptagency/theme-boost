import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

/**
 * Default implementation of attribute rendering on product detail pages.
 *
 * You will most probably want to replace this by a custom rendering for your product model.
 */
const DetailsMobile = ({ attributes }) => {
    const { color, designer, style, commonSize, matrixId } = attributes

    return <div className='o-distance'>
        <dl className='o-detaillist o-distance-m'>
            {color && color.label ?
                <Fragment>
                    <dt className='u-text-strong'><FormattedMessage id='product.color' /></dt>
                    <dd>{color.label}</dd>
                </Fragment>
            : null}
            {designer && designer.label ?
                <Fragment>
                    <dt className='u-text-strong'><FormattedMessage id='product.designer' /></dt>
                    <dd>{designer.label}</dd>
                </Fragment>
            : null}
        </dl>
        <h3 className='c-title-level-3 o-distance'><FormattedMessage id='product.moreAboutThisProduct' /></h3>
        <dl className='o-detaillist o-distance-m'>
            {style && style.label ?
                <Fragment>
                    <dt className='u-text-strong'><FormattedMessage id='product.style' /></dt>
                    <dd>{style.label}</dd>
                </Fragment>
            : null}
            {commonSize && commonSize.label ?
                <Fragment>
                    <dt className='u-text-strong'><FormattedMessage id='product.commonSize' /></dt>
                    <dd>{commonSize.label}</dd>
                </Fragment>
            : null}
            {matrixId ?
                <Fragment>
                    <dt className='u-text-strong'><FormattedMessage id='product.itemNumber' /></dt>
                    <dd>{matrixId}</dd>
                </Fragment>
            : null}
        </dl>
    </div>
}

DetailsMobile.propTypes = {
    attributes: PropTypes.object.isRequired,
}

export default ComponentInjector.return('OrganismsMoreInfoProductMobile.DetailsMobile', DetailsMobile)
