import HeaderTastic from './header/header/tastic.jsx'
import PromoBoxTastic from './content/promo-box/tastic.jsx'
import CategoryButtonBoxesTastic from './content/category-button-boxes/tastic.jsx'
import ProductSliderTastic from './product/product-slider/tastic.jsx'
import NewsletterTastic from './forms/newsletter/tastic'
import MarkdownTastic from './content/markdown/tastic'
import MoreInfoProductTastic from './product-details/more-info-product/tastic'
import BrandContentfulTastic from './content/brand-contentful/tastic'
import HorizontalSpacerTastic from './helpers/horizontal-spacer/tastic'
import CheckoutTastic from './checkout/checkout/tastic'
import ProductViewTastic from './product-details/product-view/tastic'
import CartTastic from './cart/cart/tastic'
import ShowcaseTextTastic from './content/showcase-text/tastic'
import AccountAccessTastic from './account/access/tastic'
import AccountConfirmTastic from './account/confirm/tastic'
import AccountProfileTastic from './account/profile/tastic'
import StoreFeaturesTastic from './content/store-features/tastic'
import FooterContactInfoTastic from './footer/contact-info/tastic'
import FooterPaymentMethodsTastic from './footer/payment-methods/tastic'
import FooterLinkListTastic from './footer/link-list/tastic'
import FooterMetaNavTastic from './footer/meta-nav/tastic'
import FooterSocialNavTastic from './footer/social-nav/tastic'
import WishlistTastic from './account/wishlist/tastic'

export default (() => {
    return {
        'frontastic/boost/header': HeaderTastic,
        'frontastic/boost/promobox': PromoBoxTastic,
        'frontastic/boost/category-button-boxes': CategoryButtonBoxesTastic,
        'frontastic/boost/product-slider': ProductSliderTastic,
        'frontastic/boost/newsletter': NewsletterTastic,
        'frontastic/boost/markdown': MarkdownTastic,
        'frontastic/boost/more-info-product': MoreInfoProductTastic,
        'frontastic/boost/brand-contentful': BrandContentfulTastic,
        'frontastic/boost/horizontal-spacer': HorizontalSpacerTastic,
        'frontastic/boost/checkout': CheckoutTastic,
        'frontastic/boost/product-view': ProductViewTastic,
        'frontastic/boost/cart': CartTastic,
        'frontastic/boost/showcase-text': ShowcaseTextTastic,
        'frontastic/boost/account-access': AccountAccessTastic,
        'frontastic/boost/account-confirm': AccountConfirmTastic,
        'frontastic/boost/account-profile': AccountProfileTastic,
        'frontastic/boost/store-features': StoreFeaturesTastic,
        'frontastic/boost/footer-contact-info': FooterContactInfoTastic,
        'frontastic/boost/footer-payment-methods': FooterPaymentMethodsTastic,
        'frontastic/boost/footer-link-list': FooterLinkListTastic,
        'frontastic/boost/footer-meta-nav': FooterMetaNavTastic,
        'frontastic/boost/footer-social-nav': FooterSocialNavTastic,
        'frontastic/boost/wishlist': WishlistTastic,
    }
})()
