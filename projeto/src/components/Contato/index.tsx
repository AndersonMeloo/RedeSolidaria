// import sass from './sass.module.scss'


type HeaderProps = {
    children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {

    return (
        <nav>
            <a href="">{children}</a>
        </nav>
    )
}