import CatwalkHeaderTastic from './catwalk-header/tastic.jsx'
import CatwalkFooterTastic from './catwalk-footer/tastic.jsx'
import CatwalkHeroTastic from './catwalk-hero/tastic.jsx'
import CatwalkCategoryListingTastic from './catwalk-category-listing/tastic.jsx'
import CatwalkPromoBoxTastic from './catwalk-promo-box/tastic.jsx'
import CatwalkCategoryBoxesTastic from './catwalk-category-boxes/tastic.jsx'
import CatwalkCategoryButtonBoxesTastic from './catwalk-category-button-boxes/tastic.jsx'
import CatwalkCategoryProductListTastic from './catwalk-product-list/tastic.jsx'
import CatwalkNewsletterTastic from './catwalk-newsletter/tastic'
import CatwalkProductStageTastic from './catwalk-product-stage/tastic'
import CatwalkSizeFilterTastic from './catwalk-size-filter/tastic'
import CatwalkColorFilterTastic from './catwalk-color-filter/tastic'
import CatwalkAddToCartButtonTastic from './catwalk-add-to-cart-button/tastic'
import CatwalkDeliveryFeaturesTastic from './catwalk-delivery-features/tastic'
import CatwalkMoreInfoProductTastic from './catwalk-more-info-product/tastic'
import BrandContentfulTastic from './brand-contentful/tastic'
import HorizontalSpacerTastic from './horisontal-spacer/tastic'


export default (() => {
    return {
        'frontastic/boost/header': CatwalkHeaderTastic,
        'frontastic/boost/footer': CatwalkFooterTastic,
        'frontastic/boost/hero': CatwalkHeroTastic,
        'frontastic/boost/category-listing': CatwalkCategoryListingTastic,
        'frontastic/boost/promobox': CatwalkPromoBoxTastic,
        'frontastic/boost/category-boxes': CatwalkCategoryBoxesTastic,
        'frontastic/boost/category-button-boxes': CatwalkCategoryButtonBoxesTastic,
        'frontastic/boost/product-list': CatwalkCategoryProductListTastic,
        'frontastic/boost/newsletter': CatwalkNewsletterTastic,
        'frontastic/boost/product-stage': CatwalkProductStageTastic,
        'frontastic/boost/size-filter': CatwalkSizeFilterTastic,
        'frontastic/boost/color-filter': CatwalkColorFilterTastic,
        'frontastic/boost/add-to-cart-button': CatwalkAddToCartButtonTastic,
        'frontastic/boost/delivery-features': CatwalkDeliveryFeaturesTastic,
        'frontastic/boost/more-info-product': CatwalkMoreInfoProductTastic,
        'frontastic/boost/brand-contentful': BrandContentfulTastic,
        'frontastic/boost/horizontal-spacer': HorizontalSpacerTastic,
    }
})()
