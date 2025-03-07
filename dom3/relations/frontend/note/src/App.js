import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Login, Register } from './componets';
import Notes from './componets/Notes';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/register' element={<Register/> }/>
      <Route path='/login' element={<Login/> }/>
      <Route path='/notes' element={<Notes/> }/>


    </Routes>
    </BrowserRouter>
  );
}


