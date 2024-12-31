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
        'is_active'
    ];

    /**
     * Get the business that owns the product.
     */
    public function business()
    {
        return $this->belongsTo(BusinessInfo::class);
    }
}
