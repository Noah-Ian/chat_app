import {combineReducers} from 'redux';
import messages from './messages';
import user from './users';
import type {RootState} from '../types/index';

const chat = combineReducers<RootState>({
    messages,
    user
});

export default chat;