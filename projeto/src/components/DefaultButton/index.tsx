type DefaultButtonProps = {

    children: React.ReactNode,
    id: string,
} & React.ComponentProps<'button'>

function DefaultButton({ id, children }: DefaultButtonProps) {

    return (

        <>
            <span id={id}>{children}</span>
        </>
    );
}

export default DefaultButton;