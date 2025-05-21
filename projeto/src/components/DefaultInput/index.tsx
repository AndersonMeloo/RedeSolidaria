import sass from './sass.module.scss'
// import imgLogin from '../../../imgs/icon-conta.png''

type DefaultInputProps = {

    id: string,
    labelText: string,
} & React.ComponentProps<'input'>

function DefaultInput({ id, labelText, type, ...rest }: DefaultInputProps) {

    return (
        <>
        
            <div className={sass.defaultInput}>
                <label htmlFor={id} className={sass.label}>{labelText}</label>
                <input type={type} id={id} {...rest} className={sass.input} />
            </div>
        </>
    );
}

export default DefaultInput;