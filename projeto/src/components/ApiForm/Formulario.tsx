import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Pessoa } from '../../Types/pessoas';

interface Props {
  onAtualizar: () => void;
  pessoaSelecionada?: Pessoa;
}

export default function Formulario({ onAtualizar, pessoaSelecionada }: Props) {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (form.codigo) {
        await api.put(`${form.codigo}`, form);
      } else {
        await api.post('', form);
      }

      onAtualizar();
      setForm({ nome: '', email: '', telefone: '' });
    } catch (error) {
      console.log('Erro ao salvar dados.', error)
      alert('Erro ao salvar dados.');
    }
  };

  const handleDelete = async () => {
    if (!form.codigo) return;

    try {
      await api.delete(`${form.codigo}`);
      onAtualizar();
      setForm({ nome: '', email: '', telefone: '' });
    } catch (error) {
      console.log('Erro ao excluir.', error)
      alert('Erro ao excluir.');
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
