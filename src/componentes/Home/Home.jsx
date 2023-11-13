import './Home.css'
import Image from "/src/assets/img1.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){
    return( 
        <>
            <div id='Home'>
                <div id='home-page' className='mt-5 p-5'>
                    <div className='mt-5 pt-5'>
                        <h1 className='h1 mb-4'>Bem Vindos a Clarke</h1>
                        <p className=''>Clarke surge como uma resposta inovadora e eficaz para otimizar a produção de energia, abraçando a visão de um futuro mais sustentável e eficiente. Nosso foco principal é a criação de um sistema inteligente que avalia e gerencia a produção de energia ao longo do ano, garantindo o uso da fonte mais produtiva de acordo com as condições específicas de cada mês.</p>
                    </div>
                    <div id='image' className='mt-5 '>
                        <img src= {Image} alt="Imagem" />
                    </div>
                </div>
            </div>
        </>
    )
} 

export default Home