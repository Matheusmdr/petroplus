import SiteLayout from '@/layouts/site-layout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

interface Brand {
  id: number;
  name: string;
  slug: string;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  brand_id: number | null;
  brand: Brand | null;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  banner_image: string | null;
  banner_title: string | null;
  banner_subtitle: string | null;
}

interface Props {
  category: Category;
  products: Product[];
  brands: Brand[];
}

export default function Page({ category, products, brands }: Props) {
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);

  const toggleBrand = (brandId: number) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId],
    );
  };

  const filteredProducts =
    selectedBrands.length === 0
      ? products
      : products.filter(
          (p) => p.brand_id && selectedBrands.includes(p.brand_id),
        );

  const getImageUrl = (image: string | null) => {
    if (!image) return '/illust/placeholder-product.png';
    if (image.startsWith('http') || image.startsWith('/')) return image;
    return `/storage/${image}`;
  };

  return (
    <SiteLayout>
      <Head title={`${category.name} - Produtos`}>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>

      {/* Hero Banner - hidden on desktop */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden md:hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src={
            category.banner_image
              ? getImageUrl(category.banner_image)
              : '/illust/marcas-banner.png'
          }
          alt={category.name}
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="absolute inset-0 mx-auto flex w-[80%] max-w-xs items-center justify-center"
        >
          <h1 className="text-center text-xl font-bold text-white">
            {category.banner_title || category.name}
            {category.banner_subtitle && (
              <>
                <br />
                {category.banner_subtitle}
              </>
            )}
          </h1>
        </motion.div>
      </section>

      {/* Products Listing */}
      <section className="bg-white py-12 overflow-hidden">
        <div className="mx-auto flex w-[80%] max-w-7xl flex-col gap-6">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-xs text-petroplus-orange md:text-sm">
              CONHEÇA NOSSOS PRODUTOS
            </h2>
            <h2 className="text-lg font-bold text-black md:text-2xl">
              NOSSA LINHA COMPLETA
              <br />
              DE SOLUÇÕES
            </h2>
          </motion.div>

          {/* Brand Filter */}
          {brands.length > 0 && (
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
            >
              <p className="mb-2 text-xs text-petroplus-gray-700 md:text-sm">
                Filtrar por marca:
              </p>
              <div className="flex flex-wrap gap-4">
                {brands.map((brand) => (
                  <label
                    key={brand.id}
                    className="flex cursor-pointer items-center gap-1.5 text-xs text-petroplus-gray-700 md:text-sm transition-colors hover:text-petroplus-orange"
                  >
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand.id)}
                      onChange={() => toggleBrand(brand.id)}
                      className="h-3.5 w-3.5 rounded border-gray-300 text-petroplus-orange accent-petroplus-orange focus:ring-petroplus-orange md:h-4 md:w-4 transition-all"
                    />
                    {brand.name}
                  </label>
                ))}
              </div>
            </motion.div>
          )}

          {/* Products Grid */}
          <motion.div 
            layout
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
            }}
            className="grid grid-cols-3 gap-4 md:grid-cols-6 md:gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/produtos/${category.slug}/${product.slug}`}
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-50 shadow-sm transition-shadow group-hover:shadow-md">
                      <img
                        src={getImageUrl(product.image)}
                        alt={product.name}
                        className="h-full w-full object-contain p-1 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <p className="text-center text-[10px] leading-tight font-bold text-petroplus-gray-700 uppercase transition-colors group-hover:text-petroplus-orange md:text-xs">
                      {product.name}
                    </p>
                    <span className="hidden rounded-full bg-petroplus-orange px-4 py-1 text-[10px] font-bold text-white uppercase transition-colors group-hover:bg-orange-600 md:inline-block">
                      MAIS INFORMAÇÕES
                    </span>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="py-12 text-center"
            >
              <p className="text-sm text-petroplus-gray-500">
                Nenhum produto encontrado para os filtros selecionados.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
