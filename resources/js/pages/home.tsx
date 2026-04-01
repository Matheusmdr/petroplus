import { Button } from '@/components/ui/button';
import SiteLayout from '@/layouts/site-layout';
import { Head, Link } from '@inertiajs/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { User, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeUpVariant,
  staggerContainer,
  fadeRightVariant,
  fadeLeftVariant,
} from '@/lib/animations';
import { VideoPlayer } from '@/components/video-player';

export default function Page() {
  const logos = [
    { name: 'BYD', url: '/logos/BYD.png' },
    { name: 'Fiat', url: '/logos/Fiat.png' },
    { name: 'Renault', url: '/logos/Renault.png' },
    { name: 'Kia', url: '/logos/kia.png' },
    { name: 'Nissan', url: '/logos/Nissan.png' },
    { name: 'Jeep', url: '/logos/Jeep.png' },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        'A parceria com a Petroplus elevou os padrões da nossa operação de pós-venda. A qualidade dos produtos é indiscutível e o suporte técnico nos ajuda a manter a excelência em nossos serviços diariamente.',
      name: 'Carlos Oliveira',
      role: 'Gerente de Pós-Venda, Concessionária Fiat',
    },
    {
      id: 2,
      quote:
        'A inovação não para na Petroplus. O sistema PetroPlay transformou a forma como lidamos com os fluxos operacionais internos, diminuindo atrasos e aumentando o nível de satisfação dos clientes.',
      name: 'João Silva',
      role: 'Diretor de Oficinas, Grupo BYD',
    },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Lógica para os dots (pontos de navegação)
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <SiteLayout>
      <Head title="Welcome">
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
          src="/illust/home-banner.png"
          alt=""
          className="w-full object-cover md:hidden"
        />
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/illust/home-banner-desktop.png"
          alt=""
          className="hidden w-full object-cover md:block md:max-h-112.5"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="absolute mx-auto w-[80%] max-w-xs lg:max-w-6xl"
        >
          <h1 className="text-3xl text-white lg:text-5xl">
            SOMOS A <br />
            <strong className="font-bold">PETROPLUS</strong>
          </h1>
          <p className="mt-2 max-w-xl text-base font-medium text-white lg:text-2xl">
            Há mais de 30 anos, atuamos como indústria química no
            desenvolvimento de soluções para os setores automotivo, agrícola e
            calçadista.
          </p>
        </motion.div>
      </section>

      <section className="overflow-hidden bg-white py-12 md:py-20">
        <div className="mx-auto flex w-[90%] flex-col gap-4 md:flex-row md:items-center md:gap-20">
          <motion.div
            variants={fadeRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden md:block md:w-1/2"
          >
            <VideoPlayer embedUrl="https://www.youtube.com/embed/Svs1uLk3M78" />
          </motion.div>

          <motion.div
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-2 md:w-1/2"
          >
            <div>
              <h2 className="text-xs font-bold text-petroplus-orange lg:text-2xl">
                REFERÊNCIA EM PRODUTOS AUTOMOTIVOS
              </h2>
              <h2 className="mt-1 font-bold text-black uppercase lg:text-3xl">
                CONHEÇA A PETROPLUS
              </h2>
            </div>
            <p className="lg: mt-2 text-xs text-petroplus-gray-700 lg:text-xl">
              Nossa história começou em 1994 ao se tornar detentora dos direitos
              de comercialização da marca STP em território nacional. De lá para
              cá, a empresa se diferencia por atuar com a melhor prestação de
              serviços do mercado, oferecendo produtos de alta tecnologia e
              rentabilidade para seus parceiros comerciais.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mx-auto mt-4 w-fit md:mx-0"
            >
              <Link href="/sobre">
                <Button className="h-fit rounded-full bg-petroplus-orange px-8 py-1 text-xs font-bold text-white transition-colors hover:bg-orange-600 md:px-10 md:py-3 lg:text-xl">
                  SOBRE NÓS
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-petroplus-gray-100 py-12 md:py-16">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto w-full max-w-4xl lg:max-w-6xl"
        >
          <h2 className="mb-10 text-center text-xs font-bold tracking-wide text-petroplus-gray-700 uppercase lg:text-2xl">
            Empresas que confiam em nós
          </h2>

          <div className="md:hidden">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {[0, 1].map((pageIndex) => (
                  <CarouselItem key={pageIndex}>
                    <div className="grid grid-cols-3 items-center justify-items-center gap-8 px-4">
                      {logos
                        .slice(pageIndex * 3, (pageIndex + 1) * 3)
                        .map((logo) => (
                          <div
                            key={logo.name}
                            className="flex h-24 w-full items-center justify-center"
                          >
                            <img
                              src={logo.url}
                              alt={logo.name}
                              className="max-h-12 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
                            />
                          </div>
                        ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  className={cn(
                    'h-3 w-3 rounded-full border border-zinc-300 transition-all',
                    current === i ? 'bg-petroplus-orange' : 'bg-transparent',
                  )}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Ir para slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden md:grid md:grid-cols-6 md:items-center md:justify-items-center md:gap-8 md:px-4"
          >
            {logos.map((logo) => (
              <motion.div
                variants={fadeUpVariant}
                whileHover={{ scale: 1.1 }}
                key={logo.name}
                className="flex h-24 w-full items-center justify-center"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-h-14 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="overflow-hidden bg-petroplus-orange py-12 md:py-16">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto flex w-[80%] max-w-6xl flex-col gap-4 space-y-2 md:items-center md:text-center"
        >
          <div>
            <h2 className="text-xl font-bold text-white md:text-3xl">
              NOSSOS DIFERENCIAIS
            </h2>
          </div>
          <motion.img
            whileHover={{ scale: 1.05, rotate: 2 }}
            src="/illust/nossos-diferenciais.png"
            alt="nosso diferenciais"
            className="mt-4 h-auto max-w-40 drop-shadow-xl md:mx-auto lg:max-w-3xs"
          />
          <div className="mt-6">
            <ul className="flex list-disc flex-col justify-center gap-2 pl-4 text-center text-[11px] font-medium text-white md:pl-0 lg:items-center lg:text-xl lg:font-normal">
              <li className="w-fit">
                Rede de distribuição e unidade fabril própria
              </li>
              <li className="w-fit">Certificações ISO e INMETRO</li>
              <li className="w-fit">Homologação em mais de 10 montadoras</li>
              <li className="w-fit">Atuação no Brasil e América Latina</li>
            </ul>
          </div>
        </motion.div>
      </section>

      <section className="id='pacote-de-valor' overflow-hidden bg-white py-12 md:py-20">
        <div className="mx-auto flex flex-col gap-6 space-y-2 md:flex-row md:items-center md:gap-20 md:space-y-0 lg:w-[90%]">
          <motion.div
            variants={fadeRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-3 md:order-1 md:w-1/2"
          >
            <div className="mx-auto w-[80%] md:mx-0 md:w-full">
              <h2 className="text-xs font-bold tracking-widest text-petroplus-orange uppercase lg:text-2xl">
                CONHEÇA O NOSSO
              </h2>
              <h2 className="mt-1 text-xl font-bold text-black md:text-3xl">
                PACOTE DE VALOR
              </h2>
            </div>
            <p className="mx-auto mt-2 w-[80%] text-xs text-petroplus-gray-700 md:mx-0 md:w-full md:text-base md:leading-relaxed lg:text-xl">
              <strong className="text-petroplus-gray-900 font-bold">
                Acreditamos que o sucesso dos nossos clientes é o nosso maior
                resultado.
              </strong>{' '}
              <br />
              <br />
              Mais do que fabricar produtos químicos e lubrificantes,
              desenvolvemos soluções completas que aumentam a eficiência e a
              rentabilidade de quem confia na nossa marca. Nosso compromisso é
              unir inovação, qualidade e sustentabilidade, gerando valor em toda
              a cadeia produtiva.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mx-auto mt-4 w-fit md:mx-0"
            >
              <Link href="/sobre">
                <Button className="h-fit rounded-full bg-petroplus-orange px-8 py-2 text-xs font-bold text-white hover:bg-orange-600 md:px-10 md:py-3 lg:text-xl">
                  SAIBA MAIS
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 md:order-2 md:mt-0 md:w-1/2"
          >
            <motion.img
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ duration: 0.4 }}
              src="/illust/pacote-de-valor.png"
              alt="Pacote de Valor"
              className="pl-[10%] drop-shadow-xl md:w-full md:rounded-lg md:pl-0"
            />
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-16 md:py-20">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto lg:w-[90%]"
        >
          <div className="mx-auto w-[80%] md:mx-0 md:w-full">
            <h2 className="text-xs font-bold tracking-widest text-petroplus-orange uppercase lg:text-2xl">
              Quem usa confia
            </h2>
            <h2 className="mt-1 text-xl font-bold text-black uppercase md:text-3xl">
              Soluções Petroplus
            </h2>
          </div>

          <div className="md:hidden">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((item) => (
                  <CarouselItem key={item.id}>
                    <div className="relative mx-1 mt-12 rounded-[24px] bg-white px-8 pt-16 pb-10 text-center shadow-xl">
                      <div className="absolute -top-12 left-1/2 flex h-24 w-24 -translate-x-1/2 items-end justify-center overflow-hidden rounded-full border-[6px] border-petroplus-gray-100 bg-petroplus-orange">
                        <User className="-mb-2 h-16 w-16 text-white" />
                      </div>

                      <div className="relative mb-8 inline-block text-justify text-[11px] leading-relaxed font-medium text-gray-700 italic">
                        <span className="absolute -top-3 -left-6 font-serif text-4xl font-black text-petroplus-orange opacity-40">
                          “
                        </span>
                        {item.quote}
                        <span className="absolute -bottom-6 ml-2 font-serif text-4xl font-black text-petroplus-orange opacity-40">
                          ”
                        </span>
                      </div>

                      <div className="mt-2 flex flex-col items-center justify-center border-t border-gray-100 pt-4">
                        <p className="text-[11px] font-bold text-gray-900 uppercase">
                          {item.name}
                        </p>
                        <p className="text-[10px] font-medium text-petroplus-orange">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-8 flex items-center justify-center gap-6 text-petroplus-orange">
                <CarouselPrevious className="static translate-x-0 translate-y-0 border-none bg-white shadow-md hover:bg-gray-50 hover:text-petroplus-orange [&>svg]:h-6 [&>svg]:w-6" />
                <CarouselNext className="static translate-x-0 translate-y-0 border-none bg-white shadow-md hover:bg-gray-50 hover:text-petroplus-orange [&>svg]:h-6 [&>svg]:w-6" />
              </div>
            </Carousel>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 hidden md:grid md:grid-cols-2 md:gap-10"
          >
            {testimonials.map((item) => (
              <motion.div
                variants={fadeUpVariant}
                whileHover={{ y: -5 }}
                key={item.id}
                className="relative mt-12 rounded-[24px] bg-white px-8 pt-16 pb-10 text-center shadow-xl transition-transform duration-300 lg:px-12"
              >
                <div className="absolute -top-12 left-1/2 flex h-24 w-24 -translate-x-1/2 items-end justify-center overflow-hidden rounded-full border-[6px] border-petroplus-gray-100 bg-petroplus-orange shadow-inner">
                  <User className="-mb-2 h-16 w-16 text-white" />
                </div>

                <div className="relative mt-2 mb-8 inline-block text-center text-base leading-relaxed font-medium text-gray-700 italic">
                  <span className="absolute -top-3 -left-8 font-serif text-4xl font-black text-petroplus-orange opacity-40">
                    “
                  </span>
                  {item.quote}
                  <span className="absolute -bottom-6 ml-2 font-serif text-4xl font-black text-petroplus-orange opacity-40">
                    ”
                  </span>
                </div>

                <div className="mt-2 flex flex-col items-center justify-center border-t border-gray-100 pt-6">
                  <p className="text-base font-bold text-gray-900 uppercase">
                    {item.name}
                  </p>
                  <p className="mt-1 text-base font-medium text-petroplus-orange">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
