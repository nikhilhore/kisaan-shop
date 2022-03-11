import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import HomeHeader from './components/HomeHeader';
import './Home.css';

function Home() {
  return (
    <div id="home">
      <BrowserRouter>
        <HomeHeader />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;