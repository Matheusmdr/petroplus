<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            // Remove the separate section columns
            $table->dropColumn(['mode_of_use', 'benefits']);
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->text('mode_of_use')->nullable()->after('description');
            $table->text('benefits')->nullable()->after('mode_of_use');
        });
    }
};
