import sass from './sass.module.scss'

type DefaultButtonProps = {

    children: React.ReactNode,
    id: string,
} & React.ComponentProps<'button'>

function DefaultButton({ id, children }: DefaultButtonProps) {

    return (

        <>
            <div className={sass.button}>
                <button className={sass.containerButton} id={id}>{children}</button>
            </div>
        </>
    );
}

export default DefaultButton;