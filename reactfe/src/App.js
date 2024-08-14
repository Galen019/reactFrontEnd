import './App.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateName } from './redux/actions/actions';
import { useSelector } from 'react-redux';

function App() {
  const [newName, setName] = useState('');
  const dispatch = useDispatch();
  const storeValue = useSelector(state => state.userName.name); // Accessing the nested name property

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(updateName(newName));
  };

  return (
    <div className="App">
      <div className="App-header">
        <input type="text" placeholder="Enter your name" value={newName} onChange={handleNameChange} />
        <button onClick={handleSubmit}>Submit</button>
        <h1>Welcome, {storeValue}!</h1>
      </div>
    </div>
  );
}

export default App;
