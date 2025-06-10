import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import sass from './sass.module.scss';
import { Link } from "react-router-dom";
import DefaultInput from "../DefaultInput";
import api from "../../services/api";

function Cadastro() {
    const [nome, setNome] = useState("");
    const [anoNascimento, setAnoNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {

        event.preventDefault();

        if (senha !== confirmarSenha) {

            setMensagem("As senhas não coincidem.");
            return;
        }

        const dados = {
            nome,
            email,
            telefone,
            anoNascimento,
            senha, // só envia se a API aceitar
        };

        try {

            const resposta = await api.post("", dados);
            if (resposta.data.erro) {
                setMensagem(resposta.data.mensagem);
            } else {
                setMensagem("Cadastro realizado com sucesso!");
                // Limpa o formulário
                setNome("");
                setAnoNascimento("");
                setEmail("");
                setTelefone("");
                setSenha("");
                setConfirmarSenha("");
            }
        } catch (err) {
            console.log('ERRO ao comunicar com a API', err)
            setMensagem("Erro ao comunicar com a API.");
        }
    };

    return (
        <div className={sass.containerForm}>
            <form onSubmit={handleSubmit}>
                <div className={sass.registrar}>
                    <DotLottieReact
                        src="https://lottie.host/d08a262e-97c6-44d4-bc97-f2926d8f24bc/zgZR2bhOUm.lottie"
                        loop
                        autoplay
                    />
                    <Link to="/login">
                        Tem uma conta? <span>Faça seu Login</span>
                    </Link>
                </div>

                <div className={sass.cadastro}>
                    <DefaultInput id="nome" labelText="Nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                    <DefaultInput id="anoNascimento" labelText="Ano Nascimento" type="date" value={anoNascimento} onChange={(e) => setAnoNascimento(e.target.value)} />
                    <DefaultInput id="email" labelText="E-mail" placeholder="user1234@" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <DefaultInput id="telefone" labelText="Telefone" placeholder="(00) 00000-0000" type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                    <DefaultInput id="senha" labelText="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    <DefaultInput id="confirmarSenha" labelText="Confirmar Senha" type="password" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />

                    <input className={sass.inputEnvio} type="submit" value="Cadastrar" />
                    {mensagem && <p className={sass.alerta}>{mensagem}</p>}
                </div>
            </form>
        </div>
    );
}

export default Cadastro;
