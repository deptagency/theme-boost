import ShowcaseTextTastic from './content/showcase-text/tastic'
import FeatureServiceTastic from './content/feature-service/tastic'

export default (() => {
    return {
        'frontastic/boost/showcase-text': ShowcaseTextTastic,
        'content--feature-service': FeatureServiceTastic,
    }
})()
