import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OrganismsPromoboxWithPositioning from '../../patterns/molecules/promobox/promobox-with-positioning'
import MoleculesButton from '../../patterns/molecules/buttons/button'
import Slider from '../../patterns/templates/slider'

class CategoryButtonBoxesTastic extends Component {
    render () {
        // eslint-disable-next-line no-unused-vars
        const { firstImage, firstButtonLabel, firstButtonLink, secondImage, secondButtonLabel, secondButtonLink, thirdImage, thirdButtonLabel, thirdButtonLink } = this.props.data
        const options = {
            height: '204px',
            vertical: 'middle',
            horizontal: 'center',
        }

        return (
            <div className='button-boxes-slider display-grid'>
                <Slider options={{ fixedWidth: 290 }}>
                    <OrganismsPromoboxWithPositioning
                        key='1'
                        image={firstImage}
                        {... options}
                    >
                        <MoleculesButton type='primary'>
                            {firstButtonLabel}
                        </MoleculesButton>
                    </OrganismsPromoboxWithPositioning>
                    <OrganismsPromoboxWithPositioning
                        key='2'
                        image={secondImage}
                        {... options}
                    >
                        <MoleculesButton type='primary'>
                            {secondButtonLabel}
                        </MoleculesButton>
                    </OrganismsPromoboxWithPositioning>
                    <OrganismsPromoboxWithPositioning
                        key='3'
                        image={thirdImage}
                        {... options}
                    >
                        <MoleculesButton type='primary'>
                            {thirdButtonLabel}
                        </MoleculesButton>
                    </OrganismsPromoboxWithPositioning>
                </Slider>
            </div>
        )
    }
}

CategoryButtonBoxesTastic.propTypes = {
    data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

CategoryButtonBoxesTastic.defaultProps = {}

export default CategoryButtonBoxesTastic
