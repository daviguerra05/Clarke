import Nav from "./componentes/Nav/Nav";
import Home from "./home";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default App
