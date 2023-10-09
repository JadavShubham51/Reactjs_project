import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Cart from './Component/Cart';

//npm i react-router-dom
//npm i react-boostrap
//npm i react-icons
// npm i @faker-js/faker@7.6.0 // fake id object throw use

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/cart' Component={Cart} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
