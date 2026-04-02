<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class BannerController extends Controller
{
    public function index(): Response
    {
        $banners = Banner::orderBy('page')->orderBy('sort_order')->get();

        return Inertia::render('admin/banners/index', [
            'banners' => $banners,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/banners/form');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'subtitle' => 'nullable|string',
            'image_mobile' => 'required|image|max:4096',
            'image_desktop' => 'nullable|image|max:4096',
            'page' => 'required|string|max:50',
            'link' => 'nullable|string|max:500',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer',
        ]);

        if ($request->hasFile('image_mobile')) {
            $validated['image_mobile'] = $request->file('image_mobile')->store('banners', 'public');
        }

        if ($request->hasFile('image_desktop')) {
            $validated['image_desktop'] = $request->file('image_desktop')->store('banners', 'public');
        }

        Banner::create($validated);

        return redirect()->route('admin.banners.index')
            ->with('success', 'Banner criado com sucesso.');
    }

    public function edit(Banner $banner): Response
    {
        return Inertia::render('admin/banners/form', [
            'banner' => $banner,
        ]);
    }

    public function update(Request $request, Banner $banner): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'subtitle' => 'nullable|string',
            'image_mobile' => 'nullable|image|max:4096',
            'image_desktop' => 'nullable|image|max:4096',
            'page' => 'required|string|max:50',
            'link' => 'nullable|string|max:500',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer',
        ]);

        if ($request->hasFile('image_mobile')) {
            if ($banner->image_mobile) {
                Storage::disk('public')->delete($banner->image_mobile);
            }
            $validated['image_mobile'] = $request->file('image_mobile')->store('banners', 'public');
        }

        if ($request->hasFile('image_desktop')) {
            if ($banner->image_desktop) {
                Storage::disk('public')->delete($banner->image_desktop);
            }
            $validated['image_desktop'] = $request->file('image_desktop')->store('banners', 'public');
        }

        $banner->update($validated);

        return redirect()->route('admin.banners.index')
            ->with('success', 'Banner atualizado com sucesso.');
    }

    public function destroy(Banner $banner): RedirectResponse
    {
        if ($banner->image_mobile) {
            Storage::disk('public')->delete($banner->image_mobile);
        }
        if ($banner->image_desktop) {
            Storage::disk('public')->delete($banner->image_desktop);
        }

        $banner->delete();

        return redirect()->route('admin.banners.index')
            ->with('success', 'Banner excluído com sucesso.');
    }
}
