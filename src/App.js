import logo from './logo.svg';
import './App.css';
import { IpoList } from './Components/IpoList';
import { IpoDetails } from './Components/IpoDetails';
import { BrowserRouter, Router } from 'react-router-dom';
import AppRoutes from './Components/Routes';

function App() {
  return (
    <div className="App">

      <AppRoutes />

    </div>
  );
}

export default App;
