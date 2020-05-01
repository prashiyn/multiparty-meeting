const notifications = {
  state: {},
  reducers: {
    ADD_NOTIFICATION: (state, { notification }) => {
      return [...state, notification]
    },
    REMOVE_NOTIFICATION: (state, { notificationId }) => {
      return state.filter(notification => notification.id !== notificationId)
    },
    REMOVE_ALL_NOTIFICATIONS: state => {
      return []
    }
  },
  effects: dispatch => ({
    addNotification ({ notification }, rootState) {
      dispatch.notifications.ADD_NOTIFICATION({ notification })
    },
    removeNotification ({ notification }, rootState) {
      dispatch.notifications.REMOVE_NOTIFICATION({ notification })
    },
    removeAllNotifications (ra, rootState) {
      dispatch.notifications.REMOVE_ALL_NOTIFICATIONS({})
    }
  })
}
export default notifications
