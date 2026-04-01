import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import ImageUpload from '@/components/image-upload';
import type { BreadcrumbItem } from '@/types';
import { ArrowLeft, Save } from 'lucide-react';
import type { FormEvent } from 'react';

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
  is_active: boolean;
}

interface Props {
  category?: Category;
}

export default function CategoryForm({ category }: Props) {
  const isEditing = !!category;

  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Categorias', href: '/admin/categories' },
    { title: isEditing ? 'Editar' : 'Nova Categoria', href: '#' },
  ];

  const { data, setData, post, put, processing, errors } = useForm({
    name: category?.name || '',
    icon: null as File | null,
    banner_image: null as File | null,
    banner_title: category?.banner_title || '',
    banner_subtitle: category?.banner_subtitle || '',
    description: category?.description || '',
    sort_order: category?.sort_order || 0,
    is_active: category?.is_active ?? true,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isEditing) {
      put(`/admin/categories/${category.id}`, {
        forceFormData: true,
      });
    } else {
      post('/admin/categories', {
        forceFormData: true,
      });
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={isEditing ? 'Editar Categoria' : 'Nova Categoria'} />
      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <div className="flex items-center gap-4">
          <Link href="/admin/categories">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {isEditing ? 'Editar Categoria' : 'Nova Categoria'}
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
              placeholder="Ex: Linha Leve"
              required
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Icon Upload with Crop */}
          <div className="space-y-2">
            <Label>Ícone da Categoria</Label>
            <ImageUpload
              value={category?.icon}
              onChange={(file) => setData('icon', file)}
              aspectRatio={1}
              circular={true}
              label="Selecionar ícone"
              previewClassName="h-24 w-24"
              maxSize={2}
            />
            {errors.icon && (
              <p className="text-sm text-red-500">{errors.icon}</p>
            )}
          </div>

          {/* Banner Image Upload without Crop */}
          <div className="space-y-2">
            <Label>Imagem do Banner (Opcional)</Label>
            <ImageUpload
              value={category?.banner_image}
              onChange={(file) => setData('banner_image', file)}
              aspectRatio={16 / 5}
              disableCrop={true}
              label="Selecionar banner"
              previewClassName="h-32 w-full"
              maxSize={2}
            />
            {errors.banner_image && (
              <p className="text-sm text-red-500">{errors.banner_image}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="banner_title">Título do Banner (Opcional)</Label>
              <Input
                id="banner_title"
                value={data.banner_title}
                onChange={(e) => setData('banner_title', e.target.value)}
                placeholder="Ex: LINHA AUTOMOTIVA"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="banner_subtitle">
                Subtítulo do Banner (Opcional)
              </Label>
              <Input
                id="banner_subtitle"
                value={data.banner_subtitle}
                onChange={(e) => setData('banner_subtitle', e.target.value)}
                placeholder="Ex: AGRÍCOLA E CALÇADISTA"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição (Opcional)</Label>
            <Textarea
              id="description"
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
              placeholder="Descrição da categoria..."
              rows={3}
            />
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
                Categoria ativa
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
