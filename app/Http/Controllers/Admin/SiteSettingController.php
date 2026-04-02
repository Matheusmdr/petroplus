<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SiteSettingController extends Controller
{
    public function index(): Response
    {
        $settings = SiteSetting::all()->pluck('value', 'key');

        return Inertia::render('admin/site-settings/index', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'social_instagram' => 'nullable|string|max:500',
            'social_facebook' => 'nullable|string|max:500',
            'social_linkedin' => 'nullable|string|max:500',
            'social_youtube' => 'nullable|string|max:500',
            'sac_phone' => 'nullable|string|max:50',
            'home_video_url' => 'nullable|string|max:500',
            'petroplay_video_url' => 'nullable|string|max:500',
        ]);

        foreach ($validated as $key => $value) {
            SiteSetting::setValue($key, $value);
        }

        return redirect()->route('admin.site-settings.index')
            ->with('success', 'Configurações atualizadas com sucesso.');
    }
}
