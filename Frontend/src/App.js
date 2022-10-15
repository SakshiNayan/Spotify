import {Route,Routes,BrowserRouter} from "react-router-dom";
import Dashboard from "./Component/Dashboard/dashboard";
import LoginPg from "./Component/Login/loginPg";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPg/>}></Route>
      <Route path="/dasboard" element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
    // <>
    // <h1>Spotify</h1>
    // </>
  );
}

export default App;
