import './Home.css'
import Image from "../../assert/pylon-503935.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){
    return( 

       <div id='Home'>
        <div className='row mt-5 p-4'>
            <div className='col-6 mt-5'>
                <h1 className='h1 mb-4'>Bem Vindos a Clarke</h1>
                <p className=''>Clarke surge como uma resposta inovadora e eficaz para otimizar a produção de energia, abraçando a visão de um futuro mais sustentável e eficiente. Nosso foco principal é a criação de um sistema inteligente que avalia e gerencia a produção de energia ao longo do ano, garantindo o uso da fonte mais produtiva de acordo com as condições específicas de cada mês.</p>
            </div>
            <div className='col-5 mt-3'>
                <img className='w-100' src= {Image} alt="Imagem" />
            </div>
        </div>
       </div>
        
    )
} 

export default Home