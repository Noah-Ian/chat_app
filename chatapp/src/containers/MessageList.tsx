import type { RootState } from "../types/index";
import { legacy_connect as connect } from "react-redux";
import MessageListComponent  from "../components/MessageList";


const mapStateToProps = (state: RootState)=>({
    messages: state.messages
})

export const MessageList = connect(mapStateToProps)(MessageListComponent);