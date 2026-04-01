import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

interface Brand {
  id: number;
  name: string;
  slug: string;
  logo: string | null;
  illustration: string | null;
  description: string | null;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

interface PageProps {
  brands: Brand[];
}

export default function Page({ brands }: PageProps) {
  return (
    <SiteLayout>
      <Head title="NOSSAS MARCAS">
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
          src="/illust/marcas-banner.png"
          alt="Nossas Marcas"
          className="w-full object-cover md:h-[350px]"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="absolute inset-0 mx-auto flex w-[80%] max-w-xs items-center justify-center md:max-w-none"
        >
          <h1 className="text-center text-xl font-bold text-white md:text-4xl">
            REFERÊNCIAS NO MERCADO
            <br />
            AUTOMOTIVO, AGRÍCOLA E CALÇADISTA
          </h1>
        </motion.div>
      </section>
      <section className="flex flex-col gap-6 bg-white py-12 md:py-20 overflow-hidden">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto flex w-[80%] max-w-6xl"
        >
          <motion.div variants={fadeUpVariant}>
            <h2 className="text-xs text-petroplus-orange md:text-sm">
              LINHA COMPLETA DE PRODUTOS
            </h2>
            <h2 className="font-bold text-black md:text-2xl">MARCAS QUE SÃO REFERÊNCIAS</h2>
          </motion.div>
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto flex w-[80%] max-w-6xl flex-col divide-y-4 divide-petroplus-gray-100"
        >
          {brands.map((brand) => (
            <motion.div variants={fadeUpVariant} whileHover={{ scale: 1.01 }} key={brand.id} className="flex flex-col gap-2 py-6 md:flex-row md:items-center md:gap-10 md:py-10 transition-transform">
              {/* Mobile: stacked, Desktop: illustration left */}
              <div className="flex flex-col items-center gap-4 md:w-1/2 md:flex-shrink-0">
                {/* Mobile: logo on top */}
                <div className="md:hidden">
                  {brand.logo && (
                    <img
                      src={
                        brand.logo.startsWith('http')
                          ? brand.logo
                          : `/storage/${brand.logo}`
                      }
                      className="max-w-24 object-contain"
                      alt={`Logo ${brand.name}`}
                    />
                  )}
                </div>
                {brand.illustration && (
                  <img
                    src={
                      brand.illustration.startsWith('http')
                        ? brand.illustration
                        : `/storage/${brand.illustration}`
                    }
                    className="w-full object-cover md:rounded-lg shadow-sm"
                    alt={`Produtos ${brand.name}`}
                  />
                )}
              </div>
              {/* Desktop: logo + description right */}
              <div className="flex flex-col gap-3 md:w-1/2">
                {/* Desktop: logo */}
                <div className="hidden md:block">
                  {brand.logo && (
                    <img
                      src={
                        brand.logo.startsWith('http')
                          ? brand.logo
                          : `/storage/${brand.logo}`
                      }
                      className="max-w-32 object-contain md:max-w-40"
                      alt={`Logo ${brand.name}`}
                    />
                  )}
                </div>
                {brand.description && (
                  <p className="text-xs whitespace-pre-line text-petroplus-gray-700 md:text-sm md:leading-relaxed">
                    {brand.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </SiteLayout>
  );
}
