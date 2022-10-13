// import Login from "./components/loginComponents/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from "./components/landingComponents/Landing";
import Shuffle from './components/shuffleComponents/Shuffle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/shuffle' element={<Shuffle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
