import imgLogin from '../../../imgs/icon-conta.png'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import sass from './sass.module.scss'
import { Link } from 'react-router-dom';


function Login() {

    return (

        <>
            <div className={sass.container}>
                <div className={sass.left}>
                    <div className={sass.loginBox}>
                        <div className={sass.loginImg}>
                            <img src={imgLogin} alt="Imagem de login" />
                        </div>

                        <form className={sass.loginForm}>
                            <label>Nome</label>
                            <input type="text" required />

                            <label>E-mail</label>
                            <input type="email" required />
                            {/* 
                            <label>Telefone</label>
                            <input type="tel" placeholder="(00) 00000-0000" /> */}

                            <label>Senha</label>
                            <input type="password" required />

                            {/* <label>Confirmar Senha</label>
                            <input type="password" /> */}

                            <a href="">Entrar</a>
                        </form>
                    </div>
                </div>


                <div className={sass.right}>
                    <DotLottieReact
                        src="https://lottie.host/60bdf94d-a682-4aed-a066-b6dfc2c1f300/HbonktipPk.lottie"
                        loop
                        autoplay
                    />

                    <p>Não tem uma conta?
                        <Link to="/cadastro" >Faça seu cadastro</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;