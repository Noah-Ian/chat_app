import React from 'react';
import './App.css';
import { Sidebar } from './containers/SideBar';
import { MessageList } from './containers/MessageList';
import { AddMessage } from './containers/Addmessage';

const App: React.FC = () => (
  <div id="container">
    <Sidebar />
    <section id="main">
      <MessageList />
      <AddMessage />
    </section>
  </div>
);

export default App;