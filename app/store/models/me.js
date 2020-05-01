const me = {
  state: {
    id: null,
    picture: null,
    canSendMic: false,
    canSendWebcam: false,
    canShareScreen: false,
    canShareFiles: false,
    audioDevices: null,
    webcamDevices: null,
    webcamInProgress: false,
    audioInProgress: false,
    screenShareInProgress: false,
    displayNameInProgress: false,
    loginEnabled: false,
    raiseHand: false,
    raiseHandInProgress: false,
    loggedIn: false
  },
  reducers: {
    SET_ME: (state, { peerId, loginEnabled }) => {
      return {
        ...state,
        id: peerId,
        loginEnabled
      }
    },
    LOGGED_IN: (state, { flag }) => {
      return { ...state, loggedIn: flag }
    },

    SET_PICTURE: (state, { picture }) => {
      return { ...state, picture }
    },

    SET_MEDIA_CAPABILITIES: (
      state,
      { canSendMic, canSendWebcam, canShareScreen, canShareFiles }
    ) => {
      return {
        ...state,
        canSendMic,
        canSendWebcam,
        canShareScreen,
        canShareFiles
      }
    },

    SET_AUDIO_DEVICES: (state, { devices }) => {
      return { ...state, audioDevices: devices }
    },

    SET_WEBCAM_DEVICES: (state, { devices }) => {
      return { ...state, webcamDevices: devices }
    },
    SET_AUDIO_IN_PROGRESS: (state, { flag }) => {
      return { ...state, audioInProgress: flag }
    },
    SET_WEBCAM_IN_PROGRESS: (state, { flag }) => {
      return { ...state, webcamInProgress: flag }
    },

    SET_SCREEN_SHARE_IN_PROGRESS: (state, { flag }) => {
      return { ...state, screenShareInProgress: flag }
    },
    SET_MY_RAISE_HAND_STATE: (state, { flag }) => {
      return { ...state, raiseHand: flag }
    },
    SET_MY_RAISE_HAND_STATE_IN_PROGRESS: (state, { flag }) => {
      return { ...state, raiseHandInProgress: flag }
    },
    SET_DISPLAY_NAME_IN_PROGRESS: (state, { flag }) => {
      return { ...state, displayNameInProgress: flag }
    }
  },
  effects: dispatch => ({
    setMe ({ peerId, loginEnabled }, rootState) {
      dispatch.me.SET_ME({ peerId, loginEnabled })
    },

    loggedIn ({flag}, rootState) {
      dispatch.me.LOGGED_IN({ flag })
    },

    setPicture ({picture}, rootState) {
      dispatch.me.SET_PICTURE({ picture })
    },

    setMediaCapabilities (
      { canSendMic, canSendWebcam, canShareScreen, canShareFiles },
      rootState
    ) {
      dispatch.me.SET_MEDIA_CAPABILITIES({
        canSendMic,
        canSendWebcam,
        canShareScreen,
        canShareFiles
      })
    },

    setAudioDevices ({devices}, rootState) {
      dispatch.me.SET_AUDIO_DEVICES({ devices })
    },

    setWebcamDevices ({devices}, rootState) {
      dispatch.me.SET_WEBCAM_DEVICES({ devices })
    },

    setMyRaiseHandState ({flag}, rootState) {
      dispatch.me.SET_MY_RAISE_HAND_STATE({ flag })
    },

    setAudioInProgress ({flag}, rootState) {
      dispatch.me.SET_AUDIO_IN_PROGRESS({ flag })
    },

    setWebcamInProgress ({flag}, rootState) {
      dispatch.me.SET_WEBCAM_IN_PROGRESS({ flag })
    },

    setScreenShareInProgress ({flag}, rootState) {
      dispatch.me.SET_SCREEN_SHARE_IN_PROGRESS({ flag })
    },

    setMyRaiseHandStateInProgress ({flag}, rootState) {
      dispatch.me.SET_MY_RAISE_HAND_STATE_IN_PROGRESS({ flag })
    },

    setDisplayNameInProgress ({flag}, rootState) {
      dispatch.me.SET_DISPLAY_NAME_IN_PROGRESS({ flag })
    }
  })
}
export default me
