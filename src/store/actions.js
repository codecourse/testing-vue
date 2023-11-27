import axios from 'axios'

export default {
    async getNotifications ({ commit }) {
        let response = await axios.get('/notifications.json')

        commit('SET_NOTIFICATIONS', response.data.data)
    },

    async markNotificationRead ({ commit }, notification) {
        await axios.get('/notifications.json')

        commit('SET_NOTIFICATION_READ', notification)
    }
}
