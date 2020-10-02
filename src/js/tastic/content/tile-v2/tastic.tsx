import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'

import { Tastic } from '@frontastic/catwalk/src/js/types/frontend'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import Tile, { TileTasticData } from '../../../patterns/molecules/Tile-v2'

export interface Props {
    tastic: Tastic
    data: TileTasticData
}

export const TileTastic: FunctionComponent<Props> = ({ data, tastic }: Props) => {
    console.log('TILE LOGGIN', data, tastic)
    return <Tile {...data} />
}

export default tastify({ translate: true })(TileTastic)
