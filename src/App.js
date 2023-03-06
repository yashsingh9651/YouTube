import { useEffect } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Home} from "./components/Home";
import { Login } from "./components/Login";
import {Navbar} from "./components/Navbar";
import { Search } from "./components/Search";
function App() {
  return (
    <>
    <div className='relative bg-black w-screen min-h-[100svh] text-white'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/search/:search' element={<Search/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}
export default App;
