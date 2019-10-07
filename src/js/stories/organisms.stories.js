import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import AtomsFormLabel from 'js/patterns/catwalk-frontend/atoms/forms/form-label'
import AtomsFormInput from 'js/patterns/catwalk-frontend/atoms/forms/form-input'
import MoleculesButton from 'js/patterns/catwalk-frontend/molecules/buttons/button'
import MoleculesFormFromTo from 'js/patterns/catwalk-frontend/molecules/forms/form-element-from-to'
import MoleculesSequentialNav from 'js/patterns/catwalk-frontend/molecules/navigations/sequential-nav'
import MoleculesProduct from 'js/patterns/catwalk-frontend/molecules/products/product'
import OrganismsFoot from 'js/patterns/catwalk-frontend/organisms/base/foot'
import OrganismsHeader from 'js/patterns/catwalk-frontend/organisms/base/header'
import OrganismsHeaderMobile from 'js/patterns/catwalk-frontend/organisms/base/header-mobile'
import OrganismsHeaderContext from 'js/patterns/catwalk-frontend/organisms/base/header-context'
import OrganismsHeaderSlideIn from 'js/patterns/catwalk-frontend/organisms/base/header-slide-in'
import OrganismsPromobox from 'js/patterns/catwalk-frontend/molecules/promobox/promobox'
import OrganismsPromoboxWithPositioning from 'js/patterns/catwalk-frontend/molecules/promobox/promobox-with-positioning'
import OrganismsGuide from 'js/patterns/catwalk-frontend/organisms/guides/guide'
import OrganismsFilterBar from 'js/patterns/catwalk-frontend/organisms/bars/filter-bar'
import OrganismsButtonBar from 'js/patterns/catwalk-frontend/organisms/bars/button-bar'
import OrganismsStage from 'js/patterns/catwalk-frontend/organisms/stages/stage'
import OrganismsProductStage from 'js/patterns/catwalk-frontend/organisms/stages/stage-product'
import OrganismsGallery from 'js/patterns/catwalk-frontend/organisms/galleries/gallery'
import OrganismsChoice from 'js/patterns/catwalk-frontend/organisms/form/form-choice'
import OrganismsNewsletterBlock from 'js/patterns/catwalk-frontend/organisms/blocks/newsletter'
import OrganismsSummary from 'js/patterns/catwalk-frontend/organisms/blocks/summary'
import OrganismsFormContact from 'js/patterns/catwalk-frontend/organisms/form/form-contact'
import OrganismsFormLogin from 'js/patterns/catwalk-frontend/organisms/form/form-login'
import OrganismsFormRegister from 'js/patterns/catwalk-frontend/organisms/form/form-register'
import OrganismsFormCreditCard from 'js/patterns/catwalk-frontend/organisms/form/form-credit-card'
import OrganismsFormSepa from 'js/patterns/catwalk-frontend/organisms/form/form-sepa'
import OrganismsFormAddress from 'js/patterns/catwalk-frontend/organisms/form/form-address'
import OrganismsFormPasswordReset from 'js/patterns/catwalk-frontend/organisms/form/form-password-reset'
import OrganismsProductListing from 'js/patterns/catwalk-frontend/organisms/listings/product-listing'
import OrganismsProductListingBare from 'js/patterns/catwalk-frontend/organisms/listings/product-listing-bare'
import OrganismsPaymentListing from 'js/patterns/catwalk-frontend/organisms/listings/payment-listing'
import OrganismsFeaturebox from 'js/patterns/catwalk-frontend/organisms/featurebox/featurebox'
import OrganismsCategoryBoxes from 'js/patterns/catwalk-frontend/organisms/listings/category-boxes'
import OrganismsCreditCard from 'js/patterns/catwalk-frontend/organisms/blocks/creditcard'
import MoleculesMobileNavigation from 'js/patterns/catwalk-frontend/molecules/navigations/mobile-navigation'
import TopCategoryNavTabs from 'js/patterns/catwalk-frontend/molecules/navigations/gender-nav-tabs'

storiesOf('3.Organisms|Base', module)
  .add('Footer', () => (
      <div>
        <OrganismsFoot />
      </div>
  ))
  .add('Header', () => (
      <div>
        <OrganismsHeader />
      </div>
  ))
  .add('Mobile Header', () => (
      <div>
        <OrganismsHeaderMobile />
      </div>
  ))
  .add('Context Header', () => (
      <div>
        <OrganismsHeaderContext />
      </div>
  ))
  .add('Slide In Header', () => (
      <div>
        <OrganismsHeaderSlideIn title='Custom title' />
      </div>
  ))
  .add('Context Switcher Header', () => (
      <div>
        <TopCategoryNavTabs />
      </div>
  ))

storiesOf('3.Organisms|Navigations', module)
  .add('Sequential', () => (
    <MoleculesSequentialNav />
  ))
  .add('Mobile Navigation', () => (
    <MoleculesMobileNavigation />
  ))

storiesOf('3.Organisms|Guide', module)
  .add('Default', () => (
    <OrganismsGuide />
  ))

storiesOf('3.Organisms|Products', module)
  .add('Product', () => (
    <MoleculesProduct /> 
  ))

storiesOf('3.Organisms|Boxes', module)
  .add('Promobox', () => (
    <div>
      <OrganismsPromobox />
    </div>
  ))
  .add('Featurebox', () => (
      <OrganismsFeaturebox />
  ))
  .add('Content Promobox With Positioning', () => (
    <div>
        <OrganismsPromoboxWithPositioning vertical='top' horizontal='right' >
            <p className='c-topic'>Jetzt für den Sommer</p>
            <h1 className="c-title">Viele Angebote bei Levi´s </h1>
            <MoleculesButton type='primary'>
                Jetzt shoppen
            </MoleculesButton>
        </OrganismsPromoboxWithPositioning>
      <OrganismsPromoboxWithPositioning vertical='bottom' horizontal='left' >
          <p className='c-topic'>Jetzt für den Sommer</p>
          <h1 className="c-title">Viele Angebote bei Levi´s </h1>
          <MoleculesButton type='primary'>
              Jetzt shoppen
          </MoleculesButton>
      </OrganismsPromoboxWithPositioning>
      <OrganismsPromoboxWithPositioning vertical='middle' horizontal='center' >
          <p className='c-topic'>Jetzt für den Sommer</p>
          <h1 className="c-title">Viele Angebote bei Levi´s </h1>
          <MoleculesButton type='primary'>
              Jetzt shoppen
          </MoleculesButton>
      </OrganismsPromoboxWithPositioning>
      <OrganismsPromoboxWithPositioning >
          <p className='c-topic'>Jetzt für den Sommer</p>
          <h1 className="c-title">Viele Angebote bei Levi´s </h1>
          <MoleculesButton type='primary'>
              Jetzt shoppen
          </MoleculesButton>
      </OrganismsPromoboxWithPositioning>
    </div>
  ))
  .add('Standardboxes', () => (
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
  ))
  .add('Frames', () => (
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
  ))
storiesOf('3. Organisms|Listings', module)
  .add('Productlisting', () => (
    <OrganismsProductListing />
  ))
  .add('Productlisting Bare', () => (
    <OrganismsProductListingBare />
  ))
  .add('Paymentlisting', () => (
    <OrganismsPaymentListing />
  ))
  .add('Categories', () => (
    <div>
      <section className='o-distance'>
          <div className='o-grid o-grid--medium-third'>
              <OrganismsPromobox />
              <OrganismsPromobox />
              <OrganismsPromobox />
          </div>
      </section>  
      <section className='o-distance'>
          <div className='o-grid o-grid--medium-third'>
              <div className='c-chip u-aspect-ratio-1x1 o-head-up'>
                <div className='o-head-up__item o-head-up__item--middle'>
                  <a href="" title="" className='c-link'>Mütze</a>
                </div>
              </div>
              <div className='c-chip u-aspect-ratio-1x1 o-head-up'>
                <div className='o-head-up__item o-head-up__item--middle'>
                  <a href="" title="" className='c-link'>Mütze</a>
                </div>
              </div>
              <a href="" title="" className='c-chip u-aspect-ratio-1x1 o-head-up'>
                <div className='o-head-up__item o-head-up__item--middle'>
                  <span className='c-link'>Mütze</span>
                </div>
              </a>
          </div>
      </section>
    </div>
  )).
    add('Category Boxes', () => (
    <OrganismsCategoryBoxes />
  ))
  .add('Chiplist', () => (
    <div className="o-chiplist">
      <div className="c-chip o-chiplist__item">
        <span>Blau</span>
        <button className="c-chip__trigger">
          <svg className="c-icon c-icon--s" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>cross</title>
            <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
          </svg>
        </button>
      </div>
      <div className="c-chip o-chiplist__item">
        <span>Tommy Hilfiger</span>
        <button className="c-chip__trigger">
          <svg className="c-icon c-icon--s" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>cross</title>
            <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
          </svg>
        </button>
      </div>
      <div className="c-chip o-chiplist__item is-active">
        <span>Größe 46</span>
        <button className="c-chip__trigger">
          <svg className="c-icon c-icon--s" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>cross</title>
            <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
          </svg>
        </button>
      </div>
    </div>
  ))
  .add('Choices', () => (
    <ul className='o-list-inline'>
        <li className='o-list-inline__item'>
            <OrganismsChoice />
        </li>
        <li className='o-list-inline__item'>
            <OrganismsChoice />
        </li>
        <li className='o-list-inline__item'>
            <OrganismsChoice />
        </li>
        <li className='o-list-inline__item'>
            <OrganismsChoice />
        </li>
    </ul>
  ))
  .add('Features', () => (
    <div className="o-grid o-grid--small-half">
      <OrganismsFeaturebox />
      <OrganismsFeaturebox />
      <OrganismsFeaturebox />
    </div>
  ))

storiesOf('3.Organisms|Headings', module)
  .add('default', () => (
    <div className='o-heading'>
      <p class="c-topic">Longer Topic</p>
      <h2 class="c-title">Title for Storefront</h2>
      <p className="c-lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis accusamus quam velit illum aliquid quae officiis pariatur possimus nulla, harum aperiam voluptatibus? Quia autem enim porro atque ratione omnis.</p>
      <p className='o-distance-m'><a href="" title="" className='c-link'>Link</a></p>
    </div>
  ))
storiesOf('3.Organisms|Blocks', module)
  .add('Creditcard', () => (
    <OrganismsCreditCard /> 
  ))
  .add('Media', () => (
    <div>
      <div className='o-media-block'>
        <div className='o-media-block__asset'>
          <img src="https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
        </div>
        <div className='o-media-block__body'>
          <p className='c-topic u-text-light'>Topic</p>
          <h2 className="c-title">Media Block</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut cum quisquam excepturi nisi neque, ea fuga, odio expedita quis dicta vero? Animi molestias minus ad possimus deserunt laboriosam tempora sit!</p>
        </div>
      </div>
    </div>
  ))
  .add('Newsletter', () => (
    <OrganismsNewsletterBlock />
  ))
  .add('Summary', () => (
    <OrganismsSummary />
  ))

storiesOf('3.Organisms|Forms', module)
  .add('Input Range', () => (
    <MoleculesFormFromTo />
  ))
  .add('Choice', () => (
    <OrganismsChoice />
  ))
  .add('Row', () => (
    <div className='c-form-row'>
      <AtomsFormLabel />
      <AtomsFormInput />
      <a href="" className="c-link c-link--quiet o-flex o-flex--end">Passwort vergessen?</a>
    </div>
  ))
  .add('Contact Form', () => (
    <OrganismsFormContact />
  ))
  .add('Login Form', () => ( 
    <OrganismsFormLogin />
  ))
  .add('Register Form', () => (
      <OrganismsFormRegister />
  ))
  .add('Credit Card Form', () => (
      <OrganismsFormCreditCard />
  ))
  .add('SEPA Form', () => (
      <OrganismsFormSepa />
  ))
  .add('Password Reset Form', () => (
      <OrganismsFormPasswordReset />
  ))
  .add('Address', () => (
      <OrganismsFormAddress />
  ))

storiesOf('3.Organisms|Bars', module)
  .add('Filter', () => (
      <OrganismsFilterBar />
  ))
  .add('Buttonbar', () => (
    <div>
      <h3>Buttonbar</h3>
      <OrganismsButtonBar />
    </div>
  ))

storiesOf('3.Organisms|Stages', module)
    .add('Default Stage', () => (
        <OrganismsStage />
    ))
    .add('Product Stage', () => (
        <OrganismsProductStage />
    ))

storiesOf('3.Organisms|Galleries', module)
    .add('Default', () => (
        <OrganismsGallery />
    ))