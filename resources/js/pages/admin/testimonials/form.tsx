import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import type { BreadcrumbItem } from '@/types';
import { ArrowLeft, Save } from 'lucide-react';
import type { FormEvent } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string | null;
  quote: string;
  is_active: boolean;
  sort_order: number;
}

interface Props {
  testimonial?: Testimonial;
}

export default function TestimonialForm({ testimonial }: Props) {
  const isEditing = !!testimonial;

  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin' },
    { title: 'Depoimentos', href: '/admin/testimonials' },
    { title: isEditing ? 'Editar' : 'Novo Depoimento', href: '#' },
  ];

  const { data, setData, post, put, processing, errors } = useForm({
    name: testimonial?.name || '',
    role: testimonial?.role || '',
    quote: testimonial?.quote || '',
    is_active: testimonial?.is_active ?? true,
    sort_order: testimonial?.sort_order || 0,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      put(`/admin/testimonials/${testimonial.id}`);
    } else {
      post('/admin/testimonials');
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={isEditing ? 'Editar Depoimento' : 'Novo Depoimento'} />
      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <div className="flex items-center gap-4">
          <Link href="/admin/testimonials">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {isEditing ? 'Editar Depoimento' : 'Novo Depoimento'}
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
              placeholder="Ex: Carlos Oliveira"
              required
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Cargo / Função</Label>
            <Input
              id="role"
              value={data.role}
              onChange={(e) => setData('role', e.target.value)}
              placeholder="Ex: Gerente de Pós-Venda, Concessionária Fiat"
            />
            {errors.role && (
              <p className="text-sm text-red-500">{errors.role}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote">Depoimento *</Label>
            <Textarea
              id="quote"
              value={data.quote}
              onChange={(e) => setData('quote', e.target.value)}
              placeholder="Digite o depoimento do cliente..."
              rows={5}
              required
            />
            {errors.quote && (
              <p className="text-sm text-red-500">{errors.quote}</p>
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
                Depoimento ativo
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
