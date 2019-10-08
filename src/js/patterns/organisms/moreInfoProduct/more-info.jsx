import React, { Fragment } from 'react'
import arrowExpand from '../../../../icons/arrow-expand.svg'

const OrganismsMoreInfoProduct = () => {
    return (
        <Fragment>
            <div className='expansion-component margin-lr-16'>
                Beschreibung
                <img src={arrowExpand} alt='arrow expand' />
            </div>
            <div className='expansion-component margin-lr-16'>
                Produkthinweise
                <img src={arrowExpand} alt='arrow expand' />
            </div>
            <div className='expansion-component margin-lr-16'>
                Bewertungen
                <img src={arrowExpand} alt='arrow expand' />
            </div>
        </Fragment>
    )
}

OrganismsMoreInfoProduct.propTypes = {

}

export default OrganismsMoreInfoProduct
