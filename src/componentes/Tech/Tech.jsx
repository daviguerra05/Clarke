import './Tech.css'
import Eletrica from "/src/assets/eletrica.jpg"
import Susten from "/src/assets/susten.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

function Tech(){
    return( 
        <>
            <div id='Tech'>
                <div className='d-flex justify-content-center mt-5 pt-5'>
                    <h1 className='text-center'>Soluções</h1>
                </div>

                <div id='Tech' className="row mt-5 d-flex justify-content-around">
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
                <div className="col-5">
                    <img src= {Eletrica} alt="Imagem" />
                </div>

                <div  className="row p-5 mt-5 d-flex justify-content-around">
                <div className="col-5">
                <img src= {Susten} alt="Imagem" />
                </div>
                <div id='image-tech' className="col-6">
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
        </>
        
    )
} 

export default Tech