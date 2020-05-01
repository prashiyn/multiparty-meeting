import { createNewMessage } from './helper'
const chat = {
  state: [],
  reducers: {
    ADD_NEW_USER_MESSAGE: (state, { text }) => {
      const message = createNewMessage(text, 'client', 'Me', undefined);
      return [...state, message]
    },
    ADD_NEW_RESPONSE_MESSAGE: (state, { message }) => {
      return [...state, message]
    },
    ADD_CHAT_HISTORY: (state, { chatHistory }) => {
      return [...state, ...chatHistory]
    }
  },
  effects: (dispatch) => ({
    addUserMessage ({ text }, rootState) {
      dispatch.chat.ADD_NEW_USER_MESSAGE({ text })
    },
    addResponseMessage ({ message }, rootState) {
      dispatch.chat.ADD_NEW_RESPONSE_MESSAGE({ message })
    },
    addChatHistory ({ chatHistory }, rootState) {
      dispatch.chat.ADD_CHAT_HISTORY({ chatHistory })
    }
  })
}
export default chat
