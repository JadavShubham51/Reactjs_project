import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Details from './components/Details';
import Error from './components/Error';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='login' element={<Login />}/>
        <Route path='/detalis' element={<Details />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </>
  );
}

export default App;
