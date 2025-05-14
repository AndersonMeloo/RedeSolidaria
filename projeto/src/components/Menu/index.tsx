import { Link } from 'react-router-dom';
import sass from './sass.module.scss'

function Menu() {

    return (

        <>
            <div className={sass.menu}>

                <div className={sass.menuLogo}>
                    <Link to="/">Rede Solidaria</Link>
                </div>

                <div className={sass.menuLinks}>
                    <Link to="/doacoes">Doe +</Link>
                    <Link to="/sobre">Sobre nós</Link>
                    <Link to="/contato">Contato</Link>
                </div>

                <div className={sass.menuConta}>
                    <Link to="/login">Login</Link>
                    <Link to="/cadastro">Registrar</Link>
                </div>

            </div>
        </>
    );
}

export default Menu;