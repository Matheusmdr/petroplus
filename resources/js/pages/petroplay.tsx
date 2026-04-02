import SiteLayout from '@/layouts/site-layout';
import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import {
  fadeUpVariant,
  staggerContainer,
  fadeRightVariant,
  fadeLeftVariant,
} from '@/lib/animations';
import { VideoPlayer } from '@/components/video-player';

interface PageProps {
  petroplayVideoUrl: string;
}

export default function Page({ petroplayVideoUrl }: PageProps) {
  return (
    <SiteLayout>
      <Head title="PETROPLAY">
        <meta head-key="description" name="description" content="Acesse o PetroPlay, a plataforma exclusiva da Petroplus com treinamentos, materiais informativos e soluções focadas no mercado automotivo." />
      </Head>

      <section className="relative flex flex-col items-center justify-center overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/illust/petroplay-banner.png"
          alt="Sobre nós banner"
          className="w-full object-cover md:hidden md:max-h-112.5"
        />
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/illust/petroplay-banner-desktop.png"
          alt="Sobre nós banner"
          className="hidden w-full object-cover md:max-h-112.5 lg:block"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="absolute inset-0 mx-auto flex w-[80%] max-w-xs items-center justify-center md:max-w-none"
        >
          <h1 className="text-center text-xl font-bold text-white lg:text-5xl">
            TECNOLOGIA PARA <br />O SEU DIA A DIA
          </h1>
        </motion.div>
      </section>

      <section className="overflow-hidden bg-white py-12 md:py-20">
        <div className="mx-auto flex w-[90%] flex-col items-center gap-6 md:flex-row md:items-start md:gap-12">
          <motion.div
            variants={fadeRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center gap-6 md:w-1/2 md:items-start"
          >
            <img
              src="/illust/PETRO PLAY 1.png"
              alt="PetroPlay Logo"
              className="h-auto w-40 object-contain md:w-56"
            />
            <div className="flex flex-col gap-3">
              <div>
                <h2 className="text-xs font-bold text-black lg:text-2xl">
                  SUA OFICINA DIGITAL NA PALMA DA MÃO!
                </h2>
                <p className="mt-2 text-xs text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                  O PetroPlay nasceu de uma necessidade real das
                  concessionárias: digitalizar operações, otimizar o pós-venda e
                  acompanhar a evolução do mercado automotivo.
                </p>
                <p className="mt-2 text-xs text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                  Uma solução pensada para quem quer se manter competitivo e
                  entregar mais valor em cada atendimento.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="w-1/2">
            <VideoPlayer embedUrl={petroplayVideoUrl} />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-12 md:py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto flex w-[90%] flex-col gap-4 md:flex-row md:items-start md:gap-12"
        >
          <motion.div
            variants={fadeRightVariant}
            className="flex flex-col gap-4 md:w-1/2"
          >
            <div>
              <h2 className="text-xs font-bold text-petroplus-orange lg:text-2xl">
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

            <ul className="flex flex-col gap-3 text-xs text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
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
                  <strong className="font-bold">Integra e padroniza</strong>{' '}
                  todo o processo de pós-venda, com mais agilidade e controle.
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeLeftVariant} className="md:w-1/2">
            <div className="space-y-4 rounded-2xl bg-petroplus-orange p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-2 md:p-8">
              <h3 className="mb-3 text-sm font-bold lg:text-2xl">
                QUADRO PRODUTIVO GRATUITO
              </h3>
              <p className="text-xs leading-relaxed lg:text-xl lg:leading-relaxed">
                Monitore em{' '}
                <strong className="font-bold">
                  tempo real a produtividade da sua equipe
                </strong>{' '}
                e identifique gargalos com facilidade.
              </p>
              <p className="mt-3 text-xs leading-relaxed font-bold lg:text-xl lg:leading-relaxed">
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

      <section className="overflow-hidden bg-petroplus-gray-100 py-12 md:py-16">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto flex w-[80%] flex-col gap-4"
        >
          <div className="grid grid-cols-2 items-center divide-x-2 divide-black">
            <div className="pr-5 text-left lg:text-right">
              <p className="text-[10px] leading-relaxed font-bold text-petroplus-orange lg:text-xl lg:leading-relaxed">
                DIGITALIZE SUA CONCESSIONÁRIA E TRANSFORME O PÓS-VENDA
              </p>
            </div>

            <div className="pl-5 text-left">
              <p className="text-[10px] leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                Conte com uma solução completa e integrada para elevar a
                eficiência e a satisfação do cliente.
              </p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mx-auto mt-2 w-fit"
          >
            <Link href="/contato">
              <Button className="h-fit rounded-full bg-petroplus-orange px-8 py-2 text-[10px] font-bold text-white hover:bg-orange-600 md:px-12 md:py-3 lg:text-xl lg:leading-relaxed">
                ENTRAR EM CONTATO
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
