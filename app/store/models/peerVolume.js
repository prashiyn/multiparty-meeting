const peerVolume = {
  state: {},
  reducers: {
    SET_ME: (state, { peerId }) => {
      return { ...state, [peerId]: 0 }
    },
    ADD_PEER: (state, { peer }) => {
      return { ...state, [peer.id]: 0 }
    },
    REMOVE_PEER: (state, { peerId }) => {
      const newState = { ...state }
      delete newState[peerId]
      return newState
    },
    SET_PEER_VOLUME: (state, { peerId, volume }) => {
      return { ...state, [peerId]: volume }
    }
  },
  effects: dispatch => ({
    setPeerVolume (peerId, volume) {
      dispatch.peerVolume.SET_PEER_VOLUME({ peerId, volume })
    }
  })
}
