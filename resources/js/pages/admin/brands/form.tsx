import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import ImageUpload from '@/components/image-upload';
import type { BreadcrumbItem } from '@/types';
import { ArrowLeft, Save } from 'lucide-react';
import type { FormEvent } from 'react';

interface Brand {
  id: number;
  name: string;
  slug: string;
  logo: string | null;
  illustration: string | null;
  description: string | null;
  is_active: boolean;
  sort_order: number;
}

interface Props {
  brand?: Brand;
}

export default function BrandForm({ brand }: Props) {
  const isEditing = !!brand;

  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Marcas', href: '/admin/brands' },
    { title: isEditing ? 'Editar' : 'Nova Marca', href: '#' },
  ];

  const { data, setData, post, put, processing, errors } = useForm({
    name: brand?.name || '',
    logo: null as File | null,
    illustration: null as File | null,
    description: brand?.description || '',
    is_active: brand?.is_active ?? true,
    sort_order: brand?.sort_order || 0,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isEditing) {
      put(`/admin/brands/${brand.id}`, {
        forceFormData: true,
      });
    } else {
      post('/admin/brands', {
        forceFormData: true,
      });
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={isEditing ? 'Editar Marca' : 'Nova Marca'} />
      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <div className="flex items-center gap-4">
          <Link href="/admin/brands">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {isEditing ? 'Editar Marca' : 'Nova Marca'}
            </h1>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full space-y-6 rounded-lg border p-6"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Nome *</Label>
            <Input
              id="name"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              placeholder="Ex: STP"
              required
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Logo Upload with Crop */}
          <div className="space-y-2">
            <Label>Logo</Label>
            <ImageUpload
              value={brand?.logo}
              onChange={(file) => setData('logo', file)}
              label="Selecionar logo"
              previewClassName="h-24 w-40"
              maxSize={2}
            />
            {errors.logo && (
              <p className="text-sm text-red-500">{errors.logo}</p>
            )}
          </div>

          {/* Illustration Upload */}
          <div className="space-y-2">
            <Label>Imagem / Ilustração (Fundo de Produtos)</Label>
            <ImageUpload
              value={brand?.illustration}
              onChange={(file) => setData('illustration', file)}
              disableCrop={true}
              label="Selecionar imagem da marca"
              previewClassName="w-full h-48"
              maxSize={4}
            />
            {errors.illustration && (
              <p className="text-sm text-red-500">{errors.illustration}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
              placeholder="Descreva a marca..."
              rows={4}
            />
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description}</p>
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
                Marca ativa
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
