import ShowcaseTextTastic from './content/showcase-text/tastic'
import NewsletterBlockTastic from './forms/newsletter-block/tastic'

export default (() => {
    return {
        'frontastic/boost/showcase-text': ShowcaseTextTastic,
        'forms--newsletter-block': NewsletterBlockTastic,
    }
})()
