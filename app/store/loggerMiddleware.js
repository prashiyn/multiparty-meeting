import { createLogger } from 'redux-logger'

const loggerMiddleWare = () => {
  let reduxLogger
  if (
    process.env.REACT_APP_DEBUG === '*' ||
    process.env.NODE_ENV !== 'production'
  ) {
    reduxLogger = createLogger({
      // filter VOLUME level actions from log
      predicate: (getState, action) => !(action.type === 'SET_PEER_VOLUME'),
      duration: true,
      timestamp: false,
      level: 'log',
      logErrors: true
    })
  } else if (process.env.NODE_ENV === 'production') {
    // FIXME: Send these errors to server
    reduxLogger = createLogger({
      // filter VOLUME level actions from log
      predicate: (getState, action) => !(action.type === 'SET_PEER_VOLUME'),
      duration: true,
      timestamp: false,
      level: 'log',
      logErrors: true
    })
  }
  return reduxLogger
}
export default loggerMiddleWare
