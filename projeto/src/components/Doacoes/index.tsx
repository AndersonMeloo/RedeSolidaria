import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import sass from './sass.module.scss'

function Doacoes() {

    return (

        <>

            <div className={sass.containerDoacao}>

                <div className={sass.container}>

                    <div className={sass.div1}>
                        <DotLottieReact
                            src="https://lottie.host/7858bef5-575f-4a3d-accb-6f23ab4f6374/YZAtFqUc5N.lottie"
                            loop
                            autoplay
                        />
                        <h2>Doação de Roupas</h2>
                        <p>Doe roupas em bom estado e ajude quem mais precisa. Agasalhos, camisetas, calças e calçados são sempre bem-vindos para aquecer corações. Sua solidariedade pode transformar vidas com um simples gesto. Seja parte dessa corrente de empatia e amor ao próximo.</p>
                        <a href="">Doe Roupas</a>
                    </div>

                    <div className={sass.div2}>
                        <DotLottieReact
                            src="https://lottie.host/1c9a8e1a-e7e0-4cdf-9f09-cc5e6f740e35/vT7jcDV2Dw.lottie"
                            loop
                            autoplay
                        />
                        <h2>Doação de Alimentos</h2>
                        <p>Contribua com alimentos não perecíveis e leve esperança a famílias em situação de vulnerabilidade. Cada doação alimenta mais do que o corpo — alimenta a dignidade. Sua ajuda é essencial para combater a fome. Compartilhe o que tem e faça a diferença.</p>
                        <a href="">Doe Alimentos</a>
                    </div>

                    <div className={sass.div3}>
                        <DotLottieReact
                            src="https://lottie.host/adf5eec0-6185-4c3c-bf0f-4d36b1d374e3/MdBVoGV1go.lottie"
                            loop
                            autoplay
                        />
                        <h2>Doação de Móveis</h2>
                        <p>Tem móveis em bom estado que não usa mais? Eles podem ser essenciais para quem não tem nada. Mesas, cadeiras, camas e estantes podem renovar um lar. A sua doação traz conforto, acolhimento e dignidade para muitas famílias carentes.</p>
                        <a href="">Doe Móveis</a>
                    </div>

                    <div className={sass.div4}>
                        <DotLottieReact
                            src="https://lottie.host/79396635-5dba-452a-bfc6-94df14adfa06/K1d9qgO0So.lottie"
                            loop
                            autoplay
                        />
                        <h2>Doação para Pets</h2>
                        <p>Ajude animais abandonados com doações de ração, brinquedos, cobertores ou medicamentos. Os abrigos precisam da sua colaboração para manter os cuidados. Um pequeno gesto pode mudar a vida de um pet. Seja a esperança de um amigo de quatro patas</p>
                        <a href="">Doe para Pets</a>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Doacoes;