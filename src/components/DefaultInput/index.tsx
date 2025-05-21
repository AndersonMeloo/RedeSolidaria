import sass from './sass.module.scss'

type DefaultInputProps = {

    id: string,
    labelText: string,
} & React.ComponentProps<'input'>

function DefaultInput({ id, labelText, type, ...rest }: DefaultInputProps) {

    return (
        <>
            <label htmlFor={id} className={sass.label}>{labelText}</label>
            <input type={type} id={id} {...rest} className={sass.input} />
        </>
    );
}

export default DefaultInput;