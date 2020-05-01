const files = {
  state: {},
  reducers: {
    ADD_FILE: (state, { peerId, magnetUri }) => {
      const newFile = {
        active: false,
        progress: 0,
        files: null,
        peerId: peerId,
        magnetUri: magnetUri
      }
      return { ...state, [magnetUri]: newFile }
    },
    ADD_FILE_HISTORY: (state, { fileHistory }) => {
      const newFileHistory = {}
      // eslint-disable-next-line
      fileHistory.forEach(file => {
        const newFile = {
          active: false,
          progress: 0,
          files: null,
          ...file
        }
        newFileHistory[file.magnetUri] = newFile
      })
      return { ...state, ...newFileHistory }
    },
    SET_FILE_ACTIVE: (state, { magnetUri }) => {
      const file = state[magnetUri]

      const newFile = { ...file, active: true }

      return { ...state, [magnetUri]: newFile }
    },

    SET_FILE_INACTIVE: (state, { magnetUri }) => {
      const file = state[magnetUri]

      const newFile = { ...file, active: false }

      return { ...state, [magnetUri]: newFile }
    },

    SET_FILE_PROGRESS: (state, { magnetUri, progress }) => {
      const file = state[magnetUri]

      const newFile = { ...file, progress: progress }

      return { ...state, [magnetUri]: newFile }
    },

    SET_FILE_DONE: (state, { magnetUri, sharedFiles }) => {
      const file = state[magnetUri]

      const newFile = {
        ...file,
        files: sharedFiles,
        progress: 1,
        active: false,
        timeout: false
      }

      return { ...state, [magnetUri]: newFile }
    }
  },
  effects: dispatch => ({
    addFile ({ peerId, magnetUri }, rootState) {
      dispatch.files.ADD_FILE({ peerId, magnetUri })
    },

    addFileHistory ({ fileHistory }, rootState) {
      dispatch.files.ADD_FILE_HISTORY({ fileHistory })
    },

    setFileActive ({ magnetUri }, rootState) {
      dispatch.files.SET_FILE_ACTIVE({ magnetUri })
    },

    setFileInActive ({ magnetUri }, rootState) {
      dispatch.files.SET_FILE_INACTIVE({ magnetUri })
    },

    setFileProgress ({ magnetUri, progress }, rootState) {
      dispatch.files.SET_FILE_PROGRESS({ magnetUri, progress })
    },
    setFileDone ({ magnetUri, sharedFiles }, rootState) {
      dispatch.files.SET_FILE_DONE({ magnetUri, sharedFiles })
    }
  })
}

export default files
