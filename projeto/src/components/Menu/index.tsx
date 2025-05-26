import { Link } from 'react-router-dom';
import sass from './sass.module.scss'
import { MoonIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

type AvailableTheme = 'dark' | 'light'

function Menu() {

    const [theme, setTheme] = useState(() => {

        const storageTheme = localStorage.getItem('theme') as AvailableTheme || 'light'
        return storageTheme
    })

    const nextThemeIcon = {
        dark: <SunIcon size={32} />,
        light: <MoonIcon size={32} />
    }

    useEffect(() => {

        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    function handleClickTheme(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {

        event.preventDefault()

        setTheme(prevTheme => {

            prevTheme = prevTheme === 'light' ? 'dark' : 'light'
            return prevTheme
        })
    }

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

                <div className={sass.icon} onClick={handleClickTheme}>
                    {nextThemeIcon[theme]}
                </div>

            </div>
        </>
    );
}

export default Menu;