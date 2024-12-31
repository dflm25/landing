<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Traits\HasUuid;

class ProductAttributeImage extends Model
{
    use HasFactory, HasUuid;
    //
    protected $table = 'product_attribute_images';
    protected $fillable = ['attribute_values_id', 'product_id', 'image'];

    public function productAttribute()
    {
        return $this->belongsTo(AttributeValue::class);
    }
}
