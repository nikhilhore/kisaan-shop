import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AppHeader from './components/AppHeader';

function App(props) {
  return (
    <div id="app">
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Dashboard user={props.user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;