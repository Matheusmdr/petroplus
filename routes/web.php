<?php

use App\Http\Controllers\Admin\BrandController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductAdminController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'home')->name('home');
Route::inertia('/sobre', 'sobre')->name('sobre');
Route::inertia('/contato', 'contato')->name('contato');
Route::inertia('/petroplay', 'petroplay')->name('petroplay');
Route::get('/marcas', function () {
    return inertia('marcas', [
    'brands' => \App\Models\Brand::where('is_active', true)->orderBy('sort_order')->get()
    ]);
})->name('marcas');

// Product pages (public)
Route::get('/produtos', [ProductController::class , 'categories'])->name('produtos.categories');
Route::get('/produtos/{categorySlug}', [ProductController::class , 'index'])->name('produtos.index');
Route::get('/produtos/{categorySlug}/{productSlug}', [ProductController::class , 'show'])->name('produtos.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin', function () {
            return inertia('admin/dashboard', [
            'stats' => [
            'productsCount' => \App\Models\Product::count(),
            'categoriesCount' => \App\Models\ProductCategory::count(),
            'brandsCount' => \App\Models\Brand::count(),
            'documentsCount' => \App\Models\ProductDocument::count(),
            ],
            'recentProducts' => \App\Models\Product::with(['category', 'brand'])
            ->latest()
            ->take(5)
            ->get(),
            ]);
        }
        )->name('dashboard');

        // Admin routes
        Route::prefix('admin')->name('admin.')->group(function () {
            Route::resource('categories', CategoryController::class);
            Route::resource('brands', BrandController::class);
            Route::resource('products', ProductAdminController::class);
            Route::delete('product-documents/{document}', [ProductAdminController::class , 'destroyDocument'])
                ->name('product-documents.destroy');
        }
        );
    });

require __DIR__ . '/settings.php';
