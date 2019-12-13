import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const DetailsMobile = ({ variant }) => {
    return <div className='o-distance'>
        <dl className='o-detaillist o-distance-m'>
            <dt className='t-text-quiet'><FormattedMessage id='product.materialOuterFabric'/></dt>
            <dd className='u-text-strong'>100% <FormattedMessage id='product.viscose'/></dd>
            <dt className='t-text-quiet'><FormattedMessage id='product.lining'/></dt>
            <dd className='u-text-strong'>100% <FormattedMessage id='product.viscose'/></dd>
        </dl>
        <h3 className='c-title-level-3 o-distance'><FormattedMessage id='product.moreAboutThisProduct'/></h3>
        <dl className='o-detaillist o-distance-m'>
            <dt className='t-text-quiet'><FormattedMessage id='product.cut'/></dt>
            <dd className='u-text-strong'>100% <FormattedMessage id='product.viscose'/></dd>
            <dt className='t-text-quiet'><FormattedMessage id='product.clasp'/></dt>
            <dd className='u-text-strong'><FormattedMessage id='product.lacing'/></dd>
            <dt className='t-text-quiet'><FormattedMessage id='product.style'/></dt>
            <dd className='u-text-strong'>{variant.attributes.style.label}</dd>
            <dt className='t-text-quiet'><FormattedMessage id='product.itemNumber'/></dt>
            <dd className='u-text-strong'>{variant.attributes.matrixId}</dd>
        </dl>
    </div>
}

DetailsMobile.propTypes = {
    variant: PropTypes.object.isRequired,
}

export default DetailsMobile
