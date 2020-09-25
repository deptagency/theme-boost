import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'

import Notification from './patterns/molecules/Notifications/Default2'

export default (() => {
    ComponentInjector.set('AtomsNotification', Notification)
})()
