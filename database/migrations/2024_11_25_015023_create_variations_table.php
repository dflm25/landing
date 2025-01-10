<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('attributes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('business_info_id')->constrained('business_info');
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('attribute_values', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('attribute_id')->constrained('attributes')->onDelete('cascade');
            $table->string('value');
            $table->string('code')->nullable();
            $table->timestamps();
        });

        Schema::create('product_attribute_images', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('product_id')->constrained('products')->onDelete('cascade');
            $table->foreignUuid('attribute_id')->constrained('attributes')->onDelete('cascade');
            $table->text('image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attributes');
        Schema::dropIfExists('attribute_values');
        Schema::dropIfExists('product_attribute_images');
    }
};
