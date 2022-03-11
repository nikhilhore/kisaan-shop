import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App(props) {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard user={props.user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;