import {takeEvery} from 'redux-saga/effects';
import type {AddMessageAction} from '../actions/index';
import * as types from '../constants/ActionTypes';

interface SagaParams {
  socket: WebSocket;
  username: string;
}

const handleNewMessage = function* handleNewMessage(params: SagaParams) {
  // Listen for ADD_MESSAGE actions dispatched inside Redux
  yield takeEvery(types.ADD_MESSAGE, (action: AddMessageAction) => {
    // Inject current author name before transmitting over network
    action.author = params.username;
    params.socket.send(JSON.stringify(action));
  });
};

export default handleNewMessage;