interface HeaderProps {

    name: string,
    idade: number;
}

function Header({ name, idade }: HeaderProps) {

    const carro = 'Acelerando o Carro';

    return (
        <>
            <p>{name}</p>
            <p>{idade}</p>
            <p>{name === 'Anderson' && `${name} está ${carro} a 200KM`}</p>
            <p>{`${name} está ${carro}`}</p>

        </>
    );
}

export default Header;

export function Imagem({ imagem }: { imagem: string }) {

    return (

        <div>
            <img src={imagem} alt="" />
        </div>
    );
}

