"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

import secretariasData from '../../public/secretarias.json'

function ListaSecretarias({ state }) {
  return (
    <ul className={`${state ? 'visible opacity-100 h-[500px] top-20 overflow-auto' : 'invisible opacity-0 top-14 h-0 md:visible md:opacity-100 md:h-auto'} md:flex-row md:h-auto md:top-0 overflow-hidden trasnition-all ease-in-out duration-300 h-16 flex flex-col gap-1 items-end ml-20 absolute right-0`}>

      {/* LISTA DE SECRETARIAS */}
      {secretariasData.secretarias.map((secretaria, index) => (
        <li key={index} className={`px-4 bg-[#285497] min-w-[56px] min-h-[56px] flex flex-row-reverse items-center justify-center rounded-lg shadow gap-3`}>
          <div className="min-w-[32px] min-h-[32px] p-[2px] bg-[#5792EB] rounded-lg">
            <Image
              width={32}
              height={32}
              src="/SVG/icon-fazenda.svg"
              alt="Icone fazenda"
            />
          </div>
          <p className="font-bold text-white">{secretaria.nome}</p>
        </li>
      ))

      }
    </ul>
  )
}

export default function Carta() {
  const [state, setState] = useState(false)
  const [secretarias, setSecretarias] = useState([])

  useEffect(() => {
    setSecretarias(secretariasData.secretarias);
  })

  return (
    <>
      <header className="min-h-40 bg-[#003E75] px-6 flex flex-col justify-end py-6">
        <div className="flex justify-between items-center">
          <Image
            width={42}
            height={42}
            src="/SVG/icon-carta-de-servico.svg"
            alt="Icone Carta de Servico"
          />
          <Image
            width={122.7}
            height={41.92}
            src="/images/logo-itaguai.png"
            alt="Logo de Itaguai"
          />
        </div>
        <p className="text-2xl font-medium text-white pt-6">Carta de Serviço</p>
        <p className="text-base text-[#6BC1FF] font-medium">Um compromisso com o cidadão.</p>
      </header>
      <main className="min-h-screen flex-1 bg-[#E3E6EE] p-6">
        <section>
          <nav className="flex gap-3 items-center justify-between min-w-screen  relative">
            {/* Botao Buscar todas as Buscas */}
            <div onClick={() => console.log('Carregar Todas as Cartas')} className="p-2 bg-[#233550] min-w-[56px] h-[56px] flex items-center justify-center rounded-lg cursor-pointer">
              <Image
                width={32}
                height={32}
                src="/SVG/icon-home.svg"
                alt="Icone Carta de Servico"
              />
            </div>
            <ListaSecretarias state={state} />
            <div>
              <div
                onClick={() => setState(!state)}
                className="p-4 py-[18px] bg-sky-500 min-w-[56px] h-[56px] flex flex-col  justify-between rounded-lg md:hidden cursor-pointer">
                <div className="w-full h-[3px] bg-white"></div>
                <div className="w-full h-[3px] bg-white"></div>
                <div className="w-full h-[3px] bg-white"></div>
              </div>
            </div>
          </nav>
          <ul>
            {secretariasData.secretarias.map((secretaria, indexSecretaria) => (
              <li key={indexSecretaria}>
                {secretaria.cartas.map((carta, indexCarta) => (
                  <h1>{carta.cartaNome}</h1>
                ))}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}