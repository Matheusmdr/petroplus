<?php

use App\Http\Controllers\Admin\BannerController as AdminBannerController;
use App\Http\Controllers\Admin\BrandController;
use App\Http\Controllers\Admin\CategoryController;

use App\Http\Controllers\Admin\PartnerLogoController;
use App\Http\Controllers\Admin\ProductAdminController;
use App\Http\Controllers\Admin\SiteSettingController;
use App\Http\Controllers\Admin\TestimonialController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::inertia('/sobre', 'sobre')->name('sobre');
Route::inertia('/contato', 'contato')->name('contato');
Route::post('/contato', [ContactController::class, 'store'])->name('contato.store');

Route::get('/petroplay', function () {
    $petroplayVideoUrl = \App\Models\SiteSetting::getValue('petroplay_video_url', 'https://www.youtube.com/embed/GxSYb7Yfjxs');
    return inertia('petroplay', [
        'petroplayVideoUrl' => $petroplayVideoUrl,
    ]);
})->name('petroplay');

Route::get('/marcas', function () {
    return inertia('marcas', [
    'brands' => \App\Models\Brand::where('is_active', true)->orderBy('sort_order')->get()
    ]);
})->name('marcas');

Route::inertia('/pacote-de-valor', 'pacote-de-valor')->name('pacote-de-valor');
Route::inertia('/aviso-de-privacidade', 'aviso-de-privacidade')->name('privacidade');
Route::inertia('/politica-sgi', 'politica-sgi')->name('politicasgi');

Route::get('/produtos', [ProductController::class , 'categories'])->name('produtos.categories');
Route::get('/produtos/{categorySlug}', [ProductController::class , 'index'])->name('produtos.index');
Route::get('/produtos/{categorySlug}/{productSlug}', [ProductController::class , 'show'])->name('produtos.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::redirect('/admin', '/admin/dashboard')->name('admin.home');
    Route::get('/admin/dashboard', function () {
            return inertia('admin/dashboard', [
            'stats' => [
            'productsCount' => \App\Models\Product::count(),
            'categoriesCount' => \App\Models\ProductCategory::count(),
            'brandsCount' => \App\Models\Brand::count(),
            'documentsCount' => \App\Models\ProductDocument::count(),
            'testimonialsCount' => \App\Models\Testimonial::count(),
            'partnerLogosCount' => \App\Models\PartnerLogo::count(),
            'bannersCount' => \App\Models\Banner::count(),
            ],
            'recentProducts' => \App\Models\Product::with(['categories', 'brand'])
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

            // New admin routes
            Route::resource('testimonials', TestimonialController::class);
            Route::resource('partner-logos', PartnerLogoController::class);
            Route::resource('banners', AdminBannerController::class);

            // Restricted Routes (Admin & Super Admin only)
            Route::middleware('role:super_admin,admin')->group(function () {
                Route::resource('users', \App\Http\Controllers\Admin\UserController::class);
                Route::get('site-settings', [SiteSettingController::class, 'index'])->name('site-settings.index');
                Route::put('site-settings', [SiteSettingController::class, 'update'])->name('site-settings.update');
            });
        }
        );
    });

require __DIR__ . '/settings.php';
