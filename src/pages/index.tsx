import { Carousel } from "@/components/Carousel";
import CountdownTimer from "@/components/CountdownTimer";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { NavBar } from "@/components/NavBar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const targetDate = new Date('2025-01-11T23:59:59');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <>
          <NavBar />
          <Header />
          <Carousel />
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full pb-10 flex flex-col justify-center items-center gap-5"
          >
            <h1 className="text-2xl font-semibold font-sans">Contagem Regressiva</h1>
            <div className="flex gap-5">
              <CountdownTimer targetDate={targetDate} />
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="my-16 w-full"
          >
            <div className="flex justify-center items-center">
              <p className="max-w-6xl px-5 sm:px-10 md:px-36 text-center text-lg">
                Criamos esse site para compartilhar com vocês os detalhes da organização do nosso casamento.
                Estamos muito felizes e contamos com a presença de todos no nosso grande dia!
                Aqui vocês encontrarão também dicas para hospedagem, salão de beleza, trajes, estacionamento, etc.
                Ah, é importante também confirmar sua presença.
                Para isto contamos com sua ajuda clicando no menu “Confirme sua Presença” e preenchendo os dados necessários.
                Para nos presentear, escolha qualquer item da Lista de Casamento, seja um item de algum dos sites, lojas físicas,
                ou então vocês podem utilizar a opção de cotas. Fiquem à vontade! Aguardamos vocês no nosso grande dia!
              </p>
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full pb-10 flex flex-col justify-center items-center gap-10"
          >
            <div>
              <h1 className="text-2xl font-semibold">O CASAL</h1>
            </div>
            <div className="flex gap-20">
              <Image src="/karen.png" alt="Karen" width={200} height={200} quality={100} />
              <Image src="/felipe.png" alt="Karen" width={200} height={200} quality={100} />
            </div>
          </motion.section>
        </>
      )}
    </>
  );
}
