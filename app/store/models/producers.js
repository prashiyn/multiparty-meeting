const producers = {
  state: {},
  reducers: {
    ADD_PRODUCER: (state, { producer }) => {
      return { ...state, [producer.id]: producer }
    },

    REMOVE_PRODUCER: (state, { producerId }) => {
      const newState = { ...state }
      delete newState[producerId]
      return newState
    },
    SET_PRODUCER_PAUSED: (state, { producerId, originator }) => {
      const producer = state[producerId]
      let newProducer
      if (originator === 'local')
        newProducer = { ...producer, locallyPaused: true }
      else newProducer = { ...producer, remotelyPaused: true }
      return { ...state, [producerId]: newProducer }
    },

    SET_PRODUCER_RESUMED: (state, { producerId, originator }) => {
      const producer = state[producerId]
      let newProducer
      if (originator === 'local')
        newProducer = { ...producer, locallyPaused: false }
      else newProducer = { ...producer, remotelyPaused: false }

      return { ...state, [producerId]: newProducer }
    },

    SET_PRODUCER_TRACK: (state, { producerId, track }) => {
      const producer = state[producerId]
      const newProducer = { ...producer, track }
      return { ...state, [producerId]: newProducer }
    }
  },
  effects: dispatch => ({
    addProducer (producer, rootState) {
      dispatch.producers.ADD_PRODUCER({ producer })
    },

    removeProducer ({ producerId }, rootState) {
      dispatch.producers.REMOVE_PRODUCER({ producerId })
    },

    setProducerPaused ({ producerId, originator }, rootState) {
      dispatch.producers.SET_PRODUCER_PAUSED({ producerId, originator })
    },

    setProducerResumed ({ producerId, originator }, rootState) {
      dispatch.producers.SET_PRODUCER_RESUMED({ producerId, originator })
    },

    setProducerTrack ({ producerId, track }, rootState) {
      dispatch.producers.SET_PRODUCER_TRACK({ producerId, track })
    },

    setProducerScore ({ producerId, score }, rootState) {
      dispatch.producers.SET_PRODUCER_SCORE({ producerId, score })
    }
  })
}
