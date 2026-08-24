import * as types from '../constants/ActionTypes';
import type {ChatActionTypes} from '../actions/index';
import type {User} from '../types/index';

const users = (state: User[ ] = [], action: ChatActionTypes): User[] =>{
    switch(action.type){
        case types.ADD_USER:
             return state.concat([{
                name: action.name,
                id: action.id
            }]);
        case types.USER_LIST:
            return action.users;
           
        default:
            return state;

    }
};

export default users;