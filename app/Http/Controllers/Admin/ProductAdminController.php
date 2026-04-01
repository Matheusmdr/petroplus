<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\ProductDocument;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ProductAdminController extends Controller
{
    public function index(): Response
    {
        $products = Product::with(['category', 'brand'])
            ->withCount('documents')
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('admin/products/index', [
            'products' => $products,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/products/form', [
            'categories' => ProductCategory::where('is_active', true)->orderBy('sort_order')->get(),
            'brands' => Brand::where('is_active', true)->orderBy('sort_order')->get(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|exists:product_categories,id',
            'brand_id' => 'nullable|exists:brands,id',
            'subtitle' => 'nullable|string|max:255',
            'code' => 'nullable|string|max:100',
            'image' => 'nullable|image|max:4096',
            'description' => 'nullable|string',
            'content_info' => 'nullable|string|max:255',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer',
            'fispq' => 'nullable|file|mimes:pdf,doc,docx|max:10240',
            'ficha_tecnica' => 'nullable|file|mimes:pdf,doc,docx|max:10240',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('products', 'public');
        }

        // Remove document fields from product data
        unset($validated['fispq'], $validated['ficha_tecnica']);

        $product = Product::create($validated);

        // Handle FISPQ document
        if ($request->hasFile('fispq')) {
            ProductDocument::create([
                'product_id' => $product->id,
                'name' => 'FISPQ',
                'type' => 'fispq',
                'file_path' => $request->file('fispq')->store('product-documents', 'public'),
                'sort_order' => 0,
            ]);
        }

        // Handle Ficha Técnica document
        if ($request->hasFile('ficha_tecnica')) {
            ProductDocument::create([
                'product_id' => $product->id,
                'name' => 'Ficha Técnica',
                'type' => 'ficha_tecnica',
                'file_path' => $request->file('ficha_tecnica')->store('product-documents', 'public'),
                'sort_order' => 1,
            ]);
        }

        return redirect()->route('admin.products.index')
            ->with('success', 'Produto criado com sucesso.');
    }

    public function edit(Product $product): Response
    {
        return Inertia::render('admin/products/form', [
            'product' => $product->load('documents'),
            'categories' => ProductCategory::where('is_active', true)->orderBy('sort_order')->get(),
            'brands' => Brand::where('is_active', true)->orderBy('sort_order')->get(),
        ]);
    }

    public function update(Request $request, Product $product): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|exists:product_categories,id',
            'brand_id' => 'nullable|exists:brands,id',
            'subtitle' => 'nullable|string|max:255',
            'code' => 'nullable|string|max:100',
            'image' => 'nullable|image|max:4096',
            'description' => 'nullable|string',
            'content_info' => 'nullable|string|max:255',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer',
            'fispq' => 'nullable|file|mimes:pdf,doc,docx|max:10240',
            'ficha_tecnica' => 'nullable|file|mimes:pdf,doc,docx|max:10240',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        if ($request->hasFile('image')) {
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            $validated['image'] = $request->file('image')->store('products', 'public');
        }

        // Remove document fields from product data
        unset($validated['fispq'], $validated['ficha_tecnica']);

        $product->update($validated);

        // Handle FISPQ document
        if ($request->hasFile('fispq')) {
            // Delete existing FISPQ
            $existingFispq = $product->documents()->where('type', 'fispq')->first();
            if ($existingFispq) {
                Storage::disk('public')->delete($existingFispq->file_path);
                $existingFispq->delete();
            }

            ProductDocument::create([
                'product_id' => $product->id,
                'name' => 'FISPQ',
                'type' => 'fispq',
                'file_path' => $request->file('fispq')->store('product-documents', 'public'),
                'sort_order' => 0,
            ]);
        }

        // Handle Ficha Técnica document
        if ($request->hasFile('ficha_tecnica')) {
            // Delete existing Ficha Técnica
            $existingFicha = $product->documents()->where('type', 'ficha_tecnica')->first();
            if ($existingFicha) {
                Storage::disk('public')->delete($existingFicha->file_path);
                $existingFicha->delete();
            }

            ProductDocument::create([
                'product_id' => $product->id,
                'name' => 'Ficha Técnica',
                'type' => 'ficha_tecnica',
                'file_path' => $request->file('ficha_tecnica')->store('product-documents', 'public'),
                'sort_order' => 1,
            ]);
        }

        return redirect()->route('admin.products.index')
            ->with('success', 'Produto atualizado com sucesso.');
    }

    public function destroy(Product $product): RedirectResponse
    {
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }

        foreach ($product->documents as $doc) {
            Storage::disk('public')->delete($doc->file_path);
        }

        $product->delete();

        return redirect()->route('admin.products.index')
            ->with('success', 'Produto excluído com sucesso.');
    }

    public function destroyDocument(ProductDocument $document): RedirectResponse
    {
        Storage::disk('public')->delete($document->file_path);
        $document->delete();

        return back()->with('success', 'Documento excluído com sucesso.');
    }
}
