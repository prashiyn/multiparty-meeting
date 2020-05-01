const lobbyPeers = {
  state: {},
  reducers: {
    ADD_LOBBY_PEER: (state, { peerId }) => {
      return { id: peerId }
    },
    SET_LOBBY_PEER_DISPLAY_NAME: (state, { displayName }) => {
      return { ...state, displayName }
    },
    SET_LOBBY_PEER_PICTURE: (state, { picture }) => {
      return { ...state, picture }
    },
    SET_LOBBY_PEER_PROMOTION_IN_PROGRESS: (state, { flag }) => {
      return { ...state, promotionInProgress: flag }
    }
  },
  effects: dispatch => ({
    addLobbyPeer ({ peerId }, rootState) {
      dispatch.lobbyPeer.ADD_LOBBY_PEER({ peerId })
    },
    removeLobbyPeer ({ peerId }, rootState) {
      dispatch.lobbyPeer.REMOVE_LOBBY_PEER({ peerId })
    },
    setLobbyPeerDisplayName ({ displayName, peerId }, rootState) {
      dispatch.lobbyPeer.SET_LOBBY_PEER_DISPLAY_NAME({ displayName, peerId })
    },
    setLobbyPeerPicture ({ picture, peerId }, rootState) {
      dispatch.lobbyPeer.SET_LOBBY_PEER_PICTURE({ picture, peerId })
    },
    setLobbyPeerPromotionInProgress ({ peerId, flag }, rootState) {
      dispatch.lobbyPeer.SET_LOBBY_PEER_PROMOTION_IN_PROGRESS({ peerId, flag })
    }
  })
}
export default lobbyPeers
