import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'

import { Tastic } from '@frontastic/catwalk/src/js/types/frontend'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import Tile from '../../../patterns/molecules/Tile'

export interface TileTasticData {
     image?: any;
     topic: string;
     title: string;
     verticalPosition: string;
     horizontalPosition: string;
     buttonLabel: string;
     reference: any;
     isClickable: boolean;
}

export interface Props {
    tastic: Tastic,
    data: TileTasticData,
}

export const TileTastic: FunctionComponent<Props> = ({ data, tastic }: Props) => {
    return (
        <Tile
            image={data.image}
            topic={data.topic}
            title={data.title}
            verticalPosition={data.verticalPosition}
            horizontalPosition={data.horizontalPosition}
            buttonLabel={data.buttonLabel}
            reference={data.reference}
            isClickable={data.isClickable}
        />
    )
}

export default tastify({ translate: true })(TileTastic)
