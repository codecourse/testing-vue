import actions from '../actions'
import flushPromises from 'flush-promises'

let mock_get_payload = [
    { id: 1, body: 'One' }
]

jest.mock('axios', () => {
    return {
        get () {
            return Promise.resolve({
                data: {
                    data: mock_get_payload
                }
            })
        }
    }
})

describe('actions', () => {
    it('it can get notifications', async () => {
        let commit = jest.fn()

        actions.getNotifications({ commit })
        await flushPromises()

        expect(commit).toBeCalledWith('SET_NOTIFICATIONS', mock_get_payload)
    })

    it('it can mark a notification as read', async () => {
        let commit = jest.fn()

        let notification = {
            id: 1,
            body: 'One',
            read: false
        }

        actions.markNotificationRead({ commit }, notification)
        await flushPromises()

        expect(commit).toBeCalledWith('SET_NOTIFICATION_READ', notification)
    })
})
