const room = {
  state: {
    name: '',
    state: 'new', // new/connecting/connected/disconnected/closed,
    locked: false,
    inLobby: false,
    signInRequired: false,
    accessCode: '', // access code to the room if locked and joinByAccessCode == true
    joinByAccessCode: true, // if true: accessCode is a possibility to open the room
    activeSpeakerId: null,
    torrentSupport: false,
    showSettings: false,
    fullScreenConsumer: null, // ConsumerID
    windowConsumer: null, // ConsumerID
    toolbarsVisible: true,
    mode: 'democratic',
    selectedPeerId: null,
    spotlights: [],
    settingsOpen: false,
    lockDialogOpen: false,
    joined: false
  },
  reducers: {
    SET_ROOM_NAME: (state, { name }) => {
      return { ...state, name }
    },

    SET_ROOM_STATE: (state, { roomState }) => {
      if (roomState === 'connected') return { ...state, state: roomState }
      else return { ...state, state: roomState, activeSpeakerId: null }
    },

    SET_ROOM_LOCKED: (state, _) => {
      return { ...state, locked: true }
    },

    SET_ROOM_UNLOCKED: (state, _) => {
      return { ...state, locked: false }
    },

    SET_IN_LOBBY: (state, { inLobby }) => {
      return { ...state, inLobby }
    },

    SET_SIGN_IN_REQUIRED: (state, { signInRequired }) => {
      return { ...state, signInRequired }
    },
    SET_ACCESS_CODE: (state, { accessCode }) => {
      return { ...state, accessCode }
    },
    SET_JOIN_BY_ACCESS_CODE: (state, { joinByAccessCode }) => {
      return { ...state, joinByAccessCode }
    },
    SET_LOCK_DIALOG_OPEN: (state, { lockDialogOpen }) => {
      return { ...state, lockDialogOpen }
    },
    SET_SETTINGS_OPEN: (state, { settingsOpen }) => {
      return { ...state, settingsOpen }
    },
    SET_ROOM_ACTIVE_SPEAKER: (state, { peerId }) => {
      return { ...state, activeSpeakerId: peerId }
    },

    FILE_SHARING_SUPPORTED: (state, { supported }) => {
      return { ...state, torrentSupport: supported }
    },
    TOGGLE_JOINED: (state, _) => {
      const joined = !state.joined
      return { ...state, joined }
    },

    TOGGLE_FULLSCREEN_CONSUMER: (state, { consumerId }) => {
      const currentConsumer = state.fullScreenConsumer
      return {
        ...state,
        fullScreenConsumer: currentConsumer ? null : consumerId
      }
    },

    TOGGLE_WINDOW_CONSUMER: (state, { consumerId }) => {
      const currentConsumer = state.windowConsumer
      if (currentConsumer === consumerId) {
        return { ...state, windowConsumer: null }
      } else {
        return { ...state, windowConsumer: consumerId }
      }
    },
    SET_TOOLBARS_VISIBLE: (state, { toolbarsVisible }) => {
      return { ...state, toolbarsVisible }
    },
    SET_DISPLAY_MODE: (state, { mode }) => {
      return { ...state, mode }
    },
    SET_SELECTED_PEER: (state, { selectedPeerId }) => {
      return {
        ...state,

        selectedPeerId:
          state.selectedPeerId === selectedPeerId ? null : selectedPeerId
      }
    },

    SET_SPOTLIGHTS: (state, { spotlights }) => {
      return { ...state, spotlights }
    }
  },
  effects: dispatch => ({
    setRoomName ({ name }, rootState) {
      dispatch.room.SET_ROOM_NAME({ name })
    },

    setRoomState (roomState, rootState) {
      dispatch.room.SET_ROOM_STATE({ state: roomState })
    },

    setRoomActiveSpeaker ({ peerId }, rootState) {
      dispatch.room.SET_ROOM_ACTIVE_SPEAKER({ peerId })
    },

    setRoomLocked (_, rootState) {
      dispatch.room.SET_ROOM_LOCKED({})
    },

    setRoomUnLocked (_, rootState) {
      dispatch.room.SET_ROOM_UNLOCKED({})
    },

    setInLobby ({ inLobby }) {
      dispatch.room.SET_IN_LOBBY({ inLobby })
    },

    setSignInRequired ({ signInRequired }) {
      dispatch.room.SET_SIGN_IN_REQUIRED({ signInRequired })
    },

    setAccessCode ({ accessCode }) {
      dispatch.room.SET_ACCESS_CODE({ accessCode })
    },

    setJoinByAccessCode ({ joinByAccessCode }) {
      dispatch.room.SET_JOIN_BY_ACCESS_CODE({ joinByAccessCode })
    },

    setSettingsOpen ({ settingsOpen }) {
      dispatch.room.SET_SETTINGS_OPEN({ settingsOpen })
    },

    setLockDialogOpen ({ lockDialogOpen }) {
      dispatch.room.SET_LOCK_DIALOG_OPEN({ lockDialogOpen })
    },

    setFileSharingSupported ({ supported }) {
      dispatch.room.FILE_SHARING_SUPPORTED({ supported })
    },

    toggleConsumerWindow ({ consumerId }) {
      dispatch.room.TOGGLE_WINDOW_CONSUMER({ consumerId })
    },

    setToolbarsVisible ({ toolbarsVisible }) {
      dispatch.room.SET_TOOLBARS_VISIBLE({ toolbarsVisible })
    },

    setDisplayMode ({ mode }) {
      dispatch.room.SET_DISPLAY_MODE({ mode })
    },

    setSelectedPeer ({ selectedPeerId }) {
      dispatch.room.SET_SELECTED_PEER({ selectedPeerId })
    },

    setSpotlights ({ spotlights }) {
      dispatch.room.SET_SPOTLIGHTS({ spotlights })
    },

    toggleJoined (_, roomState) {
      dispatch.room.TOGGLE_JOINED({})
    },

    toggleConsumerFullscreen ({ consumerId }) {
      dispatch.room.TOGGLE_FULLSCREEN_CONSUMER({ consumerId })
    }
  })
}
export default room
