<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Product;
use App\Models\ProductCategory;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    /**
     * Display categories listing page.
     */
    public function categories(): Response
    {
        $categories = ProductCategory::where('is_active', true)
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('produtos/categorias', [
            'categories' => $categories,
        ]);
    }

    /**
     * Display products listing for a category.
     */
    public function index(string $categorySlug): Response
    {
        $category = ProductCategory::where('slug', $categorySlug)
            ->where('is_active', true)
            ->firstOrFail();

        $products = Product::where('category_id', $category->id)
            ->where('is_active', true)
            ->with('brand')
            ->orderBy('sort_order')
            ->get();

        $brands = Brand::where('is_active', true)
            ->whereHas('products', function ($query) use ($category) {
                $query->where('category_id', $category->id)->where('is_active', true);
            })
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('produtos/index', [
            'category' => $category,
            'products' => $products,
            'brands' => $brands,
        ]);
    }

    /**
     * Display single product detail page.
     */
    public function show(string $categorySlug, string $productSlug): Response
    {
        $category = ProductCategory::where('slug', $categorySlug)
            ->where('is_active', true)
            ->firstOrFail();

        $product = Product::where('slug', $productSlug)
            ->where('category_id', $category->id)
            ->where('is_active', true)
            ->with(['brand', 'documents', 'category'])
            ->firstOrFail();

        return Inertia::render('produtos/show', [
            'product' => $product,
            'category' => $category,
        ]);
    }
}
