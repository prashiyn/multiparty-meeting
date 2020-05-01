const consumers = {
  state: {},
  reducers: {
    ADD_CONSUMER: (state, { consumer }) => {
      return { ...state, [consumer.id]: consumer }
    },
    REMOVE_CONSUMER: (state, { consumerId }) => {
      delete state[consumerId]
      return state
    },
    SET_CONSUMER_PAUSED: (state, { consumerId, originator }) => {
      const consumer = state[consumerId]
      let newConsumer
      if (originator === 'local') {
        newConsumer = { ...consumer, locallyPaused: true }
      } else {
        newConsumer = { ...consumer, remotelyPaused: true }
      }
      return { ...state, [consumerId]: newConsumer }
    },
    SET_CONSUMER_RESUMED: (state, { consumerId, originator }) => {
      const consumer = state[consumerId]
      let newConsumer
      if (originator === 'local') {
        newConsumer = { ...consumer, locallyPaused: false }
      } else {
        newConsumer = { ...consumer, remotelyPaused: false }
      }
      return { ...state, [consumerId]: newConsumer }
    },
    SET_CONSUMER_CURRENT_LAYERS: (
      state,
      { consumerId, spatialLayer, temporalLayer }
    ) => {
      const consumer = state[consumerId]
      const newConsumer = {
        ...consumer,
        currentSpatialLayer: spatialLayer,
        currentTemporalLayer: temporalLayer
      }

      return { ...state, [consumerId]: newConsumer }
    },
    SET_CONSUMER_PREFERRED_LAYERS: (
      state,
      { consumerId, spatialLayer, temporalLayer }
    ) => {
      const consumer = state[consumerId]
      const newConsumer = {
        ...consumer,
        preferredSpatialLayer: spatialLayer,
        preferredTemporalLayer: temporalLayer
      }

      return { ...state, [consumerId]: newConsumer }
    },
    SET_CONSUMER_PRIORITY: (state, { consumerId, priority }) => {
      const consumer = state[consumerId]
      const newConsumer = { ...consumer, priority }
      return { ...state, [consumerId]: newConsumer }
    },
    SET_CONSUMER_TRACK: (state, { consumerId, track }) => {
      const consumer = state[consumerId]
      const newConsumer = { ...consumer, track }

      return { ...state, [consumerId]: newConsumer }
    },
    SET_CONSUMER_SCORE: (state, { consumerId, score }) => {
      const consumer = state[consumerId]

      if (!consumer) return state

      const newConsumer = { ...consumer, score }

      return { ...state, [consumerId]: newConsumer }
    }
  },
  effects: (dispatch) => ({
    addConsumer ({ consumer, peerId }, rootState) {
      dispatch.consumers.ADD_CONSUMER({ consumer, peerId })
    },
    removeConsumer ({ consumerId, peerId }, rootState) {
      dispatch.consumers.REMOVE_CONSUMER({ consumerId, peerId })
    },

    setConsumerPaused ({ consumerId, originator }, rootState) {
      dispatch.consumers.SET_CONSUMER_PAUSED({ consumerId, originator })
    },
    setConsumerResumed ({ consumerId, originator }, rootState) {
      dispatch.consumers.SET_CONSUMER_RESUMED({ consumerId, originator })
    },

    setConsumerCurrentLayers ({ consumerId, spatialLayer, temporalLayer }, rootState) {
      dispatch.consumers.SET_CONSUMER_CURRENT_LAYERS({
        consumerId,
        spatialLayer,
        temporalLayer
      })
    },
    setConsumerPreferredLayers ({ consumerId, spatialLayer, temporalLayer }, rootState) {
      dispatch.consumers.SET_CONSUMER_PREFERRED_LAYERS({
        consumerId,
        spatialLayer,
        temporalLayer
      })
    },
    setConsumerPriority ({ consumerId, priority }, rootState) {
      dispatch.SET_CONSUMER_PRIORITY({ consumerId, priority })
    },
    setConsumerTrack ({ consumerId, track }, rootState) {
      dispatch.SET_CONSUMER_TRACK({ consumerId, track })
    },

    setConsumerScore ({ consumerId, score }, rootState) {
      dispatch.SET_CONSUMER_SCORE({ consumerId, score })
    }
  })
}

export default consumers
