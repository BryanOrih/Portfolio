import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
