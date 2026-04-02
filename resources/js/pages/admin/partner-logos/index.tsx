import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import type { BreadcrumbItem } from '@/types';
import { Plus, Pencil, Trash2, Image } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Dashboard', href: '/admin' },
  { title: 'Logos Parceiros', href: '/admin/partner-logos' },
];

interface PartnerLogo {
  id: number;
  name: string;
  logo: string;
  is_active: boolean;
  sort_order: number;
}

interface Props {
  partnerLogos: PartnerLogo[];
}

export default function PartnerLogosIndex({ partnerLogos }: Props) {
  const handleDelete = (id: number) => {
    if (confirm('Tem certeza que deseja excluir este logo?')) {
      router.delete(`/admin/partner-logos/${id}`);
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Logos Parceiros" />
      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Logos de Parceiros
            </h1>
            <p className="text-muted-foreground">
              Gerencie os logos de empresas parceiras exibidos na home.
            </p>
          </div>
          <Link href="/admin/partner-logos/create">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Novo Logo
            </Button>
          </Link>
        </div>

        <div className="rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="px-6 py-3 text-left font-medium">Logo</th>
                <th className="px-6 py-3 text-left font-medium">Nome</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
                <th className="px-6 py-3 text-left font-medium">Ordem</th>
                <th className="px-6 py-3 text-right font-medium">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {partnerLogos.length > 0 ? (
                partnerLogos.map((item) => (
                  <tr
                    key={item.id}
                    className="transition-colors hover:bg-muted/50"
                  >
                    <td className="px-6 py-3">
                      <div className="flex h-10 w-16 items-center justify-center rounded border bg-muted/20">
                        <img
                          src={
                            item.logo.startsWith('http')
                              ? item.logo
                              : `/storage/${item.logo}`
                          }
                          alt={item.name}
                          className="max-h-8 max-w-14 object-contain"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-3 font-medium">{item.name}</td>
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
                        <Link href={`/admin/partner-logos/${item.id}/edit`}>
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
                    colSpan={5}
                    className="px-6 py-8 text-center text-muted-foreground"
                  >
                    <Image className="mx-auto mb-2 h-8 w-8 opacity-50" />
                    Nenhum logo de parceiro cadastrado.
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
