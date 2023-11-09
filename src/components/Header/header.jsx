import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return( 
        <header className=' p-2 bg-dark'>
            <div className='m-3'>
                <a className='text-decoration-none text-white' href='#home'>CLARKE</a>
            </div>

            <div id='nav'> 
            <div className='m-3'><a className='text-decoration-none text-white' href='#solucoes'>Tecnologias</a></div>
            <div className='m-3'><a className='text-decoration-none text-white' href='#footer'>Sobre Nós</a></div>
            <div className='m-3'><a className='text-decoration-none text-white' href='#login'>Comprar</a></div> 
            </div>
        </header>
    )
} 

export default Header   