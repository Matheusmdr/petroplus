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
  banner?: Banner;
}

const pageOptions = [
  { value: 'home', label: 'Home' },
  { value: 'sobre', label: 'Sobre' },
  { value: 'contato', label: 'Contato' },
  { value: 'petroplay', label: 'PetroPlay' },
  { value: 'marcas', label: 'Marcas' },
  { value: 'produtos', label: 'Produtos' },
];

export default function BannerForm({ banner }: Props) {
  const isEditing = !!banner;

  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin' },
    { title: 'Banners', href: '/admin/banners' },
    { title: isEditing ? 'Editar' : 'Novo Banner', href: '#' },
  ];

  const { data, setData, post, put, processing, errors } = useForm({
    title: banner?.title || '',
    subtitle: banner?.subtitle || '',
    image_mobile: null as File | null,
    image_desktop: null as File | null,
    page: banner?.page || 'home',
    link: banner?.link || '',
    is_active: banner?.is_active ?? true,
    sort_order: banner?.sort_order || 0,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      put(`/admin/banners/${banner.id}`, { forceFormData: true });
    } else {
      post('/admin/banners', { forceFormData: true });
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={isEditing ? 'Editar Banner' : 'Novo Banner'} />
      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <div className="flex items-center gap-4">
          <Link href="/admin/banners">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {isEditing ? 'Editar Banner' : 'Novo Banner'}
            </h1>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full space-y-6 rounded-lg border p-6"
        >
          <div className="space-y-2">
            <Label htmlFor="page">Página *</Label>
            <select
              id="page"
              value={data.page}
              onChange={(e) => setData('page', e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              {pageOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.page && (
              <p className="text-sm text-red-500">{errors.page}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
              placeholder="Título do banner (opcional)"
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="subtitle">Subtítulo</Label>
            <Input
              id="subtitle"
              value={data.subtitle}
              onChange={(e) => setData('subtitle', e.target.value)}
              placeholder="Subtítulo do banner (opcional)"
            />
            {errors.subtitle && (
              <p className="text-sm text-red-500">{errors.subtitle}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Imagem Mobile {!isEditing && '*'}</Label>
              <ImageUpload
                value={banner?.image_mobile}
                onChange={(file) => setData('image_mobile', file)}
                disableCrop={true}
                label="Selecionar imagem mobile"
                previewClassName="w-full h-32"
                maxSize={4}
              />
              {errors.image_mobile && (
                <p className="text-sm text-red-500">{errors.image_mobile}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Imagem Desktop</Label>
              <ImageUpload
                value={banner?.image_desktop}
                onChange={(file) => setData('image_desktop', file)}
                disableCrop={true}
                label="Selecionar imagem desktop"
                previewClassName="w-full h-32"
                maxSize={4}
              />
              {errors.image_desktop && (
                <p className="text-sm text-red-500">{errors.image_desktop}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="link">Link (opcional)</Label>
            <Input
              id="link"
              value={data.link}
              onChange={(e) => setData('link', e.target.value)}
              placeholder="URL de destino ao clicar no banner"
            />
            {errors.link && (
              <p className="text-sm text-red-500">{errors.link}</p>
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
                Banner ativo
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
