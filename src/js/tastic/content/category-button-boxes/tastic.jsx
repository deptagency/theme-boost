import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PromoboxWithPositioning from '../../../patterns/molecules/promobox/promobox-with-positioning'
import Button from '../../../patterns/atoms/buttons/button'
import ButtonBoxesDesktop from '../../../patterns/organisms/button-boxes/desktop'
import ButtonBoxesMobile from '../../../patterns/organisms/button-boxes/mobile'

const CategoryButtonBoxesTastic = ({ data, viewportWidth }) => {
    // eslint-disable-next-line no-unused-vars
    const {
        firstImage,
        firstButtonLabel,
        secondImage,
        secondButtonLabel,
        thirdImage,
        thirdButtonLabel,
    } = data
    let options = {
        vertical: 'middle',
        horizontal: 'center',
    }

    const buttonBoxes = [
        <div key='1'>
            <PromoboxWithPositioning image={firstImage} {...options}>
                <Button className='bg-transparent hover:bg-indigo-700 text-white font-semibold hover:text-white text-2xl py-4 px-6 border border-white hover:border-transparent rounded-lg' style={{ borderStyle: 'solid' }}>{firstButtonLabel}</Button>
            </PromoboxWithPositioning>
        </div>,
        <div key='2'>
            <PromoboxWithPositioning image={secondImage} {...options}>
                <Button className='bg-transparent hover:bg-indigo-700 text-white font-semibold hover:text-white text-2xl py-4 px-6 border border-white hover:border-transparent rounded-lg' style={{ borderStyle: 'solid' }}>{secondButtonLabel}</Button>
            </PromoboxWithPositioning>
        </div>,
        <div key='3'>
            <PromoboxWithPositioning image={thirdImage} {...options}>
                <Button className='bg-transparent hover:bg-indigo-700 text-white font-semibold hover:text-white text-2xl py-4 px-6 border border-white hover:border-transparent rounded-lg' style={{ borderStyle: 'solid' }}>{thirdButtonLabel}</Button>
            </PromoboxWithPositioning>
        </div>,
    ]

    if (viewportWidth < 880) {
        return <ButtonBoxesMobile>{buttonBoxes}</ButtonBoxesMobile>
    }

    return <ButtonBoxesDesktop>{buttonBoxes}</ButtonBoxesDesktop>
}

CategoryButtonBoxesTastic.propTypes = {
    data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
    viewportWidth: PropTypes.number.isRequired,
}

CategoryButtonBoxesTastic.defaultProps = {}

export default connect((globalState, props) => {
    return {
        ...props,
        viewportWidth: globalState.renderContext.viewportDimension.width,
    }
})(CategoryButtonBoxesTastic)
