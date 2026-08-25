import React from "react";

interface MessageProps{
    message: string,
    author: string
}

const Message:React.FC<MessageProps> = ({message, author}) =>{
    <p>
        <i>{author}</i>: {message}
    </p>
}

export default Message;