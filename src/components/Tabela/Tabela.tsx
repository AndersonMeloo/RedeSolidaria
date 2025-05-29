import { Pessoa } from '../../Types/pessoas';

interface Props {
    pessoas: Pessoa[];
    onSelecionar: (pessoa: Pessoa) => void;
}

export default function Tabela({ pessoas, onSelecionar }: Props) {
    if (pessoas.length === 0) {
        return <p>Tabela está vazia</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
                {pessoas.map((pessoa) => (
                    <tr key={pessoa.codigo} onClick={() => onSelecionar(pessoa)}>
                        <td>{pessoa.codigo}</td>
                        <td>{pessoa.nome}</td>
                        <td>{pessoa.email}</td>
                        <td>{pessoa.telefone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
