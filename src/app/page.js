"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import secretariasData from "../../public/secretarias.json";
import Submenus from "@/components/Submenus";

function ListaSecretarias({
  state,
  handleSecretariaClick,
  secretariaSelecionada,
}) {
  // Mapeamento de cores para tipos de secretarias
  const coresPorTipo = {
    "Secretaria da Fazenda": "bg-sky-500",
    "Secretaria de Saúde": "bg-red-600",
    "Secretaria de Obras": "bg-orange-500",
    "Secretaria da Mulher": "bg-pink-500",
    // Adicione mais tipos de secretarias e cores conforme necessário
  };

  return (
    <ul
      className={`${
        state
          ? "visible opacity-100 h-[500px] top-20 overflow-auto z-[5000]"
          : "invisible opacity-0 top-14 h-0 md:visible md:opacity-100 md:h-auto z-[5000]"
      } md:flex-row md:h-auto md:top-0 overflow-hidden transition-all ease-in-out duration-300 h-16 flex flex-col gap-1 items-end ml-20 absolute right-0`}
    >
      {/* LISTA DE SECRETARIAS */}
      {secretariasData.secretarias.map((secretaria, index) => {
        // Obtém a cor correspondente ao tipo de secretaria
        const cor = coresPorTipo[secretaria.nome] || "bg-slate-400";
        return (
          <li
            key={index}
            onClick={() => handleSecretariaClick(secretaria)}
            className={`px-4 z-[5000] ${
              secretariaSelecionada &&
              secretariaSelecionada.nome === secretaria.nome
                ? cor
                : "bg-slate-400 z-[5000]"
            } min-w-[56px] min-h-[56px] flex flex-row-reverse items-center justify-center rounded-lg shadow gap-3 cursor-pointer z-[5000]`}
          >
            <div className="min-w-[32px] min-h-[32px] p-[2px] bg-stone-100 opacity-50 rounded-lg">
              <Image
                width={32}
                height={32}
                src={
                  secretariaSelecionada &&
                  secretariaSelecionada.nome === secretaria.nome
                    ? secretaria.iconeAtivo
                    : secretaria.iconeInativo
                }
                alt="Icone fazenda"
              />
            </div>
            <p className="font-bold text-white">{secretaria.nome}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default function Carta() {
  const [state, setState] = useState(false);
  const [secretarias, setSecretarias] = useState([]);
  const [secretariaSelecionada, setSecretariaSelecionada] = useState(null);
  const [cartaSelecionada, setCartaSelecionada] = useState(null);
  const [servicos, setServicos] = useState([]);

  // Seleciona a carta especifica
  const handleCartaClick = (carta = null) => {
    setCartaSelecionada(carta);
  };

  // Seleciona secretaria especifica
  const handleSecretariaClick = (secretaria = null) => {
    setSecretariaSelecionada(secretaria);
    setCartaSelecionada(null); // Redefine a carta selecionada ao selecionar uma nova secretaria
  };

  useEffect(() => {
    setSecretarias(secretariasData.secretarias);
  }, []); // executa apenas uma vez ao montar o componente

  useEffect(() => {
    if (secretariaSelecionada) {
      setServicos(secretariaSelecionada.servicos);
      setState(false);
    }
  }, [secretariaSelecionada]);

  return (
    <>
      <header className="min-h-40 bg-[#003E75] px-6 flex flex-col justify-end py-6">
        <div className="flex justify-between items-center container mx-auto">
          <Image
            width={42}
            height={42}
            src="/SVG/icon-carta-de-servico.svg"
            alt="Icone Carta de Servico"
          />
          <Image
            width={145.7}
            height={41.92}
            src="/images/logo-itaguai.png"
            alt="Logo de Itaguai"
          />
        </div>
        <div className="container mx-auto">
          <p className="text-2xl font-medium text-white pt-6">
            Carta de Serviço
          </p>
          <p className="text-base text-[#6BC1FF] font-medium">
            Um compromisso com o cidadão.
          </p>
        </div>
      </header>
      <main className="min-h-screen flex-1 bg-[#E3E6EE] p-6 ">
        <section className="container mx-auto">
          <nav className="flex gap-3 items-center justify-between min-w-screen  relative">
            {/* Botao Buscar todas as Buscas */}
            <div
              onClick={() => setSecretariaSelecionada(null)}
              className="p-2 bg-[#233550] min-w-[56px] h-[56px] flex items-center justify-center rounded-lg cursor-pointer"
            >
              <Image
                width={32}
                height={32}
                src="/SVG/icon-home.svg"
                alt="Icone Carta de Servico"
              />
            </div>
            <ListaSecretarias
              state={state}
              handleSecretariaClick={handleSecretariaClick}
              secretariaSelecionada={secretariaSelecionada}
            />
            <div>
              <div
                onClick={() => setState(!state)}
                className="p-4 py-[18px] bg-sky-500 min-w-[56px] h-[56px] flex flex-col  justify-between rounded-lg md:hidden cursor-pointer"
              >
                <div className="w-full h-[3px] bg-white"></div>
                <div className="w-full h-[3px] bg-white"></div>
                <div className="w-full h-[3px] bg-white"></div>
              </div>
            </div>
          </nav>

          {/* RENDERIZA SUBMENUS PARA BUSCAR TODOS OS SERVICOS */}
          {secretariaSelecionada && (
            <div className="overflow-x-auto">
              <ul className="flex gap-2 mt-3 z-[1000] whitespace-nowrap h-16 items-center">
                <p
                  className={`p-1 px-3 rounded-full cursor-pointer h-8 ${
                    !cartaSelecionada
                      ? "bg-slate-600 text-white"
                      : "bg-slate-300 text-slate-700"
                  }`}
                  onClick={() => handleCartaClick(null)}
                >
                  Todos de {secretariaSelecionada.nome}
                </p>
                {servicos.map((servico, index) => (
                  <li onClick={() => handleCartaClick(servico)} key={index}>
                    <p
                      className={`p-1 px-3 rounded-full cursor-pointer h-8 ${
                        cartaSelecionada === servico
                          ? "bg-slate-600 text-white"
                          : "bg-slate-300 text-slate-700"
                      }`}
                    >
                      {servico.nome}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CARTAS DOS SERVICOS */}
          {(() => {
            if (secretariaSelecionada === null) {
              // Se uma das condições for verdadeira, renderiza a lista de todas as secretarias
              return secretariasData.secretarias.map(
                (secretaria, indexSecretaria) => (
                  <React.Fragment key={indexSecretaria}>
                    <p className="mb-4 mt-8 uppercase text-sm font-semibold tracking-wide">
                      {secretaria.nome}
                    </p>
                    {secretaria.servicos.map((servico, indexServico) => (
                      <ul
                        className="grid md:grid-cols-2 gap-2 mt-2 "
                        key={indexServico}
                      >
                        {servico.cartas.map((carta, indexCarta) => (
                          <li
                            className="relative list-none w-full xl:pb-28 pt-24 bg-slate-50 p-5 rounded-lg cursor-pointer hover:bg-white hover:drop-shadow-xl transition-all ease-in duration-150"
                            key={indexCarta}
                          >
                            <a href={carta.link}>
                              <Image
                                width={50}
                                height={50}
                                src={carta.avatar}
                                alt="Avatar"
                                className="w-24 h-24 absolute object-cover rounded-full top-5 right-10"
                              />
                              <p className="p-1 px-3 bg-slate-300 w-fit rounded-full">
                                {servico.nome}
                              </p>
                              <p className="font-bold my-2">{carta.titulo}</p>
                              <p className="line-clamp-4">{carta.descricao}</p>
                              <div className="xl:absolute mt-10 xl:mt-0 bottom-5 xl:right-5 flex w-full xl:w-auto mx-auto xl:mx-5 items-center justify-center gap-2 font-bold border rounded-md py-1 px-4">
                                <p>BAIXAR PDF</p>
                                <Image
                                  src={require("../../public/images/icon-pdf.png")}
                                  alt="Ícone PDF"
                                  className="w-12 text-end "
                                />
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </React.Fragment>
                )
              );
            } else if (cartaSelecionada !== null) {
              // Se cartaSelecionada não for nula, renderiza os itens do submenu
              return (
                <>
                  <p className="mt-6 uppercase text-sm font-semibold tracking-wide">
                    {cartaSelecionada.nome}
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2 mt-5">
                    {secretariaSelecionada.servicos.map(
                      (servico, indexServico) =>
                        cartaSelecionada.cartas.map((carta, indexCarta) => (
                          <li
                            className="relative list-none w-full xl:pb-28 pt-24 bg-slate-50 p-5 rounded-lg cursor-pointer hover:bg-white hover:drop-shadow-xl transition-all ease-in duration-150"
                            key={indexCarta}
                          >
                            <a href={carta.link}>
                              <Image
                                src={carta.avatar}
                                alt="Avatar"
                                className="w-24 h-24 absolute object-cover rounded-full top-5 right-10"
                              />
                              {/* <img src={carta.avatar} alt="Avatar" className="w-10 h-10" /> */}
                              <p className="p-1 px-3 bg-slate-300 w-fit rounded-full">
                                {servico.nome}
                              </p>
                              <p className="font-bold my-2">{carta.titulo}</p>
                              <p>{carta.descricao}</p>
                              <div className="xl:absolute mt-10 xl:mt-0 bottom-5 xl:right-5 flex w-full xl:w-auto mx-auto xl:mx-5 items-center justify-center gap-2 font-bold border rounded-md py-1 px-4">
                                <p>BAIXAR PDF</p>
                                <Image
                                  width={50}
                                  height={50}
                                  src={require("../../public/images/icon-pdf.png")}
                                  alt="Ícone PDF"
                                  className="w-12 text-end "
                                />
                              </div>
                            </a>
                          </li>
                        ))
                    )}
                  </ul>
                </>
              );
            } else {
              // Caso contrário, renderiza apenas a secretariaSelecionada
              return (
                <>
                  <p className="mt-6 uppercase text-sm font-semibold tracking-wide">
                    {secretariaSelecionada.nome}
                  </p>
                  <ul className="flex flex-col gap-2 mt-5">
                    {secretariaSelecionada.servicos.map(
                      (servico, indexServico) => (
                        <ul
                          key={indexServico}
                          className="list-none w-full grid md:grid-cols-2 flex-col gap-2  rounded-lg"
                        >
                          {servico.cartas.map((carta, indexCarta) => (
                            <li
                              key={indexCarta}
                              className="relative list-none w-full xl:pb-28 pt-24 bg-slate-50 p-5 rounded-lg cursor-pointer hover:bg-white hover:drop-shadow-xl transition-all ease-in duration-150"
                            >
                              <a href={carta.link}>
                                <Image
                                  src={carta.avatar}
                                  width={50}
                                  height={50}
                                  alt="Avatar"
                                  className="w-24 h-24 absolute object-cover rounded-full top-5 right-10"
                                />
                                {/* <img src={carta.avatar} alt="Avatar" className="w-10 h-10" /> */}
                                <p className="p-1 px-3 bg-slate-300 w-fit rounded-full">
                                  {servico.nome}
                                </p>
                                <p className="font-bold my-2">{carta.titulo}</p>
                                <p>{carta.descricao}</p>
                                <div className="xl:absolute mt-10 xl:mt-0 bottom-5 xl:right-5 flex w-full xl:w-auto mx-auto xl:mx-5 items-center justify-center gap-2 font-bold border rounded-md py-1 px-4">
                                  <p>BAIXAR PDF</p>
                                  <Image
                                    src={require("../../public/images/icon-pdf.png")}
                                    alt="Ícone PDF"
                                    className="w-12 text-end "
                                  />
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )
                    )}
                  </ul>
                </>
              );
            }
          })()}
        </section>
      </main>
    </>
  );
}
