import SiteLayout from '@/layouts/site-layout';
import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer, fadeRightVariant, fadeLeftVariant } from '@/lib/animations';

interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string | null;
  banner_image: string | null;
  banner_title: string | null;
  banner_subtitle: string | null;
  description: string | null;
  sort_order: number;
}

interface Props {
  categories: Category[];
}

// Default SVG icons for categories (fallback)
const defaultIcons: Record<string, React.ReactNode> = {
  'linha-leve': (
    <svg viewBox="0 0 80 80" fill="none" className="h-16 w-16">
      <path
        d="M15 50 C15 35, 25 25, 40 25 C55 25, 65 35, 65 50"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <circle
        cx="25"
        cy="52"
        r="8"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <circle
        cx="55"
        cy="52"
        r="8"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M20 40 L30 30 L50 30 L58 38"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
    </svg>
  ),
  'linha-pesada': (
    <svg viewBox="0 0 80 80" fill="none" className="h-16 w-16">
      <rect
        x="10"
        y="30"
        width="60"
        height="25"
        rx="3"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <circle
        cx="22"
        cy="58"
        r="7"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <circle
        cx="58"
        cy="58"
        r="7"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <rect
        x="5"
        y="35"
        width="15"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
    </svg>
  ),
  agricola: (
    <svg viewBox="0 0 80 80" fill="none" className="h-16 w-16">
      <circle
        cx="25"
        cy="50"
        r="15"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <circle
        cx="58"
        cy="50"
        r="8"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M25 35 L45 28 L60 35 L60 42"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <line
        x1="25"
        y1="35"
        x2="25"
        y2="50"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  calcados: (
    <svg viewBox="0 0 80 80" fill="none" className="h-16 w-16">
      <path
        d="M15 45 C15 35, 25 28, 40 28 C50 28, 60 32, 65 40 L68 50 L15 50 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M12 50 L68 50 L70 55 L10 55 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <line
        x1="30"
        y1="35"
        x2="35"
        y2="35"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="40"
        y1="32"
        x2="45"
        y2="32"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  'private-label': (
    <svg viewBox="0 0 80 80" fill="none" className="h-16 w-16">
      <polygon
        points="40,15 48,32 67,34 53,48 56,67 40,58 24,67 27,48 13,34 32,32"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  ),
  terceirizacao: (
    <svg viewBox="0 0 80 80" fill="none" className="h-16 w-16">
      <path
        d="M25 40 L40 25 L55 40"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M55 40 L40 55 L25 40"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <line
        x1="15"
        y1="40"
        x2="25"
        y2="40"
        stroke="currentColor"
        strokeWidth="3"
      />
      <line
        x1="55"
        y1="40"
        x2="65"
        y2="40"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  ),
};

function CategoryIcon({ category }: { category: Category }) {
  if (category.icon) {
    return (
      <img
        src={
          category.icon.startsWith('http') || category.icon.startsWith('/')
            ? category.icon
            : `/storage/${category.icon}`
        }
        alt={category.name}
        className="h-16 w-16 object-contain"
      />
    );
  }

  const fallback = defaultIcons[category.slug];
  if (fallback) {
    return <>{fallback}</>;
  }

  // Generic fallback
  return (
    <div className="flex h-16 w-16 items-center justify-center text-2xl font-bold text-petroplus-orange md:h-20 md:w-20">
      {category.name.charAt(0)}
    </div>
  );
}

export default function Page({ categories }: Props) {
  return (
    <SiteLayout>
      <Head title="Produtos">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>

      {/* Hero Banner */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/illust/marcas-banner.png"
          alt="Nossos Produtos"
          className="w-full object-cover md:h-[400px]"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="absolute inset-0 mx-auto flex w-[80%] max-w-xs items-center justify-center md:max-w-none"
        >
          <h1 className="text-center text-xl font-bold text-white md:text-5xl">
            LINHA AUTOMOTIVA
            <br />
            AGRÍCOLA E CALÇADISTA
          </h1>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white py-12 md:py-20 overflow-hidden">
        <div className="mx-auto flex w-[80%] max-w-6xl flex-col gap-8">
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-xs text-petroplus-orange md:text-sm">
              CONHEÇA NOSSOS PRODUTOS
            </h2>
            <h2 className="text-lg font-bold text-black md:text-2xl">
              NOSSA LINHA COMPLETA
              <br />
              DE SOLUÇÕES
            </h2>
            <p className="mt-2 text-xs text-petroplus-gray-700 md:text-sm">
              Selecione uma das linhas para mais informações:
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6"
          >
            {categories.map((category) => (
              <motion.div variants={fadeUpVariant} key={category.id}>
                <Link
                  href={`/produtos/${category.slug}`}
                  className="group flex flex-col items-center gap-3"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-petroplus-orange text-petroplus-orange transition-all duration-300 group-hover:bg-petroplus-orange group-hover:text-white group-hover:shadow-lg md:h-32 md:w-32"
                  >
                    <CategoryIcon category={category} />
                  </motion.div>
                  <span className="text-center text-sm font-semibold text-petroplus-orange transition-colors group-hover:text-orange-600 md:text-base">
                    {category.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-4 w-fit"
          >
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="h-fit rounded-full bg-petroplus-orange px-8 py-2 text-xs font-bold text-white hover:bg-orange-600 md:px-12 md:py-3 md:text-sm">
                  IR PARA A HOME
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
