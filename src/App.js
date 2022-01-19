import Topbar from "./components/layout/topbar";
import Home from "./components/pages/home";
import Single from "./components/pages/single";
import Write from "./components/pages/write";
import Setting from './components/pages/setting';
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Topbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/write' element={<Write/>} />
        <Route exact path='/post/:postId' element={<Single/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/settings' element={<Setting/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
