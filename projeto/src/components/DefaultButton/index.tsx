import sass from './sass.module.scss'

type DefaultButtonProps = {

    children: React.ReactNode,
    id: string,
} & React.ComponentProps<'button'>

function DefaultButton({ id, children }: DefaultButtonProps) {

    return (

        <>
            <div className={sass.containerButton}>
                <button className={sass.btn} id={id}>{children}</button>
            </div>
        </>
    );
}

export default DefaultButton;