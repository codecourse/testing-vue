export default {
    notifications (state) {
        return state.notifications.filter((n) => {
            return n.read === false
        })
    }
}
