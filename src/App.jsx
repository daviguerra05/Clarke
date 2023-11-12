import Nav from "./componentes/Nav/Nav";
import { Outlet } from 'react-router-dom';
import Footer from "./componentes/Footer/Footer";

function App() {
  return (
    <div>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
