import React from 'react'

import MoleculesButton from 'js/patterns/molecules/buttons/button'

import OrganismsPromobox from 'js/patterns/molecules/promobox/promobox'
import OrganismsPromoboxWithPositioning from 'js/patterns/molecules/promobox/promobox-with-positioning'

import OrganismsFeaturebox from 'js/patterns/organisms/featurebox/featurebox'

export default {
    title: '3.Organisms|Boxes',
}

export const promobox = () => {
    return (
        <div>
            <OrganismsPromobox />
        </div>
    )
}

promobox.story = {
    name: 'Promobox',
}

export const featurebox = () => {
    return (
        <OrganismsFeaturebox />
    )
}

featurebox.story = {
    name: 'Featurebox',
}

export const contentPromoboxWithPositioning = () => {
    return (
        <div>
            <OrganismsPromoboxWithPositioning vertical='top' horizontal='right' >
                <p className='c-topic'>Jetzt für den Sommer</p>
                <h1 className='c-title'>Viele Angebote bei Levi´s </h1>
                <MoleculesButton type='primary'>
                Jetzt shoppen
                </MoleculesButton>
            </OrganismsPromoboxWithPositioning>
            <OrganismsPromoboxWithPositioning vertical='bottom' horizontal='left' >
                <p className='c-topic'>Jetzt für den Sommer</p>
                <h1 className='c-title'>Viele Angebote bei Levi´s </h1>
                <MoleculesButton type='primary'>
              Jetzt shoppen
                </MoleculesButton>
            </OrganismsPromoboxWithPositioning>
            <OrganismsPromoboxWithPositioning vertical='middle' horizontal='center' >
                <p className='c-topic'>Jetzt für den Sommer</p>
                <h1 className='c-title'>Viele Angebote bei Levi´s </h1>
                <MoleculesButton type='primary'>
              Jetzt shoppen
                </MoleculesButton>
            </OrganismsPromoboxWithPositioning>
            <OrganismsPromoboxWithPositioning >
                <p className='c-topic'>Jetzt für den Sommer</p>
                <h1 className='c-title'>Viele Angebote bei Levi´s </h1>
                <MoleculesButton type='primary'>
              Jetzt shoppen
                </MoleculesButton>
            </OrganismsPromoboxWithPositioning>
        </div>
    )
}

contentPromoboxWithPositioning.story = {
    name: 'Content Promobox With Positioning',
}

export const standardboxes = () => {
    return (
        <div>
            <h3 className='o-distance'>Small Box</h3>
            <div className='c-box c-box--s t-quietlight'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, tenetur! Vero provident necessitatibus animi. Laborum, ullam qui placeat esse dolores eligendi ipsa nemo impedit sint ducimus omnis, ad repellat aliquam!
            </div>
            <h3 className='o-distance'>Box</h3>
            <div className='c-box t-quietlight'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, tenetur! Vero provident necessitatibus animi. Laborum, ullam qui placeat esse dolores eligendi ipsa nemo impedit sint ducimus omnis, ad repellat aliquam!
            </div>
            <h3 className='o-distance'>Large Box</h3>
            <div className='c-box c-box--l t-quietlight'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, tenetur! Vero provident necessitatibus animi. Laborum, ullam qui placeat esse dolores eligendi ipsa nemo impedit sint ducimus omnis, ad repellat aliquam!
            </div>
            <h3 className='o-distance'>X-Large Box</h3>
            <div className='c-box c-box--xl t-quietlight'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, tenetur! Vero provident necessitatibus animi. Laborum, ullam qui placeat esse dolores eligendi ipsa nemo impedit sint ducimus omnis, ad repellat aliquam!
            </div>
        </div>
    )
}

standardboxes.story = {
    name: 'Standardboxes',
}

export const frames = () => {
    return (
        <div>
            <h3 className='o-distance'>Small Frame</h3>
            <div className='c-frame c-frame--s'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, tenetur! Vero provident necessitatibus animi. Laborum, ullam qui placeat esse dolores eligendi ipsa nemo impedit sint ducimus omnis, ad repellat aliquam!
            </div>
            <h3 className='o-distance'>Frame</h3>
            <div className='c-frame'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, tenetur! Vero provident necessitatibus animi. Laborum, ullam qui placeat esse dolores eligendi ipsa nemo impedit sint ducimus omnis, ad repellat aliquam!
            </div>
            <h3 className='o-distance'>Large Frame</h3>
            <div className='c-frame c-frame--l'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, tenetur! Vero provident necessitatibus animi. Laborum, ullam qui placeat esse dolores eligendi ipsa nemo impedit sint ducimus omnis, ad repellat aliquam!
            </div>
            <h3 className='o-distance'>X-Large Frame</h3>
            <div className='c-frame c-frame--xl'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, tenetur! Vero provident necessitatibus animi. Laborum, ullam qui placeat esse dolores eligendi ipsa nemo impedit sint ducimus omnis, ad repellat aliquam!
            </div>
        </div>
    )
}

frames.story = {
    name: 'Frames',
}
