import './App.css';
import React from 'react';
import UserList from './component/UserList';
import StoreList from './component/StoreList';

function App() {
  return (
    <div className="App">
      
      <UserList />
      <br />
      <hr />
      <StoreList />
    
    </div>
  );
}

export default App;
