import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import sass from './sass.module.scss'

function Cadastro() {

    return (

        <>

            <div className={sass.containerForm}>
                <form action="">
                    <div className={sass.registrar}>
                        <DotLottieReact
                            src="https://lottie.host/d08a262e-97c6-44d4-bc97-f2926d8f24bc/zgZR2bhOUm.lottie"
                            loop
                            autoplay
                        />
                    </div>

                    <div className={sass.cadastro}>
                        <DefaultInput id="" labelText="Nome" type="text" required />
                        <DefaultInput id="" labelText="Ano Nascimento" type="date" />
                        <DefaultInput id="" labelText="E-mail" placeholder="user1234@" type="email" required />
                        <DefaultInput id="" labelText="Telefone" type="tel" placeholder="(00) 00000-0000" required />
                        <DefaultInput id="" labelText="Senha" type="password" required />
                        <DefaultInput id="" labelText="Confirmar Senha" type="password" required />
                    </div>
                </form>
            </div>

        </>
    );
}

export default Cadastro;