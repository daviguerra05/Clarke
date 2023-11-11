import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

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
                </div>
            </header>
        </>
    )
} 

export default Nav   