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
            <div>
                <PromoboxWithPositioning
                    vertical={verticalPosition}
                    horizontal={horizontalPosition}
                    image={image}
                    >
                    <p className='text-xl text-white sm:text-2xl md:text-3xl mb-2'>
                        <Translatable value={topic} />
                    </p>
                    <h1 className='text-5xl text-white md:text-6xl font-bold mb-2 leading-tight'>
                        <Translatable value={title} />
                    </h1>

                    {/* // TODO Implement reference properly */}
                    <Button
                        // component='a'
                        // href={buttonLink.target} {/* primary BUTTON */}
                        className='bg-indigo-500 font-semibold hover:bg-indigo-700 text-2xl py-4 px-6 rounded-lg'
                    >
                        <Translatable value={buttonText} />
                    </Button>
                </PromoboxWithPositioning>
            </div>
        )
    }
}

PromoBoxTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

PromoBoxTastic.defaultProps = {}

export default tastify()(PromoBoxTastic)
