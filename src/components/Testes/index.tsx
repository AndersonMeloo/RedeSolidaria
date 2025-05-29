import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

type AvailableTheme = "dark" | 'light'

function Menu() {

    const [theme, setTheme] = useState(() => {

        const storageTheme = localStorage.getItem('theme') as AvailableTheme || 'dark'
        return storageTheme
    })

    function handleClickTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {

        event.preventDefault()

        setTheme(prevTheme => {

            prevTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return prevTheme
        })
    }

    const nextThemeIcon = {
        dark: <MoonIcon size={32} />,
        light: <SunIcon size={32} />
    }

    useEffect(() => {

        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (

        <>
            <nav className="">

                <a href="" className="">
                    <HouseIcon size={32} />
                </a>

                <a href="" className="">
                    <HistoryIcon size={32} />
                </a>

                <a href="" className="">
                    <SettingsIcon size={32} />
                </a>

                <a href="" className="" onClick={handleClickTheme}>
                    {nextThemeIcon[theme]}
                </a>
            </nav>
        </>
    );
}

export default Menu;