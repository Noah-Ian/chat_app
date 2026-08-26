import React from "react";
import type{ User} from "../types/index"

interface SidebarProps{
    users: User[]
}

const SideBar: React.FC<SidebarProps> = ({users}) =>(
    <aside id="sidebar"  className="sidebar">
        <h2>Users</h2>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </aside>
);

export default SideBar;