import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import CompShowTodos from './pages/ShowTodos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CompShowCarpets from './pages/ShowCarpets';
import CompCreateCarpet from './components/CreateCarpet';
import CompCreateTodo from './components/CreateTodo';
import UpdateTodo from './components/UpdateTodo';
import UpdateCarpet from './components/UpdateCarpet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route exact path='/:username' element={<CompShowCarpets/>}/>
          <Route exact path='/:username/:carpet_u' element={<CompShowTodos/>}/>
          <Route path='/:username/createCarpet' element={<CompCreateCarpet/>}/>
          <Route path='/:username/:carpet_u/createTodo' element={<CompCreateTodo/>}/>
          <Route path='/edit/:username/:carpet_u/:id' element={<UpdateTodo/>}/>
          <Route path='/edit/:username/:id' element={<UpdateCarpet/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
