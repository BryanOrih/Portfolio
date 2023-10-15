import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import SkillTree from './pages/skill-tree';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';


function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/SkillTree' element={<SkillTree/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
