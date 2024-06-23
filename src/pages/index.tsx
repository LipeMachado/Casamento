import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <section className="w-full text-center flex flex-col gap-4">
        <p className="text-base text-brand-primary">Junte-se a nós para comemorar</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl">Felipe & Karen</h1>
        <p>Jan 12, 2024 - Ranch Life</p>
      </section>
      <div className="flex justify-center my-20 mx-10">
        <Image className="rounded-xl md:rounded-2xl" width={1000} height={0} src="/bannerInicial.jpg" alt="" />
      </div>
      <section className="w-full bg-[#D7C6F1] py-10 flex flex-col justify-center items-center gap-5">
        <h4 className="text-2xl text-black font-semibold">Contagem Regressiva</h4>
        <div className="flex gap-5">
          <div className="w-20 sm:w-28 h-20 sm:h-28 bg-white rounded-2xl">

          </div>
          <div className="w-20 sm:w-28 h-20 sm:h-28 bg-white rounded-2xl">

          </div>
          <div className="w-20 sm:w-28 h-20 sm:h-28 bg-white rounded-2xl">

          </div>
        </div>
      </section>
      <section className="my-20">
        <p className="px-10 sm:px-36 text-center">
          Criamos esse site para compartilhar com vocês os detalhes da organização do nosso casamento.
          Estamos muito felizes e contamos com a presença de todos no nosso grande dia!
          Aqui vocês encontrarão também dicas para hospedagem, salão de beleza, trajes, estacionamento, etc.
          Ah, é importante também confirmar sua presença.
          Para isto contamos com sua ajuda clicando no menu “Confirme sua Presença” e preenchendo os dados necessários.
          Para nos presentear, escolha qualquer item da Lista de Casamento, seja um item de algum dos sites, lojas físicas,
          ou então vocês podem utilizar a opção de cotas. Fiquem à vontade! Aguardamos vocês no nosso grande dia!
        </p>
      </section>
    </div>
  );
}
