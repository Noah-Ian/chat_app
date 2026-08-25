import * as types from '../constants/ActionTypes';
import { addUser, messageReceived, populatedUserList, type ChatActionTypes } from '../actions';
import type { Dispatch } from 'redux';
import type { User } from '../types';

interface SocketIncomingData {
  type: string;
  message?: string;
  author?: string;
  name?: string;
  users?: User[];
}

const setupSocket = (dispatch: Dispatch<ChatActionTypes>, username: string): WebSocket => {
  const socket = new WebSocket('ws://localhost:8989');

  socket.onopen = () => {
    // Notify backend about local client connection
    socket.send(
      JSON.stringify({
        type: types.ADD_USER,
        name: username
      })
    );
  };
socket.onmessage = (event: MessageEvent) => {
    const data: SocketIncomingData = JSON.parse(event.data);
    switch (data.type) {
      case types.ADD_MESSAGE:
        if (data.message && data.author) {
          dispatch(messageReceived(data.message, data.author));
        }
        break;
      case types.ADD_USER:
        if (data.name) {
          dispatch(addUser(data.name));
        }
        break;
      case types.USER_LIST:
        if (data.users) {
          dispatch(populatedUserList(data.users));
        }
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;