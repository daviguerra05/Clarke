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
                        <NavLink to="/Sobre" className='text-decoration-none text-white nav-link' href='#footer'>
                            Sobre Nós
                        </NavLink>
                    </div>

                    <div className='m-3'>
                        <NavDropdown title="Usuário" menuVariant="dark">
                            <NavDropdown.Item>
                                <NavLink to="/Login" className='text-decoration-none text-white nav-link' href='#footer'>
                                    Criar Conta
                                </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink to="/Login" className='text-decoration-none text-white nav-link' href='#footer'>
                                    Login
                                </NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
            </header>
        </>
    )
} 

export default Nav   