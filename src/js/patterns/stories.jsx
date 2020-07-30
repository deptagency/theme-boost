import React from 'react'

import Grid from '@frontastic/catwalk/src/js/patterns/atoms/grid/grid'
import Cell from '@frontastic/catwalk/src/js/patterns/atoms/grid/cell'

export default {
    title: 'Grid',
}

export const GridExample1 = () => {
    return (
        <>
            <p>
                <strong>Note:</strong> Grid components are to be found in Catwalk.{' '}
            </p>
            <div className='flex justify-center'>
                <div style={{ width: 1280 }}>
                    <Grid debug>
                        <Cell size={6}>left</Cell>
                        <Cell size={6}>right</Cell>
                        <Cell size={12}>Full</Cell>
                        <Cell size={3}>3</Cell>
                        <Cell size={3}>3</Cell>
                        <Cell size={3}>3</Cell>
                        <Cell size={3}>3</Cell>
                        <Cell fullWidth>
                            <p className='h-24'>Hero</p>
                        </Cell>
                        <Cell size={2}>2</Cell>
                        <Cell size={2}>2</Cell>
                        <Cell size={2}>2</Cell>
                        <Cell size={2}>2</Cell>
                        <Cell size={2}>2</Cell>
                        <Cell size={2}>2</Cell>
                    </Grid>
                </div>
            </div>
        </>
    )
}
