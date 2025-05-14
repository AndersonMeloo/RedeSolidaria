import sass from './sass.module.scss'
import imagemDoacao from './img/gift.svg'
import { Link } from 'react-router-dom';

// type DoacaoProps = {
//     children: React.ReactNode,
// }

function PaginaPrincipal() {

    return (

        <>
            <div className={sass.container}>

                <div className={sass.container1}>
                    {/* {children} */}


                    <img src={imagemDoacao} alt="Imagem Doação de Presente" />

                </div>

                <div className={sass.container2}>
                    <p>Ajude a Transformar Vidas com Sua Doação</p>
                    <p>Cada contribuição faz a diferença. Ao doar,
                        você se torna parte de uma rede de solidariedade
                        que impacta positivamente a vida de milhares de
                        pessoas. Com sua ajuda, conseguimos ampliar
                        nossos projetos, oferecer apoio a quem mais
                        precisa e construir um futuro mais justo, humano
                        e sustentável.</p>

                    <Link to="doacoes" className={sass.doacao}>Faça sua doação</Link>
                </div>

            </div>
        </>
    );
}

export default PaginaPrincipal;

