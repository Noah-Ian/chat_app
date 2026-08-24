export interface Message {
    id: number;
    message: string;
    author: string;
}

export interface User{
    id: number;
    name: string;
}

export interface RootState{
    messages: Message[];
    users:  User[];
}