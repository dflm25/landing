<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Traits\HasUuid;

class Product extends Model
{
    use HasFactory, HasUuid;

    protected $fillable = [
        'business_info_id',
        'name',
        'description',
        'picture',
        'base_price',
        'price_discount',
        'is_active'
    ];

    /**
     * Get the business that owns the product.
     */
    public function business()
    {
        return $this->belongsTo(BusinessInfo::class);
    }

    public function attributes ()
    {
        return $this->hasMany(ProductAttribute::class, 'product_id', 'id')
            ->with('attribute');
    }

    public function combinations ()
    {
        return $this->hasMany(ProductAttributeStock::class, 'product_id', 'id')->orderBy('name');
    }

    public function images()
    {
        return $this->hasMany(ProductAttributeImage::class, 'product_id', 'id');
    }
}
