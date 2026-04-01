import SiteLayout from '@/layouts/site-layout';
import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer, fadeRightVariant, fadeLeftVariant } from '@/lib/animations';

export default function Page() {
  return (
    <SiteLayout>
      <Head title="PETROPLAY">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>

      <section className="relative flex flex-col items-center justify-center overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/illust/petroplay-banner.png"
          alt="PetroPlay Banner"
          className="w-full object-cover md:h-[400px]"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="absolute inset-0 mx-auto flex w-[80%] max-w-xs items-center justify-center md:max-w-none"
        >
          <h1 className="text-xl font-bold text-white md:text-5xl text-center">
            TECNOLOGIA PARA <br />O SEU DIA A DIA
          </h1>
        </motion.div>
      </section>

      <section className="bg-white py-12 md:py-20 overflow-hidden">
        <div className="mx-auto flex w-[80%] max-w-6xl flex-col items-center gap-6 md:flex-row md:items-start md:gap-12">
          <motion.div 
            variants={fadeRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center gap-6 md:items-start md:w-1/2"
          >
            <img
              src="/illust/PETRO PLAY 1.png"
              alt="PetroPlay Logo"
              className="h-auto w-40 object-contain md:w-56"
            />
            <div className="flex flex-col gap-3">
              <div>
                <h2 className="text-xs font-bold text-black md:text-base">
                  SUA OFICINA DIGITAL NA PALMA DA MÃO!
                </h2>
                <p className="mt-2 text-xs text-petroplus-gray-700 md:text-sm">
                  O PetroPlay nasceu de uma necessidade real das concessionárias:
                  digitalizar operações, otimizar o pós-venda e acompanhar a
                  evolução do mercado automotivo.
                </p>
                <p className="mt-2 text-xs text-petroplus-gray-700 md:text-sm">
                  Uma solução pensada para quem quer se manter competitivo e
                  entregar mais valor em cada atendimento.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden md:flex md:w-1/2 md:justify-end"
          >
            <img
              src="/illust/video-preview.png"
              alt="PetroPlay em uso"
              className="w-full max-w-md rounded-lg object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white md:hidden overflow-hidden">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          src="/illust/video-preview.png"
          alt="PetroPlay em uso"
          className="mx-auto w-[80%] object-cover shadow-lg rounded-lg"
        />
      </section>

      <section className="bg-white py-12 md:py-16 overflow-hidden">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto flex w-[80%] max-w-6xl flex-col gap-4 md:flex-row md:items-start md:gap-12"
        >
          <motion.div variants={fadeRightVariant} className="flex flex-col gap-4 md:w-1/2">
            <div>
              <h2 className="text-xs font-bold text-petroplus-orange md:text-sm">
                O PETROPLAY VAI ALÉM DE UM SIMPLES <br />
                CHECKLIST DIGITAL, É UMA OFICINA <br />
                DIGITAL COMPLETA
              </h2>
            </div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src="/illust/suporte-treinamento.png"
                alt="Suporte e treinamento"
                className="h-auto w-28 md:w-36"
              />
            </motion.div>

            <ul className="flex flex-col gap-3 text-xs text-petroplus-gray-700 md:text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black" />
                <span>
                  <strong className="font-bold">Atua em toda a jornada,</strong>{' '}
                  do agendamento à entrega do veículo;
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black" />
                <span>
                  <strong className="font-bold">
                    Permite a execução de todas as etapas
                  </strong>{' '}
                  diretamente no tablet;
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black" />
                <span>
                  <strong className="font-bold">Integra e padroniza</strong> todo
                  o processo de pós-venda, com mais agilidade e controle.
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeLeftVariant} className="md:w-1/2">
            <div className="space-y-4 rounded-2xl bg-petroplus-orange p-6 text-white shadow-xl transition-transform hover:-translate-y-2 duration-300 md:p-8">
              <h3 className="mb-3 text-sm font-bold md:text-lg">
                QUADRO PRODUTIVO GRATUITO
              </h3>
              <p className="text-xs leading-relaxed md:text-sm">
                Monitore em{' '}
                <strong className="font-bold">
                  tempo real a produtividade da sua equipe
                </strong>{' '}
                e identifique gargalos com facilidade.
              </p>
              <p className="mt-3 text-xs leading-relaxed font-bold md:text-sm">
                Mais{' '}
                <strong className="font-bold">
                  controle, agilidade nas entregas e zero custo adicional
                </strong>{' '}
                para sua operação.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-petroplus-gray-100 py-12 md:py-16 overflow-hidden">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto flex w-[80%] max-w-6xl flex-col gap-4"
        >
          <div className="grid grid-cols-2 items-center divide-x-2 divide-black">
            <div className="pr-5 text-left">
              <p className="text-[10px] leading-relaxed font-bold text-petroplus-orange md:text-sm">
                DIGITALIZE SUA CONCESSIONÁRIA E TRANSFORME O PÓS-VENDA
              </p>
            </div>

            <div className="pl-5 text-left">
              <p className="text-[10px] leading-relaxed text-petroplus-gray-700 md:text-sm">
                Conte com uma solução completa e integrada para elevar a
                eficiência e a satisfação do cliente.
              </p>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} className="mx-auto mt-2 w-fit">
            <Link href="/contato">
              <Button className="h-fit rounded-full bg-petroplus-orange px-8 py-2 text-[10px] font-bold text-white hover:bg-orange-600 md:px-12 md:py-3 md:text-sm">
                ENTRAR EM CONTATO
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
