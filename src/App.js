// import Login from "./components/loginComponents/Login";
import {BrowserRouter} from 'react-router-dom'
import Landing from "./components/landingComponents/Landing";

function App() {
  return (
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
}

export default App;
