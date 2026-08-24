import { legacy_connect as connect } from 'react-redux';
import AddMessageComponent from '../components/Addmessage';
import type{ ChatActionTypes } from '../actions';
import { addMessage } from '../actions';
import type { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch<ChatActionTypes>) => ({
  dispatch: (message: string, author: string) => {
    dispatch(addMessage(message, author));
  }
});

export const AddMessage = connect(null, mapDispatchToProps)(AddMessageComponent);