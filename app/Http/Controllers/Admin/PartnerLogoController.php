<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PartnerLogo;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class PartnerLogoController extends Controller
{
    public function index(): Response
    {
        $partnerLogos = PartnerLogo::orderBy('sort_order')->get();

        return Inertia::render('admin/partner-logos/index', [
            'partnerLogos' => $partnerLogos,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/partner-logos/form');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'required|image|max:2048',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer',
        ]);

        if ($request->hasFile('logo')) {
            $validated['logo'] = $request->file('logo')->store('partner-logos', 'public');
        }

        PartnerLogo::create($validated);

        return redirect()->route('admin.partner-logos.index')
            ->with('success', 'Logo de parceiro criado com sucesso.');
    }

    public function edit(PartnerLogo $partnerLogo): Response
    {
        return Inertia::render('admin/partner-logos/form', [
            'partnerLogo' => $partnerLogo,
        ]);
    }

    public function update(Request $request, PartnerLogo $partnerLogo): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'nullable|image|max:2048',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer',
        ]);

        if ($request->hasFile('logo')) {
            if ($partnerLogo->logo) {
                Storage::disk('public')->delete($partnerLogo->logo);
            }
            $validated['logo'] = $request->file('logo')->store('partner-logos', 'public');
        }

        $partnerLogo->update($validated);

        return redirect()->route('admin.partner-logos.index')
            ->with('success', 'Logo de parceiro atualizado com sucesso.');
    }

    public function destroy(PartnerLogo $partnerLogo): RedirectResponse
    {
        if ($partnerLogo->logo) {
            Storage::disk('public')->delete($partnerLogo->logo);
        }

        $partnerLogo->delete();

        return redirect()->route('admin.partner-logos.index')
            ->with('success', 'Logo de parceiro excluído com sucesso.');
    }
}
