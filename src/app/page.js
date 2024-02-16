import Image from "next/image"
export default function Carta() {
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
          <nav className="flex gap-3 items-center overflow-x-auto min-w-screen">
            {/* Botao Buscar todas as Buscas */}
            <div className="p-2 bg-[#233550] min-w-[56px] h-[56px] flex items-center justify-center rounded-lg absolute">
              <Image
                width={32}
                height={32}
                src="/SVG/icon-home.svg"
                alt="Icone Carta de Servico"
              />
            </div>
            <ul className="border-l-2 border-l-[#C9CDD7] h-16 flex gap-1 items-center ml-20">

              {/* LISTA DE SECRETARIAS */}

              <li className="px-4 bg-[#285497] min-w-[56px] min-h-[56px] flex items-center justify-center rounded-lg shadow gap-3">
                <div className="min-w-[32px] min-h-[32px] p-[2px] bg-[#5792EB] rounded-lg">
                  <Image
                    width={32}
                    height={32}
                    src="/SVG/icon-fazenda.svg"
                    alt="Icone fazenda"
                  />
                </div>
                <p className="font-bold text-white">Fazenda</p>
              </li>

              <li className="px-4 bg-[#285497] min-w-[56px] min-h-[56px] flex items-center justify-center rounded-lg shadow gap-3">
                <div className="min-w-[32px] min-h-[32px] p-[2px] bg-[#5792EB] rounded-lg">
                  <Image
                    width={32}
                    height={32}
                    src="/SVG/icon-fazenda.svg"
                    alt="Icone fazenda"
                  />
                </div>
                <p className="font-bold text-white">Fazenda</p>
              </li>

              <li className="px-4 bg-[#285497] min-w-[56px] min-h-[56px] flex items-center justify-center rounded-lg shadow gap-3">
                <div className="min-w-[32px] min-h-[32px] p-[2px] bg-[#5792EB] rounded-lg">
                  <Image
                    width={32}
                    height={32}
                    src="/SVG/icon-fazenda.svg"
                    alt="Icone fazenda"
                  />
                </div>
                <p className="font-bold text-white">Fazenda</p>
              </li>


            </ul>
          </nav>
        </section>
      </main>
    </>
  )
}