import React from 'react'
import PropTypes from 'prop-types'

import OrganismsPromoboxWithPositioning from '../../patterns/molecules/promobox/promobox-with-positioning'
import Button from '../../patterns/atoms/buttons/button'
import { useWindowWidth } from '@react-hook/window-size'
import ButtonBoxesDesktop from '../../patterns/organisms/button-boxes/desktop'
import ButtonBoxesMobile from '../../patterns/organisms/button-boxes/mobile'

const CategoryButtonBoxesTastic = (props) => {
    const width = useWindowWidth()

    // eslint-disable-next-line no-unused-vars
    const { firstImage, firstButtonLabel, firstButtonLink, secondImage, secondButtonLabel, secondButtonLink, thirdImage, thirdButtonLabel, thirdButtonLink } = props.data
    let options = {
        vertical: 'middle',
        horizontal: 'center',
    }

    const buttonBoxes = [
        <div><OrganismsPromoboxWithPositioning
            key='1'
            image={firstImage}
            {... options}
            >
            <Button type='primary'>
                {firstButtonLabel}
            </Button>
        </OrganismsPromoboxWithPositioning></div>,
        <div><OrganismsPromoboxWithPositioning
            key='2'
            image={secondImage}
            {... options}
            >
            <Button type='primary'>
                {secondButtonLabel}
            </Button>
        </OrganismsPromoboxWithPositioning></div>,
        <div><OrganismsPromoboxWithPositioning
            key='3'
            image={thirdImage}
            {... options}
            >
            <Button type='primary'>
                {thirdButtonLabel}
            </Button>
        </OrganismsPromoboxWithPositioning></div>,
    ]

    if (width < 880) {
        return (
            <ButtonBoxesMobile>
                {buttonBoxes}
            </ButtonBoxesMobile>
        )
    }

    return (
        <ButtonBoxesDesktop>
            {buttonBoxes}
        </ButtonBoxesDesktop>
    )
}

CategoryButtonBoxesTastic.propTypes = {
    data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

CategoryButtonBoxesTastic.defaultProps = {}

export default CategoryButtonBoxesTastic
