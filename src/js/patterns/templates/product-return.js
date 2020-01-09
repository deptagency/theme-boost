import React from 'react'
import Button from '../molecules/buttons/button'
import ProductRow from '../molecules/products/product-row'

const ProductReturn = props => {
    return (
        <div className='c-box'>
            <ProductRow
                showWishListIcon={false}
                showCloseIcon={false}
                showProductCount
            />

            <div className='o-distance-m'>
                <Button type='primary' size='boss'>
                    Behalten
                </Button>
            </div>

            <div className='o-distance-m'>
                <Button type='quiet' size='boss'>
                    Zurückgeben
                </Button>
            </div>
        </div>
    )
}

ProductReturn.propTypes = {

}

export default ProductReturn
