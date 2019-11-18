import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OrganismsPromoboxWithPositioning from '../../patterns/molecules/promobox/promobox-with-positioning'
import Button from '../../patterns/atoms/buttons/button'
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
                        <Button type='primary'>
                            {firstButtonLabel}
                        </Button>
                    </OrganismsPromoboxWithPositioning>
                    <OrganismsPromoboxWithPositioning
                        key='2'
                        image={secondImage}
                        {... options}
                    >
                        <Button type='primary'>
                            {secondButtonLabel}
                        </Button>
                    </OrganismsPromoboxWithPositioning>
                    <OrganismsPromoboxWithPositioning
                        key='3'
                        image={thirdImage}
                        {... options}
                    >
                        <Button type='primary'>
                            {thirdButtonLabel}
                        </Button>
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
