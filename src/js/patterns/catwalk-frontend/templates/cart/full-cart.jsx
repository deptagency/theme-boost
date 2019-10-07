import React from 'react';
import PropTypes from 'prop-types';
import OrganismsHeaderSlideIn from "../../organisms/base/header-slide-in";
import OrganismsProductListingInCart from "../../organisms/listings/product-listing-in-cart";
import OrganismsPaymentListing from "../../organisms/listings/payment-listing";
import OrganismsSummary from "../../organisms/blocks/summary";
import MoleculesButton from "../../molecules/buttons/button";
import { Scrollbars } from 'react-custom-scrollbars'

const TemplatesFullCart = ({setIsOpen}) => {
    return (
        <div>
            {/*<OrganismsHeaderSlideIn setIsOpen={setIsOpen} title='Main Warenkorb' />*/}
            <div className='full-cart-content'>
                <OrganismsProductListingInCart />
                <div className='full-cart-payment-list'>
                    <h4>Bezahlarten</h4>

                    <OrganismsPaymentListing />
                </div>

                <OrganismsSummary />

                <p className='u-text-s t-text-quiet full-cart-coupons-info'>
                    Gutscheincodes können Sie im letzten Schritt der Bestellung eingeben.
                </p>

                <MoleculesButton size='full-width' type='primary'>
                    ZUR KASSE
                </MoleculesButton>
            </div>
        </div>
    );
};

TemplatesFullCart.propTypes = {

};

export default TemplatesFullCart;