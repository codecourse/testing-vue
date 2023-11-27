import getters from '../getters'

describe('getters', () => {
    it('only returns notifications that are unread', () => {
        let state = {
            notifications: [
                { id: 1, body: 'One', read: false },
                { id: 2, body: 'Two', read: true }
            ]
        }

        expect(getters.notifications(state).length).toEqual(1)
    })
})
