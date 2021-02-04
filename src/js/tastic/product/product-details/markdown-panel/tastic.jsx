import React from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import TextPanel from '../../../../patterns/molecules/Panels/TextPanel'

function MarkdownPanel ({ data }) {
    return <TextPanel title={data?.title} body={data?.text} />
}
MarkdownPanel.propTypes = {
    data: PropTypes.object,
}
export default tastify({ translate: true })(MarkdownPanel)
