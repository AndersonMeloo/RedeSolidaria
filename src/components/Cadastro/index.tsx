type CadastroProps = {

    id: string;
    labelText: string,
} & React.ComponentProps<'input'>;

function Cadastro({id, labelText, type, ...props} : CadastroProps) {

    return (  

        <>
            <label htmlFor={id}>{labelText}</label>
            <input type={type} {...props} />''
        </>
    );
}

export default Cadastro;