import * as types from '../constants/ActionTypes';
import type {User} from '../types/index';

let nextMessageId = 0;
let nextUserId = 0;

export interface AddMessageAction{
    type: typeof types.ADD_MESSAGE;
    id: number;
    message: string;
    author: string
}

export interface AddUserAction{
    type: typeof types.ADD_USER;
    id: number;
    name: string;
}

export interface MessageReceivedAction{
    type: typeof types.MESSAGE_RECEIVED;
    id: number;
    message: string;
    author: string;
}

export interface PopulatedUserListAction{
    type: typeof types.USER_LIST;
    users: User[];
}

//Chat Actions

export type ChatActionTypes =
    | AddMessageAction
    | AddUserAction
    | MessageReceivedAction
    | PopulatedUserListAction;

//Action Creators

export const addMessage = (message: string, author: string):AddMessageAction =>({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
});

export const addUser =(name: string): AddUserAction =>({
    type: types.ADD_USER,
    id: nextUserId++,
    name
});

export const messageReceived = (message: string, author: string): MessageReceivedAction =>({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
});

export const populatedUserList = (users: User[]): PopulatedUserListAction =>({
    type: types.USER_LIST,
    users
});