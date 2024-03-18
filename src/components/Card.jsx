// Card.js
function Card({ carta }) {
  return (
    <li className="relative list-none w-full xl:pb-28 pt-24 bg-slate-50 p-5 rounded-lg cursor-pointer hover:bg-white hover:drop-shadow-xl transition-all ease-in duration-150" style={{ gridColumnEnd: "span 1" }}>
      <a href={carta.link}>
        <img src={carta.avatar} alt="Avatar" className="w-24 h-24 absolute object-cover rounded-full top-5 right-10" />
        <p className="p-1 px-3 bg-slate-300 w-fit rounded-full">{carta.servicoNome}</p>
        <p className="font-bold my-2">{carta.titulo}</p>
        <p className="line-clamp-4">{carta.descricao}</p>
        <div className="xl:absolute mt-10 xl:mt-0 bottom-5 xl:right-5 flex w-full xl:w-auto mx-auto xl:mx-5 items-center justify-center gap-2 font-bold border rounded-md py-1 px-4">
          <p>BAIXAR PDF</p>
          <img src={require("../../public/images/icon-pdf.png")} alt="Ícone PDF" className="w-12 text-end " />
        </div>
      </a>
    </li>
  );
}

export default Card;
