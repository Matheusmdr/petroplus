import { Head, Link, useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { BreadcrumbItem, SharedData } from '@/types';
import { ArrowLeft, Save } from 'lucide-react';
import type { FormEvent } from 'react';
import { User } from '@/types/auth';

interface Props {
  user?: User;
}

export default function UserForm({ user: editUser }: Props) {
  const isEditing = !!editUser;
  const { auth } = usePage<SharedData>().props;
  const currentUser = auth.user;

  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Usuários', href: '/admin/users' },
    { title: isEditing ? 'Editar' : 'Novo Usuário', href: '#' },
  ];

  const { data, setData, post, put, processing, errors } = useForm({
    name: editUser?.name || '',
    email: editUser?.email || '',
    password: '',
    role: editUser?.role || 'admin',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isEditing) {
      put(`/admin/users/${editUser.id}`);
    } else {
      post('/admin/users');
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={isEditing ? 'Editar Usuário' : 'Novo Usuário'} />
      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <div className="flex items-center gap-4">
          <Link href="/admin/users">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {isEditing ? 'Editar Usuário' : 'Novo Usuário'}
            </h1>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full space-y-6 rounded-lg border bg-card p-6"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nome *</Label>
              <Input
                id="name"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                placeholder="Nome do usuário"
                required
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                placeholder="email@exemplo.com"
                required
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">
                Senha{' '}
                {isEditing && (
                  <span className="text-xs font-normal text-muted-foreground">
                    (Deixe em branco para não alterar)
                  </span>
                )}
                {!isEditing && '*'}
              </Label>
              <Input
                id="password"
                type="password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                placeholder="********"
                required={!isEditing}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Cargo (Role) *</Label>
              <select
                id="role"
                value={data.role}
                onChange={(e) => setData('role', e.target.value)}
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                {/* Only Super Admins can assign Super Admin role */}
                {currentUser.role === 'super_admin' && (
                  <option value="super_admin">Super Admin</option>
                )}
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
              </select>
              {errors.role && (
                <p className="text-sm text-red-500">{errors.role}</p>
              )}
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
