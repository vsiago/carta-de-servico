'use client';

import { useState } from 'react';
import { useServiceContext } from '../contexts/ServiceContext';

const ServiceForm = () => {
  const { addService } = useServiceContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crie um objeto FormData para enviar o PDF junto com os outros dados
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    if (pdfFile) formData.append('pdfFile', pdfFile);

    await addService(formData);

    // Resetar o formulário
    setTitle('');
    setDescription('');
    setCategory('');
    setPdfFile(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    } else {
      alert('Por favor, selecione um arquivo PDF.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg space-y-4">
      <h2 className="text-2xl font-bold mb-10 text-center">Cadastro de <br /> Carta de Serviço</h2>

      {/* Campo de Título */}
      <div>
        <label className="block text-sm font-medium">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      {/* Campo de Descrição */}
      <div>
        <label className="block text-sm font-medium">Descrição</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      {/* Campo de Categoria */}
      <div>
        <label className="block text-sm font-medium">Categoria</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      {/* Campo para Upload de PDF */}
      <div>
        <label className="block text-sm font-medium">Anexar PDF</label>
        <div className="flex items-center mt-1">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
            id="pdf-upload"
          />
          <label
            htmlFor="pdf-upload"
            className="cursor-pointer px-3 py-2 bg-gray-200 border border-gray-300 rounded-md shadow-sm text-sm font-medium flex items-center space-x-2 hover:bg-gray-300"
          >
            <span>Escolher Arquivo</span>
          </label>
          {pdfFile && <span className="ml-3 text-gray-700">{pdfFile.name}</span>}
        </div>
      </div>

      {/* Botão de Cadastro */}
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md shadow">
        Cadastrar
      </button>
    </form>
  );
};

export default ServiceForm;
