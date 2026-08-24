import React from "react";

interface AddMessageProps {
    dispatch: (message: string, author: string) => void;
}

const AddMessage: React.FC<AddMessageProps> = ({dispatch}) => {
    let input: HTMLInputElement | null = null;

    return (
        <section id="new-message">

            <input
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if(e.key === 'Enter' && input && input.value.trim() !== ''){
                    dispatch(input.value, 'Me');
                    input.value = '';
                }
            }}
            type = "text"
            ref={node => {
                input = node;
            }}
            placeholder="Type a message and hit ENTER"
            />

        </section>

    )
};

export default AddMessage;