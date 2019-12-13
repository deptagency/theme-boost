import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import {
    moreInfoDesktop_light_text,
    moreInfoDesktop_p_formatted,
    moreInfoDesktop_span_formatted
} from "../more-info.module.scss";

/**
 * Default implementation of attribute rendering on product detail pages.
 *
 * You will most probably want to replace this by a custom rendering for your product model.
 */
const OrganismsDetailsMobile = ({ attributes: { style, matrixId } }) => {
    return (
        <>
            <p className={moreInfoDesktop_light_text}><span className={moreInfoDesktop_span_formatted}><FormattedMessage id='product.materialOuterFabric' /></span> 100% <FormattedMessage id='product.viscose' /></p>
            <p className={moreInfoDesktop_light_text}><span className={moreInfoDesktop_span_formatted}><FormattedMessage id='product.lining' /></span> 100% <FormattedMessage id='product.viscose' /></p>

            <p className={moreInfoDesktop_p_formatted}><FormattedMessage id='product.moreAboutThisProduct' /></p>

            <p className={moreInfoDesktop_light_text}><span className={moreInfoDesktop_span_formatted}><FormattedMessage id='product.cut' /></span> 100% <FormattedMessage id='product.viscose' /></p>
            <p className={moreInfoDesktop_light_text}><span className={moreInfoDesktop_span_formatted}><FormattedMessage id='product.clasp' /></span> <FormattedMessage id='product.lacing' /></p>
            {(style && style.label) && <p className={moreInfoDesktop_light_text}><span className={moreInfoDesktop_span_formatted}><FormattedMessage id='product.style' /></span> {style.label} </p>}
            {matrixId && <p className={moreInfoDesktop_light_text}><span className={moreInfoDesktop_span_formatted}><FormattedMessage id='product.itemNumber' /></span> {matrixId} </p>}

        </>
    )
}

OrganismsDetailsMobile.propTypes = {
    attributes: PropTypes.object.isRequired,
}

export default ComponentInjector.return('OrganismsMoreInfoProductMobile.OrganismsDetailsMobile', OrganismsDetailsMobile)
