import { init } from '@rematch/core'
import selectPlugin from '@rematch/select'
import createLoadingPlugin from '@rematch/loading'
import immerPlugin from '@rematch/immer'
import createRematchPersist, { getPersistor } from '@rematch/persist'
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import models from './models'
import loggerMiddleware from './loggerMiddleware'
const createStore = (initialState) => {
  const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['settings']
  }
  const store = init({
    models,
    redux: {},
    middlewares: [loggerMiddleware],
    plugins: [
      selectPlugin(),
      createLoadingPlugin({}),
      immerPlugin(),
      createRematchPersist(persistConfig)
    ]
  })
  const persistor = getPersistor()
  return {
    store,
    persistor
  }
}
export default createStore
