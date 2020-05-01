const settings = {
  state: {},
  reducers: {
    CHANGE_WEBCAM: (state, { deviceId }) => {
      return { ...state, selectedWebcam: deviceId }
    },

    CHANGE_AUDIO_DEVICE: (state, { deviceId }) => {
      return { ...state, selectedAudioDevice: deviceId }
    },

    SET_DISPLAY_NAME: (state, { displayName }) => {
      return { ...state, displayName }
    },

    TOGGLE_ADVANCED_MODE: (state, _) => {
      const advancedMode = !state.advancedMode

      return { ...state, advancedMode }
    },

    SET_LAST_N: (state, { lastN }) => {
      return { ...state, lastN }
    },

    TOGGLE_PERMANENT_TOPBAR: (state, _) => {
      const permanentTopBar = !state.permanentTopBar

      return { ...state, permanentTopBar }
    },

    SET_VIDEO_RESOLUTION: (state, { resolution }) => {
      return { ...state, resolution }
    }
  },
  effects: dispatch => ({
    setSelectedAudioDevice ({ deviceId }, rootState) {
      dispatch.settings.CHANGE_AUDIO_DEVICE({ deviceId })
    },

    setSelectedWebcamDevice ({ deviceId }, rootState) {
      dispatch.settings.CHANGE_WEBCAM({ deviceId })
    },

    setVideoResolution ({ resolution }, rootState) {
      dispatch.settings.SET_VIDEO_RESOLUTION({ resolution })
    },

    setDisplayName ({ displayName }, rootState) {
      dispatch.settings.SET_DISPLAY_NAME({ displayName })
    },

    toggleAdvancedMode () {
      dispatch.settings.TOGGLE_ADVANCED_MODE({})
    },

    togglePermanentTopBar () {
      dispatch.settings.TOGGLE_PERMANENT_TOPBAR({})
    },

    setLastN ({ lastN }, rootState) {
      dispatch.settings.SET_LAST_N({ lastN })
    }
  })
}
