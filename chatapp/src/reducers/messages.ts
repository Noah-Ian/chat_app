import * as types from '../constants/ActionTypes';
import type {ChatActionTypes} from '../actions/index';
import type {Message} from '../types/index';

const messages = (state: Message[] = [], action: ChatActionTypes): Message[] =>{
    switch(action.type){
        case types.ADD_MESSAGE:
        case types.MESSAGE_RECEIVED:
            return state.concat([{
                message: action.message,
                author: action.author,
                id: action.id
        }]);
        default:
            return state;
    }
};

export default messages;