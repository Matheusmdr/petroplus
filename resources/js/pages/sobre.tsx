import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const missionItems = [
  {
    title: 'MISSÃO',
    content:
      'Ter a melhor rede de distribuição e prestação de serviços diferenciados do mercado automotivo e agrícola brasileiro, oferecendo produtos de alta tecnologia e performance, gerando rentabilidade para a empresa, seus clientes e parceiros.',
  },
  {
    title: 'VISÃO',
    content:
      'Ampliar o mix de produtos e serviços diferenciados nos segmentos em que atua, por meio de exclusiva rede de distribuição.',
  },
  {
    title: 'VALORES',
    content:
      'A Petroplus conta com uma equipe de profissionais treinados e preparados, que almeja um crescimento sustentável e orgânico no ambiente corporativoTodas as ações e objetivos traçados pela empresa tem como base princípios éticos e morais, sendo vedado qualquer tipo de transgressão neste sentido.',
  },
];

import {
  fadeUpVariant,
  staggerContainer,
  fadeRightVariant,
  fadeLeftVariant,
} from '@/lib/animations';

export default function Page() {
  const imgPath = '/illust';
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <SiteLayout>
      <Head title="SOBRE NÓS">
        <meta head-key="description" name="description" content="Nossa história começou em 1994, nos tornamos detentores dos direitos da marca STP no Brasil. Hoje, a Petroplus é referência em soluções químicas." />
      </Head>
      <section className="relative flex flex-col items-center justify-center">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/illust/sobre-banner.png"
          alt="Sobre nós banner"
          className="w-full object-cover md:hidden md:max-h-112.5"
        />
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/illust/sobre-banner-desktop.png"
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
          <h1 className="text-xl font-bold text-white lg:text-5xl">
            SOBRE NÓS
          </h1>
        </motion.div>
      </section>

      <section className="overflow-hidden bg-white py-8 md:py-16">
        <div className="mx-auto flex w-[90%] flex-col gap-6 md:flex-row md:gap-12 lg:items-center">
          <motion.div
            variants={fadeRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-3 md:w-1/2 md:gap-5"
          >
            <div>
              <h2 className="text-xs font-semibold tracking-wider text-petroplus-orange lg:text-2xl">
                MAIS DO QUE UMA MARCA
              </h2>
              <h2 className="text-lg font-bold text-black lg:text-3xl">
                SOMOS REFERÊNCIA <br />
                EM SOLUÇÕES QUÍMICAS
              </h2>
            </div>
            <p className="text-xs leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
              Nossa história começou em 1994, quando nos tornamos detentores dos
              direitos exclusivos de importação e comercialização da marca STP
              no Brasil. A partir daí um projeto único de distribuição passou a
              ser implementado e uma rede exclusiva de atendimento começou a ser
              estruturada em todo o território nacional.
            </p>
            <p className="text-xs leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
              Evoluímos junto com o mercado, conquistando homologações na
              indústria automotiva e tornando-nos parceiros nas principais
              concessionárias do país.
            </p>
            <p className="text-xs leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
              Atualmente, aplicamos nossa excelência também nos{' '}
              <strong>setores agrícola e calçadista</strong>, colaborando com os
              líderes de mercado em cada segmento.
            </p>
          </motion.div>

          <motion.div
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <img
                src="/illust/sobre-illust.png"
                alt="Unidade fabril Petroplus"
                className="w-full rounded-lg object-cover"
              />
              <div className="absolute right-0 bottom-0 left-0 grid grid-cols-3 gap-2 p-2 md:gap-3 md:p-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-xl bg-petroplus-orange p-2 text-center text-[10px] font-bold text-white shadow-lg transition-colors hover:bg-[#d45500] md:p-3 lg:text-xl lg:leading-relaxed"
                >
                  Unidade Fabril <br /> própria com <br /> 20.000 m2
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-xl bg-petroplus-orange p-2 text-center text-[10px] font-bold text-white shadow-lg transition-colors hover:bg-[#d45500] md:p-3 lg:text-xl lg:leading-relaxed"
                >
                  7.100 m2 <br /> de área <br /> construída
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-xl bg-petroplus-orange p-2 text-center text-[10px] font-bold text-white shadow-lg transition-colors hover:bg-[#d45500] md:p-3 lg:text-xl lg:leading-relaxed"
                >
                  Armazém <br /> Logístico com <br /> 3.400 m2
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-white pb-8 md:pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto w-[85%]"
        >
          <div className="md:hidden">
            {missionItems.map((item, index) => (
              <motion.div
                variants={fadeUpVariant}
                key={index}
                className="border-b border-gray-200"
              >
                <button
                  className="flex w-full items-center justify-between py-4 text-left"
                  onClick={() =>
                    setOpenAccordion(openAccordion === index ? null : index)
                  }
                >
                  <span className="text-lg font-bold text-petroplus-orange">
                    {item.title}
                  </span>
                  <svg
                    className={`h-5 w-5 text-petroplus-orange transition-transform duration-300 ${
                      openAccordion === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openAccordion === index ? 'auto' : 0,
                    opacity: openAccordion === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 text-xs leading-relaxed text-petroplus-gray-700">
                    {item.content}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="hidden gap-6 md:grid md:grid-cols-3">
            {missionItems.map((item, index) => (
              <motion.div
                variants={fadeUpVariant}
                whileHover={{
                  y: -10,
                  boxShadow:
                    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                }}
                key={index}
                className="rounded-2xl border-2 border-petroplus-orange bg-white p-6 shadow-sm transition-all duration-300 lg:p-8"
              >
                <h3 className="mb-4 text-center text-xl font-bold text-petroplus-orange lg:text-3xl">
                  {item.title}
                </h3>
                <p className="text-center text-sm leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="overflow-hidden bg-petroplus-gray-500 py-8 md:py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto flex w-[85%] flex-col gap-6"
        >
          <motion.div variants={fadeUpVariant}>
            <h2 className="text-xs font-semibold tracking-wider text-white lg:text-2xl">
              SUSTENTABILIDADE
            </h2>
            <h2 className="text-lg font-bold text-white lg:text-3xl">
              NOSSOS SELOS
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6 md:gap-8">
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6"
            >
              <div className="w-[20%] flex-shrink-0 md:order-2 md:ml-auto lg:flex lg:justify-end">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  src={`${imgPath}/cdp-2025.png`}
                  alt="CDP 2025"
                  className="h-16 lg:h-32"
                />
              </div>
              <p className="text-xs leading-relaxed text-white md:order-1 md:w-[80%] lg:text-xl lg:leading-relaxed">
                <strong className="font-bold">CDP:</strong> Fazemos parte de um
                grupo recorde de mais de 24.800 organizações que usam dados
                ambientais para decisões sustentáveis e transformação positiva
                para o planeta.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6"
            >
              <div className="w-[20%] flex-shrink-0 md:order-2 md:ml-auto lg:flex lg:justify-end">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  src={`${imgPath}/eureciclo.png`}
                  alt="eureciclo"
                  className="h-16 w-auto object-contain lg:h-22"
                />
              </div>
              <p className="text-xs leading-relaxed text-white md:order-1 md:w-[80%] lg:text-xl lg:leading-relaxed">
                <strong className="font-bold">EU RECICLO:</strong> Parceria que
                viabiliza a Logística Reversa de Embalagens. Investimos na
                reciclagem de materiais equivalentes aos que comercializamos,
                fortalecendo o setor e apoiando seus trabalhadores.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6"
            >
              <div className="w-[20%] flex-shrink-0 md:order-2 md:ml-auto lg:flex lg:justify-end">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  src={`${imgPath}/ecovadis.png`}
                  alt="Ecovadis"
                  className="h-16 lg:h-32"
                />
              </div>
              <p className="text-xs leading-relaxed text-white md:order-1 md:w-[80%] lg:text-xl lg:leading-relaxed">
                <strong className="font-bold">ECOVADIS:</strong> Somos afiliados
                à Ecovadis, que avalia como as empresas integram
                sustentabilidade aos seus negócios e gestão, promovendo
                transparência e responsabilidade socioambiental.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="overflow-hidden bg-white py-8 md:py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto flex w-[85%] flex-col gap-6"
        >
          <motion.div variants={fadeUpVariant}>
            <h2 className="text-xs font-semibold tracking-wider text-petroplus-orange lg:text-2xl">
              NOSSO COMPROMISSO
            </h2>
            <h2 className="text-lg font-bold text-black lg:text-3xl">
              CERTIFICAÇÕES
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
            <motion.div
              variants={fadeRightVariant}
              className="flex flex-col gap-4 md:flex-1"
            >
              <p className="text-xs leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                A Petroplus atua sob os padrões da ISO 9001, assegurando
                excelência em gestão da qualidade e foco contínuo na satisfação
                dos parceiros. É certificada pela ISO 14001, reforçando seu
                compromisso com responsabilidade ambiental e conformidade legal.
                Seus produtos também atendem às exigências de segurança do
                INMETRO, garantindo confiabilidade e desempenho dentro dos mais
                rigorosos padrões do mercado brasileiro.
              </p>
              <p className="text-xs leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                Mais do que certificações, esses reconhecimentos refletem o
                compromisso permanente da empresa com tecnologia, segurança e
                eficiência operacional.
              </p>
            </motion.div>

            <motion.div
              variants={fadeLeftVariant}
              className="flex flex-shrink-0 items-center gap-4 md:flex-col md:gap-6"
            >
              <motion.img
                whileHover={{ scale: 1.05, y: -5 }}
                src={`${imgPath}/selos-iso.png`}
                alt="ISO 9001 e ISO 14001"
                className="h-12 md:h-16 lg:h-20"
              />
              <motion.img
                whileHover={{ scale: 1.05, y: -5 }}
                src={`${imgPath}/selo-seguranca.png`}
                alt="Segurança INMETRO"
                className="h-16 md:h-20 lg:h-24"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
