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

export default function Page() {
  return (
    <SiteLayout>
      <Head title="PACOTE DE VALOR">
        <meta
          head-key="description"
          name="description"
          content="Conheça o Pacote de Valor da Petroplus: estrutura, serviços, informações e produtos que geram resultados sustentáveis para nossos clientes."
        />
      </Head>

      {/* Hero Banner Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/illust/pacote-de-valor/banner-pacote-de-valor.png"
          alt="Pacote de Valor banner"
          className="w-full object-cover md:max-h-112.5"
        />
        <div className="absolute inset-0 bg-petroplus-orange/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="absolute inset-0 mx-auto flex w-[80%] max-w-xs items-center justify-center md:max-w-none"
        >
          <h1 className="text-center text-xl font-bold text-white lg:text-5xl">
            ESTRUTURA, SERVIÇOS,
            <br />
            INFORMAÇÕES E PRODUTOS
          </h1>
        </motion.div>
      </section>

      {/* Introduction Section - White background */}
      <section className="overflow-hidden bg-white py-12 md:py-20">
        <div className="mx-auto flex w-[90%] flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <motion.div
            variants={fadeRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4 md:w-1/2"
          >
            <p className="text-xs leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
              Nosso compromisso é construir{' '}
              <strong className="font-bold text-petroplus-gray-700">
                a satisfação do cliente por meio de uma atuação diferenciada,
              </strong>{' '}
              baseada em qualidade, proximidade e geração de valor.
            </p>
            <p className="text-xs leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
              Nosso modelo de valor é sustentado por{' '}
              <strong className="font-bold">
                quatro pilares estratégicos: estrutura, serviços, informações e
                produtos.
              </strong>{' '}
              Em cada um deles, desenvolvemos{' '}
              <strong className="font-bold">soluções personalizadas,</strong>{' '}
              alinhadas às necessidades específicas de cada cliente, com foco em
              geração de valor, performance e construção de parcerias de longo
              prazo.
            </p>
          </motion.div>

          <motion.div
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center justify-center md:w-1/2"
          >
            <img
              src="/illust/pacote-de-valor/pacote-de-valor.png"
              alt="Pacote de Valor - 4 pilares: Estrutura, Serviço, Produtos, Informação"
              className="h-auto w-full max-w-md md:max-w-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Four Pillars Section - Orange background */}
      {/* Mobile */}
      <div className="md:hidden">
        <section className="overflow-hidden bg-petroplus-orange py-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mx-auto flex w-[90%] flex-col gap-6"
          >
            {/* ESTRUTURA Card */}
            <motion.div
              variants={fadeUpVariant}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h3 className="mb-3 text-sm font-bold text-petroplus-orange">
                ESTRUTURA
              </h3>
              <p className="mb-3 text-xs leading-relaxed text-petroplus-gray-700">
                Base para a construção de relacionamento sólido e sustentável:
              </p>
              <ul className="flex flex-col gap-1.5 text-xs leading-relaxed text-petroplus-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>Uma rede de geração de confiança;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>
                    Atendimento orientado às necessidades do cliente;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>
                    Planejamento e organização da atuação comercial;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>
                    Visitas periódicas e acompanhamento contínuo;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>Capacitação de equipe no ponto de venda;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>Ações de incentivo e relacionamento.</span>
                </li>
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-petroplus-gray-700">
                <strong className="font-bold">Resultado:</strong>{' '}
                fortalecimento da parceria, credibilidade e fidelização.
              </p>
            </motion.div>

            {/* SERVIÇO Card */}
            <motion.div
              variants={fadeUpVariant}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h3 className="mb-3 text-sm font-bold text-petroplus-orange">
                SERVIÇO
              </h3>
              <p className="mb-3 text-xs leading-relaxed text-petroplus-gray-700">
                Capacitar e otimizar para criar resultados:
              </p>
              <ul className="flex flex-col gap-1.5 text-xs leading-relaxed text-petroplus-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>
                    Ações de merchandising no ponto de venda;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>
                    Capacitação contínua das equipes;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>
                    Diagnóstico e recomendação de mix ideal de produtos;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>
                    Consulte, precisa e reposição de estoque.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-petroplus-gray-700">
                <strong className="font-bold">Resultado:</strong>{' '}
                aumento de eficiência operacional e crescimento sustentável das
                vendas.
              </p>
            </motion.div>

            {/* PRODUTO Card */}
            <motion.div
              variants={fadeUpVariant}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h3 className="mb-3 text-sm font-bold text-petroplus-orange">
                PRODUTO
              </h3>
              <p className="mb-3 text-xs leading-relaxed text-petroplus-gray-700">
                Qualidade e confiabilidade que sustentam a entrega:
              </p>
              <ul className="flex flex-col gap-1.5 text-xs leading-relaxed text-petroplus-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>Soluções químicas de alta performance;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>
                    Produção com rigorosos padrões de qualidade, segurança e meio
                    ambiente;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>Produtos que cumprem o que prometem;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>
                    Homologações em mais de 10 montadoras;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>
                    Reconhecimento e confiança no mercado nacional.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-petroplus-gray-700">
                <strong className="font-bold">Resultado:</strong>{' '}
                tomada de decisão mais assertiva e vantagem competitiva.
              </p>
            </motion.div>

            {/* INFORMAÇÃO Card */}
            <motion.div
              variants={fadeUpVariant}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h3 className="mb-3 text-sm font-bold text-petroplus-orange">
                INFORMAÇÃO
              </h3>
              <p className="mb-3 text-xs leading-relaxed text-petroplus-gray-700">
                Inteligência de mercado a cada região:
              </p>
              <ul className="flex flex-col gap-1.5 text-xs leading-relaxed text-petroplus-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>
                    Monitoramento de ações e programas do mercado;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>
                    Compartilhamento de boas práticas entre clientes;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>
                    Sugestão de novos serviços e oportunidades;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>
                    Acompanhamento de desempenho do setor;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                  <span>Atualizações de mercado.</span>
                </li>
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-petroplus-gray-700">
                <strong className="font-bold">Resultado:</strong>{' '}
                tomada de decisão mais assertiva e vantagem competitiva.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-4 w-fit"
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="h-fit rounded-full bg-white px-8 py-2 text-xs font-bold text-petroplus-orange hover:bg-gray-100">
                  IR PARA A HOME
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </section>
      </div>

      {/* Desktop Four Pillars */}
      <div className="hidden md:block">
        <section className="overflow-hidden bg-petroplus-orange py-16 lg:py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mx-auto flex w-[90%] flex-col gap-10"
          >
            {/* Top row: ESTRUTURA + SERVIÇO */}
            <div className="grid grid-cols-2 gap-8">
              {/* ESTRUTURA */}
              <motion.div
                variants={fadeRightVariant}
                className="rounded-2xl bg-white p-8 lg:p-10"
              >
                <h3 className="mb-4 text-2xl font-bold text-petroplus-orange">
                  ESTRUTURA
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                  Base para a construção de relacionamento sólido e sustentável:
                </p>
                <ul className="flex flex-col gap-2 text-lg leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>Uma rede de geração de confiança;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Atendimento orientado às necessidades do cliente;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Planejamento e organização da atuação comercial;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Visitas periódicas e acompanhamento contínuo;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Capacitação de equipe no ponto de venda;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>Ações de incentivo e relacionamento.</span>
                  </li>
                </ul>
                <p className="mt-6 text-lg leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                  <strong className="font-bold">Resultado:</strong>{' '}
                  fortalecimento da parceria, credibilidade e fidelização.
                </p>
              </motion.div>

              {/* SERVIÇO */}
              <motion.div
                variants={fadeLeftVariant}
                className="rounded-2xl bg-white p-8 lg:p-10"
              >
                <h3 className="mb-4 text-2xl font-bold text-petroplus-orange">
                  SERVIÇO
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                  Capacitar e otimizar para criar resultados:
                </p>
                <ul className="flex flex-col gap-2 text-lg leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Ações de merchandising no ponto de venda;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Capacitação contínua das equipes;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Diagnóstico e recomendação de mix ideal de produtos;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Consulte, precisa e reposição de estoque.
                    </span>
                  </li>
                </ul>
                <p className="mt-6 text-lg leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                  <strong className="font-bold">Resultado:</strong>{' '}
                  aumento de eficiência operacional e crescimento sustentável das
                  vendas.
                </p>
              </motion.div>
            </div>

            {/* Bottom row: PRODUTO + INFORMAÇÃO */}
            <div className="grid grid-cols-2 gap-8">
              {/* PRODUTO */}
              <motion.div
                variants={fadeRightVariant}
                className="rounded-2xl bg-white p-8 lg:p-10"
              >
                <h3 className="mb-4 text-2xl font-bold text-petroplus-orange">
                  PRODUTO
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                  Qualidade e confiabilidade que sustentam a entrega:
                </p>
                <ul className="flex flex-col gap-2 text-lg leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Soluções químicas de alta performance;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Produção com rigorosos padrões de qualidade, segurança e
                      meio ambiente;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Produtos que cumprem o que prometem;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Homologações em mais de 10 montadoras;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Reconhecimento e confiança no mercado nacional.
                    </span>
                  </li>
                </ul>
                <p className="mt-6 text-lg leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                  <strong className="font-bold">Resultado:</strong>{' '}
                  tomada de decisão mais assertiva e vantagem competitiva.
                </p>
              </motion.div>

              {/* INFORMAÇÃO */}
              <motion.div
                variants={fadeLeftVariant}
                className="rounded-2xl bg-white p-8 lg:p-10"
              >
                <h3 className="mb-4 text-2xl font-bold text-petroplus-orange">
                  INFORMAÇÃO
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                  Inteligência de mercado a cada região:
                </p>
                <ul className="flex flex-col gap-2 text-lg leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Monitoramento de ações e programas do mercado;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Compartilhamento de boas práticas entre clientes;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Sugestão de novos serviços e oportunidades;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>
                      Acompanhamento de desempenho do setor;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-3 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-petroplus-gray-700" />
                    <span>Atualizações de mercado.</span>
                  </li>
                </ul>
                <p className="mt-6 text-lg leading-relaxed text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                  <strong className="font-bold">Resultado:</strong>{' '}
                  tomada de decisão mais assertiva e vantagem competitiva.
                </p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              variants={fadeUpVariant}
              className="mx-auto mt-2 w-fit"
            >
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="h-fit rounded-full bg-white px-12 py-3 text-xl font-bold text-petroplus-orange hover:bg-gray-100">
                    IR PARA A HOME
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </SiteLayout>
  );
}
