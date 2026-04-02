<?php

namespace Database\Seeders;

use App\Models\PartnerLogo;
use App\Models\SiteSetting;
use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class DynamicContentSeeder extends Seeder
{
    public function run(): void
    {
        // Seed Testimonials (previously hardcoded in home.tsx)
        $testimonials = [
            [
                'name' => 'Carlos Oliveira',
                'role' => 'Gerente de Pós-Venda, Concessionária Fiat',
                'quote' => 'A parceria com a Petroplus elevou os padrões da nossa operação de pós-venda. A qualidade dos produtos é indiscutível e o suporte técnico nos ajuda a manter a excelência em nossos serviços diariamente.',
                'is_active' => true,
                'sort_order' => 0,
            ],
            [
                'name' => 'João Silva',
                'role' => 'Diretor de Oficinas, Grupo BYD',
                'quote' => 'A inovação não para na Petroplus. O sistema PetroPlay transformou a forma como lidamos com os fluxos operacionais internos, diminuindo atrasos e aumentando o nível de satisfação dos clientes.',
                'is_active' => true,
                'sort_order' => 1,
            ],
        ];

        foreach ($testimonials as $t) {
            Testimonial::firstOrCreate(['name' => $t['name']], $t);
        }

        // Seed Partner Logos (previously hardcoded in home.tsx)
        $logos = [
            ['name' => 'BYD', 'logo' => '/logos/BYD.png', 'sort_order' => 0],
            ['name' => 'Fiat', 'logo' => '/logos/Fiat.png', 'sort_order' => 1],
            ['name' => 'Renault', 'logo' => '/logos/Renault.png', 'sort_order' => 2],
            ['name' => 'Kia', 'logo' => '/logos/kia.png', 'sort_order' => 3],
            ['name' => 'Nissan', 'logo' => '/logos/Nissan.png', 'sort_order' => 4],
            ['name' => 'Jeep', 'logo' => '/logos/Jeep.png', 'sort_order' => 5],
        ];

        foreach ($logos as $l) {
            PartnerLogo::firstOrCreate(['name' => $l['name']], array_merge($l, ['is_active' => true]));
        }

        // Seed Site Settings
        $settings = [
            'social_instagram' => 'https://www.instagram.com/petroplusbrasil/',
            'social_facebook' => 'https://www.facebook.com/PetroplusBrasil',
            'social_linkedin' => 'https://www.linkedin.com/company/petroplus/',
            'social_youtube' => 'https://www.youtube.com/@petroplusbrasil',
            'sac_phone' => '0800 580 2815',
            'home_video_url' => 'https://www.youtube.com/embed/Svs1uLk3M78',
            'petroplay_video_url' => 'https://www.youtube.com/embed/GxSYb7Yfjxs',
        ];

        foreach ($settings as $key => $value) {
            SiteSetting::firstOrCreate(['key' => $key], ['key' => $key, 'value' => $value]);
        }
    }
}
