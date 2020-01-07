import React from 'react'
import MoleculesButton from '../molecules/buttons/button'
import MoleculesProductRow from '../molecules/products/product-row'

const TemplatesProductReturn = props => {
    return (
        <div className='c-box'>
            <MoleculesProductRow
                showWishListIcon={false}
                showCloseIcon={false}
                showProductCount
            />

            <div className='o-distance-m'>
                <MoleculesButton type='primary' size='boss'>
                    Behalten
                </MoleculesButton>
            </div>

            <div className='o-distance-m'>
                <MoleculesButton type='quiet' size='boss'>
                    Zurückgeben
                </MoleculesButton>
            </div>
        </div>
    )
}

TemplatesProductReturn.propTypes = {

}

export default TemplatesProductReturn
