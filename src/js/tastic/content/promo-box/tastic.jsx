import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import PromoboxWithPositioning from '../../../patterns/molecules/promobox/promobox-with-positioning'
import Button from '../../../patterns/atoms/buttons/button'

class PromoBoxTastic extends Component {
    render () {
        // eslint-disable-next-line no-unused-vars
        const { verticalPosition, horizontalPosition, buttonLink, buttonText, image, title, topic } = this.props.data

        return (
            <PromoboxWithPositioning
                vertical={verticalPosition}
                horizontal={horizontalPosition}
                image={image}
                customChildrenStyle={{ margin: '32px' }}
                >
                <p className='c-topic'>
                    <Translatable value={topic} />
                </p>
                <h1 className='c-title'>
                    <Translatable value={title} />
                </h1>

                {/* // TODO Implement reference properly */}
                <Button
                    // component='a'
                    // href={buttonLink.target}
                    type='primary'
                >
                    <Translatable value={buttonText} />
                </Button>
            </PromoboxWithPositioning>
        )
    }
}

PromoBoxTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

PromoBoxTastic.defaultProps = {}

export default tastify()(PromoBoxTastic)
