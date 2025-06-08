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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente eveniet, saepe rerum, quibusdam officiis adipisci nisi nulla quia voluptatibus asperiores pariatur nobis enim! Numquam quam reprehenderit harum deserunt tempore.</p>
                        <a href="">Doe Roupas</a>
                    </div>

                    <div className={sass.div2}>
                        <DotLottieReact
                            src="https://lottie.host/1c9a8e1a-e7e0-4cdf-9f09-cc5e6f740e35/vT7jcDV2Dw.lottie"
                            loop
                            autoplay
                        />
                        <h2>Doação de Alimentos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente eveniet, saepe rerum, quibusdam officiis adipisci nisi nulla quia voluptatibus asperiores pariatur nobis enim! Numquam quam reprehenderit harum deserunt tempore.</p>
                        <a href="">Doe Alimentos</a>
                    </div>

                    <div className={sass.div3}>
                        <DotLottieReact
                            src="https://lottie.host/adf5eec0-6185-4c3c-bf0f-4d36b1d374e3/MdBVoGV1go.lottie"
                            loop
                            autoplay
                        />
                        <h2>Doação de Móveis</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente eveniet, saepe rerum, quibusdam officiis adipisci nisi nulla quia voluptatibus asperiores pariatur nobis enim! Numquam quam reprehenderit harum deserunt tempore.</p>
                        <a href="">Doe Móveis</a>
                    </div>

                    <div className={sass.div4}>
                        <DotLottieReact
                            src="https://lottie.host/79396635-5dba-452a-bfc6-94df14adfa06/K1d9qgO0So.lottie"
                            loop
                            autoplay
                        />
                        <h2>Doação para Pets</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente eveniet, saepe rerum, quibusdam officiis adipisci nisi nulla quia voluptatibus asperiores pariatur nobis enim! Numquam quam reprehenderit harum deserunt tempore.</p>
                        <a href="">Doe para Pets</a>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Doacoes;