import sass from './sass.module.scss'

import imgDonation from '../../../imgs/donation.png'

function Sobre() {
    return (

        <>

            <div className={sass.containerSobre}>

                <div className={sass.containerTextos}>
                    <h1>Sobre Nós</h1>
                    <p>A Rede Solidária é uma iniciativa criada com o
                        propósito de unir pessoas dispostas a fazer a
                        diferença na vida de quem mais precisa. Nosso
                        site é uma plataforma dedicada à solidariedade
                        , onde você pode contribuir de diversas formas
                        para ajudar famílias e indivíduos em situação de
                        vulnerabilidade social.
                        <br />
                        <br />
                        Nosso objetivo é arrecadar alimentos, roupas,
                        brinquedos, produtos de higiene, além de prom-
                        over serviços voluntários como cortes de cabelo,
                        atendimento psicológico, suporte jurídico, entre
                        outros. Cada doação, por menor que pareça, tem
                        um impacto enorme na vida de quem a recebe.
                        Acreditamos que juntos somos mais fortes. Por
                        isso, a Rede Solidária é mais do que um site – é uma
                        comunidade do bem, formada por pessoas que se
                        importam e querem transformar o mundo em um
                        lugar mais justo e humano.
                        Junte-se a nós nessa corrente de amor e empatia.
                        Sua ajuda pode mudar vidas!</p>
                </div>

                <div>
                    <img src={imgDonation} alt="" />
                </div>
            </div>
        </>
    );
}

export default Sobre;