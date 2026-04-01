<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained('product_categories')->cascadeOnDelete();
            $table->foreignId('brand_id')->nullable()->constrained('brands')->nullOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('subtitle')->nullable(); // e.g. "Complete Fuel System Cleaner"
            $table->string('code')->nullable(); // e.g. "STP-2015BR"
            $table->string('image')->nullable();
            $table->text('description')->nullable();
            $table->text('mode_of_use')->nullable();
            $table->text('benefits')->nullable();
            $table->string('content_info')->nullable(); // e.g. "Frasco de 375ml"
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
