import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '@/lib/animations';

export default function Page() {
  return (
    <SiteLayout>
      <Head title="Política de SGI">
        <meta head-key="description" name="description" content="A Política de Sistema de Gestão Integrado da Petroplus garante conformidade, qualidade e compromisso ambiental em todos os nossos processos logísticos e operacionais." />
      </Head>
      <section className="relative flex flex-col items-center justify-center">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/illust/sobre-banner.png"
          alt="Banner Política de SGI"
          className="w-full object-cover md:hidden md:max-h-112.5"
        />
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/illust/sobre-banner-desktop.png"
          alt="Banner Política de SGI"
          className="hidden w-full object-cover md:max-h-112.5 lg:block"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="absolute inset-0 mx-auto flex w-[80%] max-w-xs items-center justify-center md:max-w-none"
        >
          <h1 className="text-center text-xl font-bold uppercase text-white lg:text-5xl">
            Política de Sistema de<br className="md:hidden" /> Gestão Integrado
          </h1>
        </motion.div>
      </section>

      <section className="overflow-hidden bg-white py-12 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUpVariant}
          className="mx-auto flex w-[90%] max-w-4xl flex-col font-sans text-gray-800 md:w-[85%]"
        >
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm md:p-8">
            <ul className="list-disc space-y-4 pl-6 text-justify leading-relaxed text-[#182951]">
              <li>
                Foco nos nossos clientes, para que possamos garantir sua
                satisfação através da oferta de produtos automotivos e serviços
                com alto padrão de qualidade;
              </li>
              <li>Foco no relacionamento com as partes interessadas;</li>
              <li>
                Garantir a conformidade dos requisitos legais e estatutários
                aplicáveis ao negócio;
              </li>
              <li>
                Buscar as melhores práticas para a preservação do meio ambiente e
                prevenção da poluição, principalmente de seus aspectos e impactos
                significativos, realizando adequadamente o descarte de resíduos
                contaminados, tratamento dos efluentes industriais e otimização do
                uso de recursos naturais;
              </li>
              <li>
                Praticar a gestão integrada com o apoio da alta direção e de todos
                os colaboradores, para garantia de um processo dinâmico, evolutivo
                e de melhoria contínua;
              </li>
              <li>
                Engajamento no desenvolvimento dos colaboradores, estimulando o
                trabalho em equipe e valorizando a busca por soluções simples e
                efetivas;
              </li>
              <li>
                Avaliar e reconhecer o trabalho realizado pelos colaboradores.
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
