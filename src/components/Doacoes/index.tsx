import sass from './sass.module.scss'

type DoacaoProps = {
    children: React.ReactNode,
}

function Doacao({ children }: DoacaoProps) {

    return (

        <>
            <div className={sass.container}>

                <div className={sass.container1}>
                    {children}

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

                    <a href="" className={sass.doacao}>Faça sua doação</a>
                </div>

            </div>
        </>
    );
}

export default Doacao;

export function Imagem({ imagem }: { imagem: string }) {

    return (

        <>
            <img src={imagem} alt="" className={sass.imagem}/>
            {}
            teste
        </>
    )
}
