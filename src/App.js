// import Login from "./components/loginComponents/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from "./components/landingComponents/Landing";
import Shuffle from './components/shuffleComponents/Shuffle';
import Songs from './components/shuffleComponents/Songs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/shuffle' element={<Shuffle />} />
        <Route path='/songs' element={<Songs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
