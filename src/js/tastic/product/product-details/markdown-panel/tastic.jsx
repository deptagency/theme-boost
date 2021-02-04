import React from 'react'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import TextPanel from '../../../../patterns/molecules/Panels/TextPanel'
//import TextPanel from 'src/js/patterns/molecules/Panels/TextPanel'

function MarkdownPanel({ data }) {
    return <TextPanel title={data?.title} body={data?.text} />
}
export default tastify({ translate: true })(MarkdownPanel)
