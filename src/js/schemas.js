import { DefaultSchemas } from 'frontastic-common'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

const schemes = {
    node: ComponentInjector.return(
        'NodeConfigurationSchema',
        DefaultSchemas.NodeConfigurationSchema
    ),
    cell: ComponentInjector.return(
        'CellConfigurationSchema',
        DefaultSchemas.CellConfigurationSchema
    ),
}

export default schemes
