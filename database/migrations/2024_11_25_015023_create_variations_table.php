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
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('attribute_values', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('attribute_id')->constrained('attributes')->onDelete('cascade');
            $table->string('value');
            $table->timestamps();
        });

        Schema::create('product_variations', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('product_id')->constrained('products')->onDelete('cascade');
            $table->json('combinations'); // Stores the attribute-value combinations in JSON
            $table->string('sku')->unique();
            $table->decimal('price', 10, 2);
            $table->integer('stock')->default(0);
            $table->timestamps();
        });

        Schema::create('variation_attributes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('product_variation_id')->constrained('product_variations')->onDelete('cascade');
            $table->foreignUuid('attribute_id')->constrained('attributes')->onDelete('cascade');
            $table->foreignUuid('attribute_value_id')->constrained('attribute_values')->onDelete('cascade');
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
        Schema::dropIfExists('product_variations');
        Schema::dropIfExists('variation_attributes');
    }
};
