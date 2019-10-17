import HeaderTastic from './header/tastic.jsx'
import FooterTastic from './footer/tastic.jsx'
import HeroTastic from './hero/tastic.jsx'
import CategoryListingTastic from './category-listing/tastic.jsx'
import PromoBoxTastic from './promo-box/tastic.jsx'
import CategoryBoxesTastic from './category-boxes/tastic.jsx'
import CategoryButtonBoxesTastic from './button-boxes/tastic.jsx'
import ProductListTastic from './product-list/tastic.jsx'
import NewsletterTastic from './newsletter/tastic'
import ProductStageTastic from './product-stage/tastic'
import SizeFilterTastic from './size-filter/tastic'
import AddToCartButtonTastic from './add-to-cart-button/tastic'
import MoreInfoProductTastic from './more-info-product/tastic'
import BrandContentfulTastic from './brand-contentful/tastic'
import HorizontalSpacerTastic from './horisontal-spacer/tastic'
import FrontasticHeaderTastic from './frontastic-header/tastic'

export default (() => {
    return {
        'frontastic/boost/header': HeaderTastic,
        'frontastic/boost/footer': FooterTastic,
        'frontastic/boost/hero': HeroTastic,
        'frontastic/boost/category-listing': CategoryListingTastic,
        'frontastic/boost/promobox': PromoBoxTastic,
        'frontastic/boost/category-boxes': CategoryBoxesTastic,
        'frontastic/boost/category-button-boxes': CategoryButtonBoxesTastic,
        'frontastic/boost/product-list': ProductListTastic,
        'frontastic/boost/newsletter': NewsletterTastic,
        'frontastic/boost/product-stage': ProductStageTastic,
        'frontastic/boost/size-filter': SizeFilterTastic,
        'frontastic/boost/add-to-cart-button': AddToCartButtonTastic,
        'frontastic/boost/more-info-product': MoreInfoProductTastic,
        'frontastic/boost/brand-contentful': BrandContentfulTastic,
        'frontastic/boost/horizontal-spacer': HorizontalSpacerTastic,
        'frontastic/boost/frontastic-header': FrontasticHeaderTastic,
    }
})()
