import React, {useRef} from 'react'

import PropTypes from 'prop-types'
import classnames from 'classnames'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'

import TinySlider from '../../templates/slider'
import ProductItem from '../../molecules/product/item'

const ProductSlider = ({ products, title = '', description = '' }) => {
    const homepageRef = useRef(null)

    let distance = 0
    let marginLeft = '0'
    let marginRight = '0'
    let verticalMargin = '-16px'
    if(homepageRef.current) {
        distance = (homepageRef.current.offsetWidth - window.innerWidth)/2
        verticalMargin = `${distance}px`
        marginLeft = verticalMargin
        marginRight = verticalMargin
    }

    let wrapperStyle = {
        marginLeft: marginLeft,
        marginRight: marginRight,
    }


    return (
        <div className='select-none' ref={homepageRef}>
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

            <div className='mt-8' style={wrapperStyle}>
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
                </TinySlider>

            </div>




        </div>
    )
}

ProductSlider.propTypes = {
    products: PropTypes.object.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default ProductSlider
