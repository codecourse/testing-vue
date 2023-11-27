import mutations from '../mutations'

describe('mutations', () => {
    it('can set notifications', () => {
        let state = {
            notifications: []
        }

        mutations.SET_NOTIFICATIONS(state, [{ id: 1 }])

        expect(state.notifications.length).toEqual(1)
    })

    it('can set notifications', () => {
        let notification = {
            id: 1,
            body: 'One',
            read: false
        }

        let state = {
            notifications: [
                notification
            ]
        }

        mutations.SET_NOTIFICATION_READ(state, notification)

        expect(notification.read).toBe(true)
    })
})
