import ShowcaseTextTastic from './content/showcase-text/tastic'
import NewsletterBlockTastic from './forms/newsletter-block/tastic'
import TileTastic from './content/tile/tastic'
import MainMenuTastic from './header/main-menu/tastic'
import FeatureServiceTastic from './content/feature-service/tastic'
import Footer from './footer/tastic'

export default (() => {
    return {
        'content--showcase-text': ShowcaseTextTastic,
        'forms--newsletter-block': NewsletterBlockTastic,
        'content--tile': TileTastic,
        'header--main-menu': MainMenuTastic,
        'content--feature-service': FeatureServiceTastic,
        'footer': Footer,
    }
})()
