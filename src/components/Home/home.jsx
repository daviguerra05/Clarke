import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function Home(){
    return( 

        
        <div>

            <div className='d-flex justify-content-center mt-5 pt-5'>
                <h1>Soluções</h1>
            </div>

            <div id='home' className="row mt-5 d-flex justify-content-around">
            <div className="col-6">
                <h1>Energia Elétrica</h1>
                <p>
                    Nosso objetivo é reduzir os custos de geração de energia através de uma gestão mais eficiente, que irá agradar tanto
                    aos consumidores quanto aos fornecedores. 
                    Além disso, otimizar os processos de produção e distribuição 
                    resultará em grandes economias, já que 
                    perdas desnecessárias serão reduzidas,
                    beneficiando a todos.
                </p>
            </div>
            <div className="col-4">
                <p>Imagem</p>
            </div>

            <div  className="row p-5 mt-5 d-flex justify-content-around">
            <div className="col-4">
                <p>Imagem</p>
            </div>
            <div className="col-6">
                <h1>Sutentabilidade</h1>
                <p>
                    Nossa solução não só reduz os custos de geração de energia,
                    mas também cria harmonia entre as necessidades humanas 
                    e o meio ambiente. Isso leva a um futuro equilibrado e próspero, 
                    onde eficiência e sustentabilidade andam juntas, 
                    e as ações beneficiam a todos.
                </p>
            </div>
            </div>

            </div>
        </div>
        
    )
} 

export default Home