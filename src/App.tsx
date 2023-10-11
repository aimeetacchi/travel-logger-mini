import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css';

import Nav from './components/nav'
import Home from './components/pages/home';
import About from './components/pages/about';


const App = () => {
  return (
    <BrowserRouter>
    <div className="app-boilerplate">
      <Nav />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
