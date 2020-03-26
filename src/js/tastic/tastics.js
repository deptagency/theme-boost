import ShowcaseTextTastic from './content/showcase-text/tastic'
import NewsletterBlockTastic from './forms/newsletter-block/tastic'
import FeatureServiceTastic from './content/feature-service/tastic'

export default (() => {
    return {
        'frontastic/boost/showcase-text': ShowcaseTextTastic,
        'content--feature-service': FeatureServiceTastic,
        'forms--newsletter-block': NewsletterBlockTastic,
    }
})()
