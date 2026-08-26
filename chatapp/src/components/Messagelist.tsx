import React from "react";
import type {Message as MessageType} from "../types/index";
import Message from "./Message";

interface MessageListProps{
    messages: MessageType[];
}

const MessageList: React.FC<MessageListProps> = ({messages})=>(
    <section id="messages-List">
        <h2>Messages</h2>
        <ul>
            {messages.map((msg)=>(
                <Message key={msg.id} message={msg.message} author={msg.author}/>
            ))}
        </ul>
    </section>
)

export default MessageList;