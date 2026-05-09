import { Button } from '@/components/ui/button';
import SiteLayout from '@/layouts/site-layout';
import { Head, Link } from '@inertiajs/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeUpVariant,
  staggerContainer,
  fadeRightVariant,
  fadeLeftVariant,
} from '@/lib/animations';
import { VideoPlayer } from '@/components/video-player';

interface Testimonial {
  id: number;
  name: string;
  role: string | null;
  quote: string;
}

interface PartnerLogo {
  id: number;
  name: string;
  logo: string;
}

interface Banner {
  id: number;
  title: string | null;
  subtitle: string | null;
  image_mobile: string;
  image_desktop: string | null;
}

interface PageProps {
  testimonials: Testimonial[];
  partnerLogos: PartnerLogo[];
  banner: Banner | null;
  homeVideoUrl: string;
}

export default function Page({
  testimonials,
  partnerLogos,
  banner,
  homeVideoUrl,
}: PageProps) {
  const logos = partnerLogos.map((pl) => ({
    name: pl.name,
    url:
      pl.logo.startsWith('http') || pl.logo.startsWith('/')
        ? pl.logo
        : `/storage/${pl.logo}`,
  }));

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
      <Head title="Home">
        <meta
          head-key="description"
          name="description"
          content="A Petroplus atua há mais de 30 anos no desenvolvimento de soluções químicas para os setores automotivo, agrícola e calçadista no Brasil."
        />
      </Head>

      <section className="relative flex h-[70vh] flex-col items-center justify-center overflow-hidden md:h-[90vh]">
        <motion.video
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/video-mobile.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover md:hidden"
        />
        <motion.video
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/video-desktop.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="absolute mx-auto w-[80%] max-w-xs lg:max-w-6xl"
        >
          <h1 className="text-3xl text-white lg:text-5xl">
            <strong className="font-bold">PETROPLUS</strong>
          </h1>
          <p className="mt-2 max-w-xl text-base font-medium text-white lg:text-2xl">
            Indústria química especializada no desenvolvimento e na produção de
            soluções para os setores automotivo, agrícola e calçadista.
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
            <VideoPlayer embedUrl={homeVideoUrl} />
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
                MAIS DE 30 ANOS DE EXPERIÊNCIA
              </h2>
            </div>
            <p className="mt-2 text-xs text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
              Conheça a trajetória da Petroplus e descubra como iniciamos nossa
              história, os marcos que construímos ao longo do caminho e os
              passos que nos levaram a nos tornar referência em nossas áreas de
              atuação.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mx-auto mt-4 w-fit md:mx-0"
            >
              <Link href="/sobre">
                <Button className="h-fit rounded-full bg-petroplus-orange px-8 py-1 text-xs font-bold text-white transition-colors hover:bg-orange-600 md:px-10 md:py-3 lg:text-xl lg:leading-relaxed">
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
                              className={cn(
                                'max-h-12 w-auto object-contain transition-all duration-300',
                                logo.name.toLowerCase().includes('chrysler') &&
                                'scale-[1.8]',
                              )}
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

          {/* Desktop Infinite Scrolling Marquee */}
          <div className="hidden py-6 md:relative md:flex md:w-full md:overflow-hidden">
            <style>
              {`
                @keyframes scrollRightDesktop {
                  0% { transform: translateX(-50%); }
                  100% { transform: translateX(0%); }
                }
                .animate-scroll-right {
                  animation: scrollRightDesktop 60s linear infinite;
                  width: max-content;
                }
                .animate-scroll-right:hover {
                  animation-play-state: paused;
                }
              `}
            </style>

            {/* The Before and After gradients to create a fade effect on edges */}
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-petroplus-gray-100 to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-petroplus-gray-100 to-transparent" />

            <div className="animate-scroll-right flex items-center gap-6 px-4">
              {/* Multiplying the logos array so we have a huge seamless track */}
              {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map(
                (logo, idx) => (
                  <div
                    key={`${logo.name}-${idx}`}
                    className="flex h-24 w-48 shrink-0 items-center justify-center p-4 transition-transform duration-300 hover:scale-110"
                  >
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className={cn(
                        'max-h-full max-w-full object-contain',
                        logo.name.toLowerCase().includes('chrysler') &&
                        'scale-[1.8]',
                      )}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="animate-gradient overflow-hidden bg-gradient-to-r from-petroplus-orange via-[#FD5B1D] to-petroplus-orange bg-[length:200%_auto] py-12 md:py-16">
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
          <div>
            <span className='text-white text-center max-w-xl mx-auto w-10/12  text-xl' >
              Soluções químicas que impulsionam performance e confiabilidade automotiva. Com tecnologia, qualidade certificada e presença em toda a América Latina.
            </span>
          </div>
          <motion.img
            whileHover={{ scale: 1.05, rotate: 2 }}
            src="/illust/nossos-diferenciais.png"
            alt="nosso diferenciais"
            className="mt-4 h-auto max-w-40 drop-shadow-xl md:mx-auto lg:max-w-3xs lg:hidden"
          />
          <div className='hidden lg:flex mt-6'>
            <img src="/illust/diferenciais.webp" alt="nosso diferenciais" className='h-auto w-full' />
          </div>
          <div className="mt-6 lg:hidden">
            <ul className="flex list-disc flex-col justify-center gap-2 pl-4 text-center text-[11px] font-medium text-white md:pl-0 lg:items-center lg:text-xl lg:leading-relaxed lg:font-normal">
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

      <section
        id="pacote-de-valor"
        className="overflow-hidden bg-white py-12 md:py-20"
      >
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
            <p className="mx-auto mt-2 w-[80%] text-xs text-petroplus-gray-700 md:mx-0 md:w-full md:text-base md:leading-relaxed lg:text-xl lg:leading-relaxed">
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
                <Button className="h-fit rounded-full bg-petroplus-orange px-8 py-2 text-xs font-bold text-white hover:bg-orange-600 md:px-10 md:py-3 lg:text-xl lg:leading-relaxed">
                  CONHEÇA NOSSO PACOTE DE VALOR
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
              className="pl-[10%] drop-shadow-xl md:w-full md:rounded-lg md:pl-0 lg:hidden"
            />
            <motion.img
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ duration: 0.4 }}
              src="/illust/pacote-de-valor.webp"
              alt="Pacote de Valor"
              className="hidden w-full lg:block"
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
                    <div className="relative mx-1 mt-12 mb-4 rounded-[24px] bg-[#e6e6e6] px-6 pt-16 pb-8">
                      <div className="absolute -top-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-end justify-center overflow-hidden rounded-full bg-black">
                        <User
                          className="h-16 w-16 translate-y-2 text-white"
                          fill="currentColor"
                        />
                      </div>

                      <div className="relative text-left text-[11px] leading-relaxed font-medium text-gray-800">
                        <span className="mb-2 block font-serif text-2xl font-black text-black">
                          “
                        </span>
                        {item.quote}
                        <span className="float-right mt-1 ml-2 font-serif text-2xl font-black text-black">
                          ”
                        </span>
                      </div>
                      <div className="clear-both"></div>

                      <div className="mt-8 flex flex-col items-center justify-center">
                        <p className="text-[11px] font-bold text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-[10px] font-medium text-gray-700">
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
                className="relative mt-12 rounded-[24px] bg-[#e6e6e6] px-8 pt-16 pb-10 shadow-sm transition-transform duration-300 lg:px-12"
              >
                <div className="absolute -top-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-end justify-center overflow-hidden rounded-full bg-black shadow-inner">
                  <User
                    className="h-16 w-16 translate-y-2 text-white"
                    fill="currentColor"
                  />
                </div>

                <div className="relative text-left text-sm leading-relaxed font-medium text-gray-800 lg:text-base lg:leading-relaxed">
                  <span className="mb-3 block font-serif text-3xl font-black text-black">
                    “
                  </span>
                  {item.quote}
                  <span className="float-right mt-2 ml-2 font-serif text-3xl font-black text-black">
                    ”
                  </span>
                </div>
                <div className="clear-both"></div>

                <div className="mt-8 flex flex-col items-start justify-start">
                  <p className="text-sm font-bold text-gray-900 lg:text-base">
                    {item.name}
                  </p>
                  <p className="text-xs font-medium text-gray-700 lg:text-sm">
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
