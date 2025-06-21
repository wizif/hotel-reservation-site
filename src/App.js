import './App.css';
import Navbar from './common/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<div>Home Page</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
