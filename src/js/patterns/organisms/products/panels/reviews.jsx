import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OrganismsHeaderSlideIn from "../../base/header-slide-in";
import {FormattedMessage} from "react-intl";
import Button from "../../../atoms/buttons/button";
import MoleculesRating from "../../../molecules/ratings/rating";
import TemplatesSlideInPanel from "../../../templates/slide-in-panel";

const Reviews = ({isOpen, onClose}) => {
    const [reviewFromOpen, setReviewFormOpen] = useState(false)

    return [
        <TemplatesSlideInPanel
            // {..._.omit(props, ['children', 'component', 'className', 'theme', 'title', 'setIsOpen'])}
            //
            key='1'
            isOpen={isOpen}
            header={<OrganismsHeaderSlideIn
                onClose={onClose}
                title={<FormattedMessage id={'reviews'} />}
                showLeftBackIcon={false}
            />}
        >

            {/* reviews panel */}
            <div className='c-box'>
                <div className='u-text-strong'>
                    {/* Translate this */}
                    Dieses Produkt hat Bewertungen. Möchten Sie das Produkt bewerten?
                </div>
                <Button type='quiet' className='o-distance-m' size='boss' onClick={() => { setReviewFormOpen(true) }}>
                    Bewertung abgeben
                </Button>

                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                    return <div className='u-text-strong o-distance-l'>
                        Beatrice
                        <MoleculesRating className='o-distance-xs' />
                        <div className='u-text-normal o-distance-xs'>
                            Tolles Kleid, es sieht sehr elegant aus. Ich bin zur Zeit schwanger und das Kleid passt trotzdem perfekt.
                        </div>
                    </div>
                })}

                <Button type='quiet' className='o-distance-l' size='boss' onClick={() => { setReviewFormOpen(true) }}>
                    Bewertung abgeben
                </Button>
            </div>
            {/* end of reviews panel */}
        </TemplatesSlideInPanel>,

        <TemplatesSlideInPanel
            key='2'
            isOpen={reviewFromOpen}
            from='right'
            header={<OrganismsHeaderSlideIn
                onClose={() => setReviewFormOpen(false)}
                title={<FormattedMessage id='writeReview' />}
                showRightCloseIcon={false}
            />}
        >
            aaaaaaaaaaaaAaaa
        </TemplatesSlideInPanel>
    ]
}

Reviews.propTypes = {};

export default Reviews;