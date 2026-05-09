import SiteLayout from '@/layouts/site-layout';
import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import {
  fadeUpVariant,
  fadeRightVariant,
  fadeLeftVariant,
} from '@/lib/animations';
import { Download } from 'lucide-react';

interface Document {
  id: number;
  name: string;
  type: string;
  file_path: string;
}

interface Brand {
  id: number;
  name: string;
  slug: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  banner_title: string | null;
  banner_subtitle: string | null;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  subtitle: string | null;
  code: string | null;
  image: string | null;
  description: string | null;
  content_info: string | null;
  brand: Brand | null;
  category: Category;
  documents: Document[];
}

interface Props {
  product: Product;
  category: Category;
}

export default function Page({ product, category }: Props) {
  const getImageUrl = (image: string | null) => {
    if (!image) return '/illust/placeholder-product.png';
    if (image.startsWith('http') || image.startsWith('/')) return image;
    return `/storage/${image}`;
  };

  const getDocumentUrl = (filePath: string) => {
    if (filePath.startsWith('http') || filePath.startsWith('/'))
      return filePath;
    return `/storage/${filePath}`;
  };

  const getDocTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      ficha_tecnica: 'FICHA TÉCNICA',
      fispq: 'FISPQ',
      boletim: 'BOLETIM TÉCNICO',
      catalogo: 'CATÁLOGO',
    };
    return labels[type] || type.toUpperCase();
  };

  return (
    <SiteLayout>
      <Head title={`${product.name} - Produtos`}>
        <meta
          head-key="description"
          name="description"
          content={
            product.subtitle ||
            `Detalhes do produto ${product.name} distribuído pela Petroplus. Acesse fichas técnicas, boletins e catálogos.`
          }
        />
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

          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-start">
            <motion.div
              variants={fadeRightVariant}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-4 md:w-1/3 md:flex-shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="mx-auto w-48 md:w-full md:max-w-[280px]"
              >
                <img
                  src={getImageUrl(product.image)}
                  alt={product.name}
                  className="h-auto w-full object-contain drop-shadow-md"
                />
              </motion.div>

              {product.documents.length > 0 && (
                <div className="mt-4 flex w-full flex-wrap justify-center gap-2">
                  {product.documents.map((doc, index) => (
                    <motion.a
                      key={doc.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={getDocumentUrl(doc.file_path)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center gap-2 border border-petroplus-gray-300 px-4 py-2 text-[10px] font-bold text-petroplus-gray-700 uppercase transition-all hover:border-petroplus-orange hover:text-petroplus-orange hover:shadow-sm lg:text-sm"
                    >
                      {doc.name || getDocTypeLabel(doc.type)}

                      <Download size={20} />
                    </motion.a>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              variants={fadeLeftVariant}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-4 md:w-2/3"
            >
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg font-bold text-petroplus-orange lg:text-3xl"
                >
                  {product.name}
                </motion.h3>
                {product.code && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-1 text-xs text-petroplus-gray-500 lg:text-3xl lg:text-petroplus-orange"
                  >
                    {product.code}
                  </motion.p>
                )}
              </div>

              {product.subtitle && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm font-semibold text-petroplus-gray-700 italic"
                >
                  {product.subtitle}
                </motion.p>
              )}

              {product.description && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="product-description"
                >
                  <div className="prose-strong:text-petroplus-gray-900 prose prose-sm max-w-none text-petroplus-gray-700 prose-headings:text-xs prose-headings:font-bold prose-headings:text-petroplus-orange prose-headings:uppercase md:prose-headings:text-sm xl:prose-headings:text-base prose-h2:mt-6 prose-h2:mb-2 prose-h3:mt-4 prose-h3:mb-1.5 prose-p:text-xs prose-p:leading-relaxed md:prose-p:text-sm xl:prose-p:text-base xl:prose-p:leading-relaxed prose-ol:text-xs prose-ol:leading-relaxed md:prose-ol:text-sm xl:prose-ol:text-base xl:prose-ol:leading-relaxed prose-ul:text-xs prose-ul:leading-relaxed md:prose-ul:text-sm xl:prose-ul:text-base xl:prose-ul:leading-relaxed prose-li:marker:text-petroplus-orange">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {product.description}
                    </ReactMarkdown>
                  </div>
                </motion.div>
              )}

              {product.content_info && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="mt-4 mb-2 text-xs font-bold text-petroplus-orange lg:text-xl lg:leading-relaxed">
                    CONTEÚDO
                  </h3>
                  <p className="text-xs text-petroplus-gray-700 lg:text-xl lg:leading-relaxed">
                    {product.content_info}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mx-auto mt-8 w-fit"
          >
            <Link href={`/produtos/${category.slug}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="h-fit rounded-full bg-petroplus-orange px-8 py-2 text-xs font-bold text-white hover:bg-orange-600 md:px-12 md:py-3 lg:text-xl lg:leading-relaxed">
                  VOLTAR
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
