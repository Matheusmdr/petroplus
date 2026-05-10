<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProductCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function index(): Response
    {
        $categories = ProductCategory::withCount('products')
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('admin/categories/index', [
            'categories' => $categories,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/categories/form');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'nullable|image|max:2048',
            'banner_image' => 'nullable|image|max:2048',
            'background_image' => 'nullable|image|max:2048',
            'banner_title' => 'nullable|string|max:255',
            'banner_subtitle' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        if ($request->hasFile('icon')) {
            $validated['icon'] = $request->file('icon')->store('categories/icons', 'public');
        }

        if ($request->hasFile('banner_image')) {
            $validated['banner_image'] = $request->file('banner_image')->store('categories', 'public');
        }

        if ($request->hasFile('background_image')) {
            $validated['background_image'] = $request->file('background_image')->store('categories/backgrounds', 'public');
        }

        ProductCategory::create($validated);

        return redirect()->route('admin.categories.index')
            ->with('success', 'Categoria criada com sucesso.');
    }

    public function edit(ProductCategory $category): Response
    {
        return Inertia::render('admin/categories/form', [
            'category' => $category,
        ]);
    }

    public function update(Request $request, ProductCategory $category): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'nullable|image|max:2048',
            'banner_image' => 'nullable|image|max:2048',
            'background_image' => 'nullable|image|max:2048',
            'banner_title' => 'nullable|string|max:255',
            'banner_subtitle' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        if ($request->hasFile('icon')) {
            if ($category->icon) {
                Storage::disk('public')->delete($category->icon);
            }
            $validated['icon'] = $request->file('icon')->store('categories/icons', 'public');
        }

        if ($request->hasFile('banner_image')) {
            if ($category->banner_image) {
                Storage::disk('public')->delete($category->banner_image);
            }
            $validated['banner_image'] = $request->file('banner_image')->store('categories', 'public');
        }

        if ($request->hasFile('background_image')) {
            if ($category->background_image) {
                Storage::disk('public')->delete($category->background_image);
            }
            $validated['background_image'] = $request->file('background_image')->store('categories/backgrounds', 'public');
        }

        $category->update($validated);

        return redirect()->route('admin.categories.index')
            ->with('success', 'Categoria atualizada com sucesso.');
    }

    public function destroy(ProductCategory $category): RedirectResponse
    {
        $category->delete();

        return redirect()->route('admin.categories.index')
            ->with('success', 'Categoria excluída com sucesso.');
    }
}
