import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import sass from './sass.module.scss'

function Cadastro() {

    return (

        <>

            <form action="">

                <div className={sass.cadastro}>
                    <DefaultInput id="" labelText="Nome" placeholder="Digite seu nome" type="text" required />
                    <DefaultInput id="" labelText="Ano Nascimento" type="date" />
                    <DefaultInput id="" labelText="E-mail" placeholder="Digite seu email" type="email" required />
                    <DefaultInput id="" labelText="Telefone" type="tel" placeholder="(00) 00000-0000" required />
                    <DefaultInput id="" labelText="Senha" type="password" placeholder="Digite sua senha" required />
                    <DefaultInput id="" labelText="Confirmar Senha" type="password" placeholder="Confirme sua senha" required />

                    <DefaultButton id="">
                        <button type="submit">Cadastrar</button>
                    </DefaultButton>
                </div>
            </form>
        </>
    );
}

export default Cadastro;