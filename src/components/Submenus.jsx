function Submenus({ servicos, cartaSelecionada, handleCartaClick }) {
  return (
    <div className='overflow-x-auto'>
      <ul className='flex gap-2 mt-3 z-[1000] whitespace-nowrap h-16 items-center'>
        <p className={`p-1 px-3 rounded-full cursor-pointer h-8 ${!cartaSelecionada ? 'bg-slate-600 text-white' : 'bg-slate-300 text-black'}`} onClick={() => handleCartaClick(null)}>Todos de {servicos[0]?.secretaria}</p>
        {servicos.map((servico, index) => (
          <li onClick={() => handleCartaClick(servico)} key={index}>
            <p className={`p-1 px-3 rounded-full cursor-pointer h-8 ${cartaSelecionada === servico ? 'bg-slate-600 text-white' : 'bg-slate-300 text-black'}`}>{servico.nome}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Submenus;