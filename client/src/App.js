import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App(props) {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard user={props.user} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;