import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Nav(){
    return( 
        <>
            <header className=' p-2 bg-dark'>
                <div className='m-3'>
                    <NavLink to="/" className='text-decoration-none text-white nav-link' href='#home'>
                        CLARKE
                    </NavLink>
                </div>

                <div id='nav'> 
                    <div className='m-3'>
                        <NavLink to="/Tech" className='text-decoration-none text-white nav-link' href='#tech'>
                            Tecnologias
                        </NavLink>
                    </div>
                    
                    <div className='m-3'>
                        <NavLink to="/Sobrenos" className='text-decoration-none text-white nav-link' href='#footer'>
                            Sobre Nós
                        </NavLink>
                    </div>

                    <div className='m-3'>
                        <NavLink to="/Compras" className='text-decoration-none text-white nav-link' href='#login'>
                            Comprar
                        </NavLink>
                    </div> 

                    <div className='m-3'>
                        <NavDropdown title="Dropdown" menuVariant="dark">
                            <NavDropdown.Item>
                                Action
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                Another action
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                Something
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
            </header>
        </>
    )
} 

export default Nav   