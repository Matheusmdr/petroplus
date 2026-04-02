import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import ImageUpload from '@/components/image-upload';
import type { BreadcrumbItem } from '@/types';
import { ArrowLeft, Save } from 'lucide-react';
import type { FormEvent } from 'react';

interface PartnerLogo {
  id: number;
  name: string;
  logo: string;
  is_active: boolean;
  sort_order: number;
}

interface Props {
  partnerLogo?: PartnerLogo;
}

export default function PartnerLogoForm({ partnerLogo }: Props) {
  const isEditing = !!partnerLogo;

  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin' },
    { title: 'Logos Parceiros', href: '/admin/partner-logos' },
    { title: isEditing ? 'Editar' : 'Novo Logo', href: '#' },
  ];

  const { data, setData, post, put, processing, errors } = useForm({
    name: partnerLogo?.name || '',
    logo: null as File | null,
    is_active: partnerLogo?.is_active ?? true,
    sort_order: partnerLogo?.sort_order || 0,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      put(`/admin/partner-logos/${partnerLogo.id}`, {
        forceFormData: true,
      });
    } else {
      post('/admin/partner-logos', {
        forceFormData: true,
      });
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={isEditing ? 'Editar Logo' : 'Novo Logo'} />
      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <div className="flex items-center gap-4">
          <Link href="/admin/partner-logos">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {isEditing ? 'Editar Logo de Parceiro' : 'Novo Logo de Parceiro'}
            </h1>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full space-y-6 rounded-lg border p-6"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Nome da Empresa *</Label>
            <Input
              id="name"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              placeholder="Ex: BYD"
              required
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Logo *</Label>
            <ImageUpload
              value={partnerLogo?.logo}
              onChange={(file) => setData('logo', file)}
              label="Selecionar logo"
              previewClassName="h-20 w-32"
              maxSize={2}
            />
            {errors.logo && (
              <p className="text-sm text-red-500">{errors.logo}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sort_order">Ordem</Label>
              <Input
                id="sort_order"
                type="number"
                value={data.sort_order}
                onChange={(e) =>
                  setData('sort_order', parseInt(e.target.value) || 0)
                }
              />
            </div>
            <div className="flex items-end space-x-2 pb-2">
              <Checkbox
                id="is_active"
                checked={data.is_active}
                onCheckedChange={(checked) =>
                  setData('is_active', checked as boolean)
                }
              />
              <Label htmlFor="is_active" className="cursor-pointer">
                Logo ativo
              </Label>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={processing} className="gap-2">
              <Save className="h-4 w-4" />
              {processing ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}
