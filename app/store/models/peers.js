const peers = {
  state: {},
  reducers: {
    ADD_PEER: (state, { peer }) => {
      return peer
    },
    SET_PEER_DISPLAY_NAME: (state, { displayName }) => {
      return { ...state, displayName }
    },
    SET_PEER_VIDEO_IN_PROGRESS: (state, { flag }) => {
      return { ...state, peerVideoInProgress: flag }
    },
    SET_PEER_AUDIO_IN_PROGRESS: (state, { flag }) => {
      return { ...state, peerAudioInProgress: flag }
    },
    SET_PEER_SCREEN_IN_PROGRESS: (state, { flag }) => {
      return { ...state, peerScreenInProgress: flag }
    },
    SET_PEER_RAISE_HAND_STATE: (state, { raiseHandState }) => {
      return { ...state, raiseHandState: raiseHandState }
    },
    ADD_CONSUMER: (state, { consumer }) => {
      const consumers = [...state.consumers, consumer.id]

      return { ...state, consumers }
    },
    REMOVE_CONSUMER: (state, { consumerId }) => {
      const consumers = state.consumers.filter(
        consumer => consumer !== consumerId
      )
      return { ...state, consumers }
    },
    SET_PEER_PICTURE: (state, { picture }) => {
      return { ...state, picture }
    }
  },
  effects: dispatch => ({
    addPeer (peer) {
      dispatch.peers.ADD_PEER({ peer })
    },

    removePeer (peerId) {
      dispatch.peers.REMOVE_PEER({ peerId })
    },

    setPeerDisplayName ({ displayName, peerId }) {
      dispatch.peers.SET_PEER_DISPLAY_NAME({ displayName, peerId })
    },

    setPeerVideoInProgress ({ peerId, flag }) {
      dispatch.peers.SET_PEER_VIDEO_IN_PROGRESS({ peerId, flag })
    },

    setPeerAudioInProgress ({ peerId, flag }) {
      dispatch.peers.SET_PEER_AUDIO_IN_PROGRESS({ peerId, flag })
    },

    setPeerScreenInProgress ({ peerId, flag }) {
      dispatch.peers.SET_PEER_SCREEN_IN_PROGRESS({ peerId, flag })
    },

    setPeerRaiseHandState ({ peerId, raiseHandState }) {
      dispatch.peers.SET_PEER_RAISE_HAND_STATE({ peerId, raiseHandState })
    },

    setPeerPicture ({ peerId, picture }) {
      dispatch.peers.SET_PEER_PICTURE({ peerId, picture })
    }
  })
}
export default peers
