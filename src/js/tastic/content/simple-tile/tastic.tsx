import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'

import { Tastic } from '@frontastic/catwalk/src/js/types/frontend'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import SimpleTile, { TileTasticData } from '../../../patterns/molecules/SimpleTile'

export interface Props {
    tastic: Tastic
    data: TileTasticData
}

export const TileTastic: FunctionComponent<Props> = ({ data, tastic }: Props) => {
    return <SimpleTile {...data} />
}

export default tastify({ translate: true })(TileTastic)
