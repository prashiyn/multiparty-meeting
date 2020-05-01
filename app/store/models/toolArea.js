const toolArea = {
  state: {},
  reducers: {
    TOGGLE_TOOL_AREA: (state, _) => {
      const toolAreaOpen = !state.toolAreaOpen
      const unreadMessages =
        toolAreaOpen && state.currentToolTab === 'chat'
          ? 0
          : state.unreadMessages
      const unreadFiles =
        toolAreaOpen && state.currentToolTab === 'files' ? 0 : state.unreadFiles

      return { ...state, toolAreaOpen, unreadMessages, unreadFiles }
    },

    OPEN_TOOL_AREA: (state, _) => {
      const toolAreaOpen = true
      const unreadMessages =
        state.currentToolTab === 'chat' ? 0 : state.unreadMessages
      const unreadFiles =
        state.currentToolTab === 'files' ? 0 : state.unreadFiles

      return { ...state, toolAreaOpen, unreadMessages, unreadFiles }
    },

    CLOSE_TOOL_AREA: (state, _) => {
      const toolAreaOpen = false

      return { ...state, toolAreaOpen }
    },

    SET_TOOL_TAB: (state, { toolTab }) => {
      const unreadMessages = toolTab === 'chat' ? 0 : state.unreadMessages
      const unreadFiles = toolTab === 'files' ? 0 : state.unreadFiles

      return { ...state, currentToolTab: toolTab, unreadMessages, unreadFiles }
    },

    ADD_NEW_RESPONSE_MESSAGE: (state, _) => {
      if (state.toolAreaOpen && state.currentToolTab === 'chat') {
        return state
      }

      return { ...state, unreadMessages: state.unreadMessages + 1 }
    },

    ADD_FILE: (state, _) => {
      if (state.toolAreaOpen && state.currentToolTab === 'files') {
        return state
      }
      return { ...state, unreadFiles: state.unreadFiles + 1 }
    }
  },
  effects: dispatch => ({
    toggleToolArea () {
      dispatch.toolarea.TOGGLE_TOOL_AREA({})
    },

    openToolArea () {
      dispatch.toolarea.OPEN_TOOL_AREA({})
    },

    closeToolArea () {
      dispatch.toolarea.CLOSE_TOOL_AREA({})
    },

    setToolTab ({ toolTab }, rootState) {
      dispatch.toolarea.SET_TOOL_TAB({ toolTab })
    }
  })
}
export default toolArea
