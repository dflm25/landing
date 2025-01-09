<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUuid;

class ProductAttributeStock extends Model
{
    use HasUuid;
    protected $table = 'product_attribute_stocks';
    protected $fillable = [
        'product_id',
        'attribute_value_first',
        'attribute_value_second',
        'name',
        'sku',
        'stock',
        'price'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function attributeValueFirst()
    {
        return $this->belongsTo(AttributeValue::class, 'attribute', 'attribute_value_first');
    }
}
