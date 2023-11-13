import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'

function Footer(){
    return( 
        <footer>
            <div>
                <h1>Clarke</h1>
                <p>THE REAL CHANGE</p>
            </div>
            <div>
                <h1>Equipe</h1>
                <a className='text-white' href="https://www.github.com/daviguerra05" target='_blank'>Davi Passanha de Sousa Guerra</a>
                <a className='text-white'href="https://www.github.com/dejesuscaua" target='_blank'>Cauã Gonçalves de Jesus</a>
                <a className='text-white'href="https://www.github.com/ruiasiqueira" target='_blank'>Rui Amorim Siqueira</a>
                <a className='text-white'href="https://www.github.com/Carlosqmenezes" target='_blank'>Carlos Eduardo de Queiroz Menezes</a>
                <a className='text-white'href="https://www.github.com/luigiferrarasinno" target='_blank'>Luigi Ferrara Sinno</a>
            </div>
            <div>
                <h1>Contato</h1>
                <a className='text-white' href="mailto:clarke@gmail.com.br">clarke@gmail.com.br</a>
            </div>
        </footer>
    )
} 

export default Footer