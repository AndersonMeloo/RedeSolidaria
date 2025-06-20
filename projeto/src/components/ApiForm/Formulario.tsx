import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Pessoa } from '../../Types/pessoas';

interface FormularioProps {
  onAtualizar: () => void;
  pessoaSelecionada?: Pessoa;
}

export default function Formulario({ onAtualizar, pessoaSelecionada }: FormularioProps) {
  const [form, setForm] = useState<Pessoa>({
    nome: '',
    email: '',
    telefone: '',
  });

  useEffect(() => {
    if (pessoaSelecionada) {
      setForm(pessoaSelecionada);
    }
  }, [pessoaSelecionada]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {

    event.preventDefault();

    try {

      if (form.codigo) {
        await api.put(`${form.codigo}`, form);
      } else {
        await api.post('', form);
      }

      onAtualizar();
      setForm({ nome: '', email: '', telefone: '' });
    } catch (erro) {
      console.log('Erro ao salvar os dados.', erro)
      alert('Erro ao salvar os dados.');
    }
  };

  const handleDelete = async () => {
    if (!form.codigo) return;

    try {

      await api.delete('delete.php', {
        data: { codigo: form.codigo },
      });

      onAtualizar();
      setForm({ nome: '', email: '', telefone: '' });
    } catch (erro) {
      console.log('Erro ao excluir os dados.', erro);
      alert('Erro ao excluir os dados.');
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" required />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="E-mail" required />
      <input type="tel" name="telefone" value={form.telefone} onChange={handleChange} placeholder="Telefone" required />

      <button type="submit">Salvar</button>
      {form.codigo && <button type="button" onClick={handleDelete}>Excluir</button>}
    </form>
  );
}
