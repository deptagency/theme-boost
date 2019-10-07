import React from 'react';
import MoleculesButton from "../molecules/buttons/button";
import MoleculesProductRow from "../molecules/products/product-row";

const TemplatesProductReturn = props => {
    return (
        <div className="padding--10">
            <MoleculesProductRow
                showWishListIcon={false}
                showCloseIcon={false}
                showProductCount={true}
            />

            <div className='padding-top--10'>
                <MoleculesButton className='width--100 height--52px' type='primary'>
                    Behalten
                </MoleculesButton>
            </div>

            <div className='padding-top--10'>
                <MoleculesButton className='width--100 height--52px' type='quiet'>
                    Zurückgeben
                </MoleculesButton>
            </div>
        </div>
    )
};

TemplatesProductReturn.propTypes = {

};

export default TemplatesProductReturn;