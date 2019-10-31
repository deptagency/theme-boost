import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import OrganismsProductStage from "../stages/stage-product";
import OrganismsSizeSwiper from "../swiper/size-swiper";
import OrganismsImageColorSwiper from "../swiper/image-color-swiper";
import MoleculesButton from "../../molecules/buttons/button";

const OrganismsProductView = props => {
    return (
        <div className='o-grid'>
            <OrganismsProductStage />
            <h3 className='c-title-level-3 o-distance-m o-prevent-space'>Größe</h3>
            <div className='o-distance-s'>
                <OrganismsSizeSwiper />
            </div>
            <h3 className='c-title-level-3 o-distance-m o-prevent-space'>Farbe: Olive</h3>
            <div className='o-distance-s'>
                <OrganismsImageColorSwiper />
            </div>
            <div className='o-distance-l o-prevent-space'>
                <MoleculesButton type='primary' size='boss'>In den Warenkorb</MoleculesButton>
            </div>
        </div>
    );
};

OrganismsProductView.propTypes = {

};

export default OrganismsProductView;