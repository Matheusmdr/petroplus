import { Head, Link, useForm, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import ImageUpload from '@/components/image-upload';
import MarkdownEditor from '@/components/markdown-editor';
import DocumentUpload from '@/components/document-upload';
import type { BreadcrumbItem } from '@/types';
import { ArrowLeft, Save } from 'lucide-react';
import type { FormEvent } from 'react';

interface Category {
  id: number;
  name: string;
}

interface Brand {
  id: number;
  name: string;
}

interface ProductDocument {
  id: number;
  name: string;
  type: string;
  file_path: string;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  brand_id: number | null;
  subtitle: string | null;
  code: string | null;
  image: string | null;
  description: string | null;
  content_info: string | null;
  is_active: boolean;
  sort_order: number;
  documents: ProductDocument[];
  categories: Category[];
}

interface Props {
  product?: Product;
  categories: Category[];
  brands: Brand[];
}

export default function ProductForm({ product, categories, brands }: Props) {
  const isEditing = !!product;

  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Produtos', href: '/admin/products' },
    { title: isEditing ? 'Editar' : 'Novo Produto', href: '#' },
  ];

  // Find existing documents by type
  const existingFispq =
    product?.documents?.find((d) => d.type === 'fispq') || null;
  const existingFichaTecnica =
    product?.documents?.find((d) => d.type === 'ficha_tecnica') || null;

  const { data, setData, post, put, processing, errors } = useForm({
    name: product?.name || '',
    category_ids: product?.categories?.map(c => c.id) || (categories.length > 0 ? [categories[0].id] : []),
    brand_id: product?.brand_id || '',
    subtitle: product?.subtitle || '',
    code: product?.code || '',
    image: null as File | null,
    description: product?.description || '',
    content_info: product?.content_info || '',
    is_active: product?.is_active ?? true,
    sort_order: product?.sort_order || 0,
    fispq: null as File | null,
    ficha_tecnica: null as File | null,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isEditing) {
      put(`/admin/products/${product.id}`, {
        forceFormData: true,
      });
    } else {
      post('/admin/products', {
        forceFormData: true,
      });
    }
  };

  const handleDeleteDocument = (docId: number) => {
    if (confirm('Tem certeza que deseja excluir este documento?')) {
      router.delete(`/admin/product-documents/${docId}`);
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={isEditing ? 'Editar Produto' : 'Novo Produto'} />
      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <div className="flex items-center gap-4">
          <Link href="/admin/products">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {isEditing ? 'Editar Produto' : 'Novo Produto'}
            </h1>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full space-y-6 rounded-lg border p-6"
        >
          {/* Basic Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informações Básicas</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  placeholder="Ex: Fuel System Cleaner"
                  required
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="code">Código</Label>
                <Input
                  id="code"
                  value={data.code}
                  onChange={(e) => setData('code', e.target.value)}
                  placeholder="Ex: STP-2015BR"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subtitle">Subtítulo</Label>
              <Input
                id="subtitle"
                value={data.subtitle}
                onChange={(e) => setData('subtitle', e.target.value)}
                placeholder="Ex: Complete Fuel System Cleaner"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Categorias *</Label>
                <div className="flex flex-col gap-2 rounded-md border border-input p-3 shadow-xs">
                  {categories.map((cat) => (
                    <div key={cat.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category_${cat.id}`}
                        checked={data.category_ids.includes(cat.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setData('category_ids', [...data.category_ids, cat.id]);
                          } else {
                            setData('category_ids', data.category_ids.filter(id => id !== cat.id));
                          }
                        }}
                      />
                      <Label htmlFor={`category_${cat.id}`} className="cursor-pointer font-normal">
                        {cat.name}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.category_ids && (
                  <p className="text-sm text-red-500">{errors.category_ids}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="brand_id">Marca</Label>
                <select
                  id="brand_id"
                  value={data.brand_id}
                  onChange={(e) =>
                    setData(
                      'brand_id',
                      e.target.value ? parseInt(e.target.value) : '',
                    )
                  }
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <option value="">Sem marca</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Image Upload with Crop */}
            <div className="space-y-2">
              <Label>Imagem do Produto</Label>
              <ImageUpload
                value={product?.image}
                onChange={(file) => setData('image', file)}
                label="Selecionar imagem do produto"
                previewClassName="h-40 w-40"
                maxSize={4}
              />
              {errors.image && (
                <p className="text-sm text-red-500">{errors.image}</p>
              )}
            </div>
          </div>

          {/* Markdown Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Descrição do Produto</h3>
            <MarkdownEditor
              value={data.description}
              onChange={(val) => setData('description', val)}
              placeholder="Escreva a descrição completa do produto usando Markdown...&#10;&#10;Você pode incluir:&#10;## Descrição&#10;Texto descritivo do produto...&#10;&#10;## Modo de Usar&#10;1. Primeiro passo&#10;2. Segundo passo&#10;&#10;## Benefícios&#10;- Benefício 1&#10;- Benefício 2"
              minRows={16}
              error={errors.description}
            />

            <div className="space-y-2">
              <Label htmlFor="content_info">Conteúdo / Embalagem</Label>
              <Input
                id="content_info"
                value={data.content_info}
                onChange={(e) => setData('content_info', e.target.value)}
                placeholder="Ex: Frasco de 375ml"
              />
            </div>
          </div>

          {/* Documents - FISPQ & Ficha Técnica */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Documentos</h3>
            <p className="text-sm text-muted-foreground">
              Faça upload dos documentos obrigatórios do produto.
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* FISPQ */}
              <DocumentUpload
                label="FISPQ"
                description="Ficha de Informações de Segurança de Produtos Químicos"
                value={data.fispq}
                existingFile={existingFispq}
                onChange={(file) => setData('fispq', file)}
                onRemoveExisting={
                  existingFispq
                    ? () => handleDeleteDocument(existingFispq.id)
                    : undefined
                }
                error={errors.fispq}
              />

              {/* Ficha Técnica */}
              <DocumentUpload
                label="Ficha Técnica"
                description="Documento com especificações técnicas do produto"
                value={data.ficha_tecnica}
                existingFile={existingFichaTecnica}
                onChange={(file) => setData('ficha_tecnica', file)}
                onRemoveExisting={
                  existingFichaTecnica
                    ? () => handleDeleteDocument(existingFichaTecnica.id)
                    : undefined
                }
                error={errors.ficha_tecnica}
              />
            </div>
          </div>

          {/* Settings */}
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
                Produto ativo
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
