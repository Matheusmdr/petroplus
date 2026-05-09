import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { BreadcrumbItem } from '@/types';
import { Save } from 'lucide-react';
import type { FormEvent } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Dashboard', href: '/admin' },
  { title: 'Configurações do Site', href: '/admin/site-settings' },
];

interface Props {
  settings: Record<string, string>;
}

export default function SiteSettingsIndex({ settings }: Props) {
  const { data, setData, put, processing } = useForm({
    social_instagram: settings.social_instagram || '',
    social_facebook: settings.social_facebook || '',
    social_linkedin: settings.social_linkedin || '',
    social_youtube: settings.social_youtube || '',
    sac_phone: settings.sac_phone || '',
    home_video_url: settings.home_video_url || '',
    petroplay_video_url: settings.petroplay_video_url || '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    put('/admin/site-settings');
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Configurações do Site" />
      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Configurações do Site
          </h1>
          <p className="text-muted-foreground">
            Gerencie links de redes sociais, vídeos e outras configurações
            globais.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full space-y-8 rounded-lg border p-6"
        >
          {/* Social Links */}
          <div className="space-y-4">
            <h2 className="border-b pb-2 text-lg font-semibold">
              Redes Sociais
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="social_instagram">Instagram</Label>
                <Input
                  id="social_instagram"
                  value={data.social_instagram}
                  onChange={(e) => setData('social_instagram', e.target.value)}
                  placeholder="https://instagram.com/petroplus"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="social_facebook">Facebook</Label>
                <Input
                  id="social_facebook"
                  value={data.social_facebook}
                  onChange={(e) => setData('social_facebook', e.target.value)}
                  placeholder="https://facebook.com/petroplus"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="social_linkedin">LinkedIn</Label>
                <Input
                  id="social_linkedin"
                  value={data.social_linkedin}
                  onChange={(e) => setData('social_linkedin', e.target.value)}
                  placeholder="https://linkedin.com/company/petroplus"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="social_youtube">YouTube</Label>
                <Input
                  id="social_youtube"
                  value={data.social_youtube}
                  onChange={(e) => setData('social_youtube', e.target.value)}
                  placeholder="https://youtube.com/@petroplus"
                />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h2 className="border-b pb-2 text-lg font-semibold">Contato</h2>
            <div className="space-y-2">
              <Label htmlFor="sac_phone">Telefone SAC</Label>
              <Input
                id="sac_phone"
                value={data.sac_phone}
                onChange={(e) => setData('sac_phone', e.target.value)}
                placeholder="0800 580 2815"
              />
            </div>
          </div>

          {/* Videos */}
          <div className="space-y-4">
            <h2 className="border-b pb-2 text-lg font-semibold">Vídeos</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="home_video_url">
                  URL do Vídeo da Home (embed)
                </Label>
                <Input
                  id="home_video_url"
                  value={data.home_video_url}
                  onChange={(e) => setData('home_video_url', e.target.value)}
                  placeholder="https://www.youtube.com/embed/..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="petroplay_video_url">
                  URL do Vídeo PetroPlay (embed)
                </Label>
                <Input
                  id="petroplay_video_url"
                  value={data.petroplay_video_url}
                  onChange={(e) =>
                    setData('petroplay_video_url', e.target.value)
                  }
                  placeholder="https://www.youtube.com/embed/..."
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={processing} className="gap-2">
              <Save className="h-4 w-4" />
              {processing ? 'Salvando...' : 'Salvar Configurações'}
            </Button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}
