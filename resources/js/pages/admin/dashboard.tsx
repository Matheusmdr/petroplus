import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Package, Layers, Tag, FileText, ArrowRight } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: dashboard(),
  },
];

interface Product {
  id: number;
  name: string;
  image: string | null;
  is_active: boolean;
  category: { name: string } | null;
  brand: { name: string } | null;
}

interface Props {
  stats: {
    productsCount: number;
    categoriesCount: number;
    brandsCount: number;
    documentsCount: number;
    testimonialsCount: number;
    partnerLogosCount: number;
    bannersCount: number;
  };
  recentProducts: Product[];
}

export default function Dashboard({ stats, recentProducts }: Props) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="flex h-full flex-1 flex-col gap-6 p-6">
        {/* Header section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Visão Geral
          </h1>
          <p className="text-muted-foreground">
            Bem-vindo ao painel administrativo da Petroplus.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="text-sm font-medium tracking-tight">
                Total de Produtos
              </h3>
              <Package className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold">{stats.productsCount}</div>
              <p className="text-xs text-muted-foreground">
                Estão cadastrados no catálogo
              </p>
            </div>
          </div>

          <div className="rounded-xl border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="text-sm font-medium tracking-tight">Categorias</h3>
              <Layers className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold">{stats.categoriesCount}</div>
              <p className="text-xs text-muted-foreground">
                Disponíveis no sistema
              </p>
            </div>
          </div>

          <div className="rounded-xl border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="text-sm font-medium tracking-tight">Marcas</h3>
              <Tag className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold">{stats.brandsCount}</div>
              <p className="text-xs text-muted-foreground">
                Marcas parceiras cadastradas
              </p>
            </div>
          </div>

          <div className="rounded-xl border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="text-sm font-medium tracking-tight">Documentos</h3>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold">{stats.documentsCount}</div>
              <p className="text-xs text-muted-foreground">
                Fichas técnicas cadastradas
              </p>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Recent Products Table */}
          <div className="col-span-4 rounded-xl border bg-card text-card-foreground shadow-sm lg:col-span-4">
            <div className="flex items-center justify-between border-b p-6">
              <div className="space-y-1">
                <h3 className="leading-none font-semibold tracking-tight">
                  Produtos Recentes
                </h3>
                <p className="text-sm text-muted-foreground">
                  Últimos produtos adicionados ao catálogo.
                </p>
              </div>
              <Link
                href="/admin/products"
                className="flex items-center gap-1 text-sm font-medium hover:underline"
              >
                Ver todos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/30">
                      <th className="px-6 py-3 text-left font-medium">
                        Produto
                      </th>
                      <th className="px-6 py-3 text-left font-medium">
                        Categoria
                      </th>
                      <th className="px-6 py-3 text-left font-medium">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {recentProducts.length > 0 ? (
                      recentProducts.map((product) => (
                        <tr
                          key={product.id}
                          className="transition-colors hover:bg-muted/50"
                        >
                          <td className="flex items-center gap-3 px-6 py-3 font-medium">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-muted/20">
                              {product.image ? (
                                <img
                                  src={
                                    product.image.startsWith('/')
                                      ? product.image
                                      : `/storage/${product.image}`
                                  }
                                  alt={product.name}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <Package className="h-4 w-4 text-muted-foreground" />
                              )}
                            </div>
                            <span className="max-w-[200px] truncate">
                              {product.name}
                            </span>
                          </td>
                          <td className="px-6 py-3 text-muted-foreground">
                            {product.category?.name || '—'}
                          </td>
                          <td className="px-6 py-3">
                            <span
                              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${
                                product.is_active
                                  ? 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-950 dark:text-green-300 dark:ring-green-700/30'
                                  : 'bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-950 dark:text-red-300 dark:ring-red-700/30'
                              }`}
                            >
                              {product.is_active ? 'Ativo' : 'Inativo'}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={3}
                          className="px-6 py-8 text-center text-muted-foreground"
                        >
                          Nenhum produto cadastrado.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Actions + Recent Messages */}
          <div className="col-span-4 flex flex-col gap-4 lg:col-span-3">
            {/* Quick Actions */}
            <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
              <div className="border-b p-6">
                <h3 className="leading-none font-semibold tracking-tight">
                  Ações Rápidas
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Gerencie seu conteúdo.
                </p>
              </div>
              <div className="grid gap-4 p-6">
                <Link
                  href="/admin/products/create"
                  className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:border-primary/50 hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Package className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-sm font-medium">Adicionar Produto</h4>
                      <p className="text-xs text-muted-foreground">
                        Criar um novo produto no catálogo
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </Link>

                <Link
                  href="/admin/categories/create"
                  className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:border-primary/50 hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-sm font-medium">Nova Categoria</h4>
                      <p className="text-xs text-muted-foreground">
                        Organize seu portfólio de produtos
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-blue-500" />
                </Link>

                <Link
                  href="/admin/brands/create"
                  className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:border-primary/50 hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-purple-500/10 text-purple-500">
                      <Tag className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-sm font-medium">Adicionar Marca</h4>
                      <p className="text-xs text-muted-foreground">
                        Cadastrar uma nova marca parceira
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-purple-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
