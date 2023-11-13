import './sobre.css'
import Caua from "/src/assets/84869963.jpeg"
import Davi from "/src/assets/126623966.png"
import Rui from "/src/assets/rui.jpg"
import Carlos from "/src/assets/126624046.jpeg"
import Luigi from "/src/assets/luigi.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

function Sobre(){
    return( 
            <div id='Sobre'>
                <div id='sobre-page' className=''>
                    <div className='pt-5 mt-5'>
                        <h1 className='text-center'>Sobre Nós</h1>
                    </div>
                    <div id='box-sobre' className=' mt-5'>
                        <div id='text-sobre' className=' p-5'>
                        <p>Bem-vindo ao coração da nossa história, onde a paixão encontra a inovação, e a dedicação se entrelaça com a visão. Somos Clarke em homenagem a Edith Clarke a primeira engenheira eletricista, uma empresa que nasceu em um desafio proposto pela IBM sobre smart cities para alunos de engenharia de software da FIAP. </p>
                        <p>Somos uma empresa que atua no ramo do mercado livre de energia onde o consumidor tem contato direto com o produtor, evitando assim abuso em valores e evitando oscilações, pelo fato de utilizarmos os recursos renováveis de forma inteligente. </p>
                        <p>Buscamos entender as dores da população e como poderíamos transformar o mundo em um lugar mais sustentável, para isso buscamos atender os 3 pilares da sustentabilidade, ambiental, pois desejamos utilizar os recursos renováveis que a natureza nos fornece de maneira inteligente, econômico, pois faremos com que a população economize capital e social, pois com a efetividade dos outros pilares a sociedade terá uma qualidade de vida melhor. </p>
                        </div>
                        <div id='images' className='p-5' >
                           <a href="https://github.com/dejesuscaua"><img className='rounded-circle p-2' src= {Caua} alt= "" /></a>
                           <a href="https://github.com/daviguerra05"><img className='rounded-circle p-2' src= {Davi}  alt= "" /></a>
                           <a href="https://github.com/ruiasiqueira"><img className='rounded-circle p-2' src= {Rui}  alt= "" /></a>
                           <a href="https://github.com/Carlosqmenezes"><img className='rounded-circle p-2' src= {Carlos}  alt= "" /></a>
                           <a href="https://github.com/luigiferrarasinno"><img className='rounded-circle p-2' src= {Luigi}  alt= "" /></a>
          
                        </div>
                    </div>
                </div>
            </div>
    
    )
} 


export default Sobre 