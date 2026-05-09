import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import type { BreadcrumbItem } from '@/types';
import { Plus, Pencil, Trash2, ImageIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Dashboard', href: '/admin' },
  { title: 'Banners', href: '/admin/banners' },
];

interface Banner {
  id: number;
  title: string | null;
  subtitle: string | null;
  image_mobile: string;
  image_desktop: string | null;
  page: string;
  link: string | null;
  is_active: boolean;
  sort_order: number;
}

interface Props {
  banners: Banner[];
}

const pageLabels: Record<string, string> = {
  home: 'Home',
  sobre: 'Sobre',
  contato: 'Contato',
  petroplay: 'PetroPlay',
  marcas: 'Marcas',
  produtos: 'Produtos',
};

export default function BannersIndex({ banners }: Props) {
  const handleDelete = (id: number) => {
    if (confirm('Tem certeza que deseja excluir este banner?')) {
      router.delete(`/admin/banners/${id}`);
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Banners" />
      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Banners</h1>
            <p className="text-muted-foreground">
              Gerencie os banners de topo das páginas do site.
            </p>
          </div>
          <Link href="/admin/banners/create">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Novo Banner
            </Button>
          </Link>
        </div>

        <div className="rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="px-6 py-3 text-left font-medium">Preview</th>
                <th className="px-6 py-3 text-left font-medium">Página</th>
                <th className="px-6 py-3 text-left font-medium">Título</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
                <th className="px-6 py-3 text-left font-medium">Ordem</th>
                <th className="px-6 py-3 text-right font-medium">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {banners.length > 0 ? (
                banners.map((item) => (
                  <tr
                    key={item.id}
                    className="transition-colors hover:bg-muted/50"
                  >
                    <td className="px-6 py-3">
                      <div className="flex h-12 w-24 items-center justify-center overflow-hidden rounded border bg-muted/20">
                        <img
                          src={`/storage/${item.image_mobile}`}
                          alt={item.title || 'Banner'}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-blue-600/20 ring-inset dark:bg-blue-950 dark:text-blue-300 dark:ring-blue-700/30">
                        {pageLabels[item.page] || item.page}
                      </span>
                    </td>
                    <td className="max-w-xs truncate px-6 py-3 font-medium">
                      {item.title || '—'}
                    </td>
                    <td className="px-6 py-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${
                          item.is_active
                            ? 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-950 dark:text-green-300 dark:ring-green-700/30'
                            : 'bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-950 dark:text-red-300 dark:ring-red-700/30'
                        }`}
                      >
                        {item.is_active ? 'Ativo' : 'Inativo'}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-muted-foreground">
                      {item.sort_order}
                    </td>
                    <td className="px-6 py-3 text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/admin/banners/${item.id}/edit`}>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-700"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-muted-foreground"
                  >
                    <ImageIcon className="mx-auto mb-2 h-8 w-8 opacity-50" />
                    Nenhum banner cadastrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
