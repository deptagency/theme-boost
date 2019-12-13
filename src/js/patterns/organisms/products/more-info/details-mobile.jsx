import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const DetailsMobile = ({ variant }) => {
    return <div className='o-distance'>
        <dl className='o-detaillist o-distance-m'>
            {variant.attributes.color && variant.attributes.color.label ?
                <Fragment>
                    <dt className='t-text-quiet'><FormattedMessage id='product.color'/></dt>
                    <dd className='u-text-strong'>{variant.attributes.color.label}</dd>
                </Fragment>
            : null}
            {variant.attributes.designer && variant.attributes.designer.label ?
                <Fragment>
                    <dt className='t-text-quiet'><FormattedMessage id='product.designer'/></dt>
                    <dd className='u-text-strong'>{variant.attributes.designer.label}</dd>
                </Fragment>
            : null}
        </dl>
        <h3 className='c-title-level-3 o-distance'><FormattedMessage id='product.moreAboutThisProduct'/></h3>
        <dl className='o-detaillist o-distance-m'>
            {variant.attributes.style && variant.attributes.style.label ?
                <Fragment>
                    <dt className='t-text-quiet'><FormattedMessage id='product.style'/></dt>
                    <dd className='u-text-strong'>{variant.attributes.style.label}</dd>
                </Fragment>
            : null}
            {variant.attributes.commonSize && variant.attributes.commonSize.label ?
                <Fragment>
                    <dt className='t-text-quiet'><FormattedMessage id='product.commonSize'/></dt>
                    <dd className='u-text-strong'>{variant.attributes.commonSize.label}</dd>
                </Fragment>
            : null}
            {variant.attributes.matrixId ?
                <Fragment>
                    <dt className='t-text-quiet'><FormattedMessage id='product.itemNumber'/></dt>
                    <dd className='u-text-strong'>{variant.attributes.matrixId}</dd>
                </Fragment>
            : null}
        </dl>
    </div>
}

DetailsMobile.propTypes = {
    variant: PropTypes.object.isRequired,
}

export default DetailsMobile
