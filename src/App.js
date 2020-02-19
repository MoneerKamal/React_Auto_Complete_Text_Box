import React from 'react';
import logo from './logo.svg';
import './App.css';
import './AutoCompleteText';
import AutoCompleteText from './AutoCompleteText';
import countries from './countries';

function App() {
  return (
    <div className="App">
     <div className='AutoCompelte_container'>
     <AutoCompleteText items={countries}  />
     </div>
      
    </div>
  );
}

export default App;
