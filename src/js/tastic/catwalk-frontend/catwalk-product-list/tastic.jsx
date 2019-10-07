import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MoleculesHeading from "../../../patterns/catwalk-frontend/molecules/headings/heading";
import VerticalSwipe from "../../../patterns/catwalk-frontend/templates/vertical-swipe";
import MoleculesProduct from "../../../patterns/catwalk-frontend/molecules/products/product";
import Translatable from "../../../component/translatable";

class CatwalkCategoryProductListTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, description } = this.props.data

        // TODO "o-grid  o-region" here?
        return <div className="o-grid  o-region margin-12">
            <MoleculesHeading title={<Translatable value={title} />} description={<Translatable value={description} />} />
            <VerticalSwipe sliderId='swipe-content'>

                <div className='catwalk-product-list-tastic'>
                    <MoleculesProduct width='150px'/>
                    <MoleculesProduct width='150px'/>
                    <MoleculesProduct width='150px'/>
                    <MoleculesProduct width='150px'/>
                </div>
            </VerticalSwipe>
        </div>
    }
}

CatwalkCategoryProductListTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

CatwalkCategoryProductListTastic.defaultProps = {}

export default CatwalkCategoryProductListTastic
