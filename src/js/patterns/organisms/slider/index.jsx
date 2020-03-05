import React, {Component, useRef} from 'react'

import PropTypes from 'prop-types'
import classnames from 'classnames'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'

import TinySlider from '../../templates/slider'
import ProductItem from '../../molecules/product/item'

import { useWindowWidth } from '@react-hook/window-size'

class ProductSlider extends Component {
    constructor (props) {
        super(props)

        this.pageRef = React.createRef()
        this.productSliderWrapperRef = React.createRef()


        this.state = {
            wrapperStyle: {},
            distance: 0
        }
    }

    componentDidMount() {
        const distance = (window.innerWidth - this.pageRef.current.offsetWidth) / 2

        const wrapperStyle = {
            margin: `0 ${distance * -1}px`,
        }

        if (this.productSliderWrapperRef.current) {
            this.productSliderWrapperRef.current
                .getElementsByClassName('tns-inner')[0]
                .setAttribute('style', `transform: translateX(${distance}px)`)
        }

        this.setState({wrapperStyle, distance})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`prevProps, prevState, snapshot`)
        console.log(prevProps, prevState, snapshot)

        console.log('this.pageRef.current', this.pageRef.current)

        console.log('window.innerWidth','this.pageRef.current.offsetWidth')
        console.log(window.innerWidth, this.pageRef.current.offsetWidth)

        if (this.pageRef.current && prevState.distance !== this.state.distance) {
            const distance = (window.innerWidth - this.pageRef.current.offsetWidth) / 2

            const wrapperStyle = {
                margin: `0 ${distance * -1}px`,
            }

            if (this.productSliderWrapperRef.current) {
                this.productSliderWrapperRef.current
                    .getElementsByClassName('tns-inner')[0]
                    .setAttribute('style', `transform: translateX(${distance}px)`)
            }

            this.setState({wrapperStyle, distance})
        }
    }

    render() {
        const { products, title = '', description = '' } = this.props

        console.log('wrapperStyle', this.state.wrapperStyle)

        return (
            <div className='select-none' ref={this.pageRef}>
                {title && (
                    <p className='text-center font-hairline text-gray-500'>
                        <Translatable value={title} />
                    </p>
                )}
                {description && (
                    <h2 className='text-center font-bold'>
                        <Translatable value={description} />
                    </h2>
                )}

                <div
                    className='boost-product-slider mt-8'
                    style={this.state.wrapperStyle}
                    ref={this.productSliderWrapperRef}
                >
                    <TinySlider>
                        {products.map((product, i) => {
                            return (
                                <div key={i}>
                                    <ProductItem
                                        product={product}
                                        itemClassName={classnames({
                                            'mr-6': (i + 1 < products.length),
                                        })}
                                    />
                                </div>
                            )
                        })}
                        <div />
                    </TinySlider>
                </div>
            </div>
        )
    }

}

ProductSlider.propTypes = {
    products: PropTypes.array.isRequired,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
}

export default ProductSlider
