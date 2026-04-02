import SiteLayout from '@/layouts/site-layout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUpVariant } from '@/lib/animations';
import { Button } from '@/components/ui/button';

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
        <meta head-key="description" name="description" content={`Conheça nossa linha completa de produtos na categoria ${category.name}. Soluções de alta qualidade da Petroplus para você e sua empresa.`} />
      </Head>

      <section className="relative flex flex-col items-center justify-center overflow-hidden md:hidden">
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

      <section className="overflow-hidden bg-white py-12">
        <div className="mx-auto flex w-[90%] flex-col gap-6">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-xs text-petroplus-orange lg:text-2xl">
              CONHEÇA NOSSOS PRODUTOS
            </h2>
            <h2 className="text-lg font-bold text-black lg:text-3xl">
              NOSSA LINHA COMPLETA
              <br />
              DE SOLUÇÕES
            </h2>
          </motion.div>

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
                    className="flex cursor-pointer items-center gap-1.5 text-xs text-petroplus-gray-700 transition-colors hover:text-petroplus-orange md:text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand.id)}
                      onChange={() => toggleBrand(brand.id)}
                      className="h-3.5 w-3.5 rounded border-gray-300 text-petroplus-orange accent-petroplus-orange transition-all focus:ring-petroplus-orange md:h-4 md:w-4"
                    />
                    {brand.name}
                  </label>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            layout
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
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
                    <div className="aspect-square w-full overflow-hidden rounded-lg">
                      <img
                        src={getImageUrl(product.image)}
                        alt={product.name}
                        className="h-full w-full object-contain transition-transform duration-300"
                      />
                    </div>
                    <p className="text-center text-[10px] leading-tight font-bold text-petroplus-gray-700 uppercase transition-colors group-hover:text-petroplus-orange lg:text-xl lg:leading-relaxed">
                      {product.name}
                    </p>
                    <span className="hidden rounded-full bg-petroplus-orange px-4 py-1 text-[10px] font-bold text-white uppercase transition-colors group-hover:bg-orange-600 md:inline-block lg:text-base">
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
                <Button className="h-fit rounded-full bg-petroplus-orange px-8 py-2 text-xs font-bold text-white hover:bg-orange-600 md:px-12 md:py-3 lg:text-xl lg:leading-relaxed">
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
