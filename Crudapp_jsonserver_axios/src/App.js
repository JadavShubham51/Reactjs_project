import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Navbar from "./component/pages/layout/Navbar";
import { BrowserRouter , Route, Switch ,Routes } from "react-router-dom";
import Pagenotfound from "./component/pages/Pagenotfound";
import Addusers from "./component/pages/user/Addusers";
import Edituser from "./component/pages/user/Edituser";
import User from "./component/pages/user/User";

//npm i bootstarp5
//npm react-router-dom

//json server appliction ma install karva mate
// npm install -g json-server

// this is a json start karva mate use 
// json-server --watch db.json 

// local host jova secound cmd use 
// "json-server":"json-server --watch db.json --port 3001",

//ek sate two cmd use te mate use
//npm i -g concurrently
//"start-dev": "concurrently \"npm start\" \"npm run json-server\""
// start karva mate
//  npm run start-dev

//server thi api response 
// npm install axios

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Routes>
            <Route  path="/" element={<Home />}></Route>
            <Route  path="/about" element={<About />}></Route>
            <Route  path="/contact" element={<Contact />}></Route>
            <Route  path="/user/add" element={<Addusers />}></Route>
            <Route  path="/user/edit/:id" element={<Edituser />}></Route>
            <Route  path="/user/:id" element={<User />}></Route>
            
            <Route  path="*" element={<Pagenotfound />}></Route>
          </Routes>        
      </div>
    </BrowserRouter>
  );
}

export default App;
