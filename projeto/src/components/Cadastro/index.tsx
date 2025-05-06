type CadastroProps = {

    id: string;
    labelText: string,
} & React.ComponentProps<'input'>;

function Cadastro({id, labelText, type, ...rest} : CadastroProps) {

    return (  

        <>
            <label htmlFor={id}>{labelText}</label>
            <input type={type} {...rest} />
        </>
    );
}

export default Cadastro;