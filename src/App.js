import './App.css';
import NavbarDiary from './components/Navbar/NavbarDiary';
import CustomCalendar from './components/Calendar/Calendar';
import BottomBar from './components/BottomBar/Bottombar'
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavbarDiary />
      <CustomCalendar />
      <BottomBar />
    </div>
  );
}

export default App;
