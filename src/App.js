import './App.css';
import NavbarDiary from './components/Navbar/NavbarDiary';
import CustomCalendar from './components/Calendar/Calendar';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavbarDiary />
      <CustomCalendar />
    </div>
  );
}

export default App;
