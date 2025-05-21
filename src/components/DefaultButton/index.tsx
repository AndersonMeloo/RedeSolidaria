type DefaultButtonProps = {

    children: React.ReactNode,
    id: string,
} & React.ComponentProps<'button'>

function DefaultButton({ id, children }: DefaultButtonProps) {

    return (

        <>
            <button id={id}>{children}</button>
        </>
    );
}

export default DefaultButton;