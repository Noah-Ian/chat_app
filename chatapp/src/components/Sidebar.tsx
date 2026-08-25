import React from "react";
import type{ User} from "../types/index"

interface SidebarProps{
    users: User[]
}

const SideBar: React.FC<SidebarProps> = ({users}) =>(
    <aside id="sidebar"  className="sidebar">
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </aside>
);

export default SideBar;